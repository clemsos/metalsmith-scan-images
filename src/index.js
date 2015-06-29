'use strict'

var debug = require('debug')('metalsmith-paths')
var path = require('path')
var fs = require("fs")
var matcher = require('minimatch');

/**
 * @param {Object} options
 * @return {Function}
 */

module.exports = function plugin (options) {
  console.log(options);

  return function (files, metalsmith, done) {
    setImmediate(done)

     var authorized_exts = ["jpg", "svg", "png", "gif"];

    Object.keys(files).forEach(function (file) {
      debug('process file: %s', file)

      if (path.parse) {
        debug('[node >= 0.11.15] using path.parse')
        files[file].path = path.parse(file)
      } else {
        // add file path info
        var extname = path.extname(file)

        files[file].path = {
          base: path.basename(file),
          dir: path.dirname(file),
          ext: extname,
          name: path.basename(file, extname)
        }

        var images= [];

      // check regexp
      if(matcher(file, options) ){

          var p = path.join(metalsmith.source(),path.dirname(file)) ;
          console.log(p);
          fs.readdir(p, function (err, dirfiles) {
            
              console.log(dirfiles);
              if (err) return err
              for (var i = 0; i < dirfiles.length; i++) {
                var dirfile = dirfiles[i];

                // get extension
                var ext = dirfile.split('.').pop();
                
                // check extension and remove thumbnails
                if (authorized_exts.indexOf(ext) != -1 && !matcher(dirfile,"thumb*") ) {
                    images.push(dirfile);
                }
              }
          })
      }

      files[file].images = images;
    }
      
      // add path meta for use in links in templates
      files[file].path.href = '/' + files[file].path.dir + '/'
    
    })
  }
}
