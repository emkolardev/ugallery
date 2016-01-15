#ugallery

uses polymer-based web components to create flexible lightbox2 photo galleries

###the components:
- u-photo.html (components/u-photo.html)
- u-gallery.html (components/u-gallery.html)

###dependencies: 
- polymer.html (bower/polymer/polymer.html)
- webcomponents-lite.js (bower/webcomponentsjs/webcomponents-lite.js)
- jquery.min.js (js/vendor/jquery.min.js)
- lightbox.min.js (lightbox/js/lightbox.min.js)
- lightbox.css (lightbox/css/lightbox.css)

### ~~include for mobile gestures:~~
- ~~hammer.min.js (js/vendor/hammer.min.js)~~
- ~~as of right now, swiping right or left makes a random background color on the demo #1 page, but i haven’t gotten around to doing anything useful with this yet~~ (not using this stuff at all right now)

###about the u-photo html component:
- creates a gallery image with built-in lightbox features

###u-photo options:
- <b>image</b>: string, path to image
- <b>pixels</b>: number, sets pixel width of image; this will actually get converted to a grid value based on its size and the size of the viewport (optional; converted to a grid value)
- <b>album</b>: string, will include this image with others of this album in the lightbox (optional; defaults to "default-set“)
- <b>about</b>: string, shows up as the image caption in lightbox (optional)
- <b>grid</b>: number, determines the image width by setting the number of columns it will occupy (optional)
- <b>cushion</b>: number, sets a padding in pixels on the image (optional)
- <b>frame</b>: string, can be ’light’ or ‘dark’; default is none; adds a 6px frame onto the image (optional)


###about the u-gallery html component:
- groups u-photo elements, can size all u-photos it contains into grid
- this can be used solely for grouping & sizing images, or used to display just a cover image that can be clicked to bring up the entire gallery in a lightbox

###u-gallery options:
- <b>pixels</b>: number, sets width in pixels for the entire gallery’s outer bounds (optional; width defaults to 100%)
- <b>percent</b>: number, sets width in percent value for the entire gallery’s outer bounds (optional; width defaults to 100%)
- <b>album</b>: string, necessary if using cover image & must match album of its u-photos (defaults to "default-album”)
- <b>about</b>: string, shows up as the caption in lightbox (optional)
- <b>cover</b>: string, path to cover image, will enable this feature if value is given (optional)
- <b>grid</b>: number, sets the number of columns in gallery and determines image widths (optional; ~~NOTE that this is only working in Chrome right now~~ (fixed))
- <b>gap</b>: number, sets the space in pixels between rows in this gallery (optional ~~NOTE that this currently breaks the gallery if images aren't all the same size, so use with caution~~ (fixed, i think))
- <b>cushion</b>: number, sets a padding in pixels on all the images (optional)

###resource links
- polymer: https://github.com/Polymer/polymer
- webcomponentsjs: https://github.com/webcomponents/webcomponentsjs)
- jQuery: https://jquery.com/
- lightbox2: https://github.com/lokesh/lightbox2/

###todo:
- ~~implement better touch gestures with hammer~~ (later, later, later)
- ~~make the ‘width’ property for u-photos~~ (done)
- ~~figure out why~~ ~~(u-gallery elements)~~ ~~cover photos only work in chrome (partially fixed)~~ (fixed!)
- ~~fix the gap property so it doesn’t sometimes break the grid~~ (pretty sure this is good now)
- update demos: recreate them with working components!