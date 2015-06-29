# Metalsmith Scan Images

A metalsmith plugin that scan all images in subfolders and add it to metadata.

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
