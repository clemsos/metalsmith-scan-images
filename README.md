# Metalsmith Scan Images

A metalsmith plugin to easily create image galleries. 
The plugin scan all images in subfolders following a pattern and add it to metadata, so you can display it in a template afterwards.

## Install

```sh
npm install --save metalsmith-scan-images
```

## API

```js
var Metalsmith = require('metalsmith');
var paths = require('metalsmith-paths');

var metalsmith = new Metalsmith(__dirname)
  .use(paths( 'content/projects/**/*.md' ));
```
