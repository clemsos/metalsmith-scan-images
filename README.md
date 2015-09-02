# Metalsmith Scan Images

A metalsmith plugin to easily create image galleries. 

This plugin will scan all images included in folders following a pattern (ex ```'content/projects/**/*.md'```) and add an array of paths called ```images``` to each post metadata. 

Supported extensions : ```"jpg", "svg", "png", "gif", "JPG", "SVG", "PNG", "GIF"```

## Install

```sh
npm install --save metalsmith-scan-images
```

## API

```js
var Metalsmith = require('metalsmith');
var images = require("metalsmith-scan-images");

var metalsmith = new Metalsmith(__dirname)
  .use(images( 'content/**/**/index.html' ))
```
## Use it

A basic example of template for an image gallery

```html
<div id="gallery" class="nine columns">
    <ul >
    {{#each images }}
        <li>
            <img src="{{this}}" alt="">
        </li>
    {{/each}}
    </ul>
</div>
```
