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

###include for mobile gestures:
- ~~hammer.min.js (js/vendor/hammer.min.js)
- as of right now, swiping right or left makes a random background color on the demo #1 page, but i haven’t gotten around to doing anything useful with this yet~~ (not using at all right now)

###about the u-photo html component:
- creates a gallery image with built-in lightbox features

###u-photo options:
- image: string, path to image
- pixels: number, sets pixel width of image; this will actually get converted to a grid value based on its size and the size of the viewport (optional; converted to a grid value)
- album: string, will include this image with others of this album in the lightbox (optional; defaults to "default-set“)
- about: string, shows up as the image caption in lightbox (optional)
- grid: number, determines the image width by setting the number of columns it will occupy (optional)
- cushion: number, sets a padding on the image (optional)
- frame: string, can be ’light’ or ‘dark’; default is none; adds a 6px frame onto the image (optional)


###about the u-gallery html component:
- groups u-photo elements, can size all u-photos it contains into grid
- this can be used solely for grouping & sizing images, or used to display just a cover image that can be clicked to bring up the entire gallery in a lightbox

###u-gallery options:
- width: string, can be Npx or N%, but % values are recommended (optional; defaults to 100%)
- album: string, necessary if using cover image & must match album of its u-photos (defaults to "default-album”)
- about: string, shows up as the caption in lightbox (optional)
- cover: string, path to cover image, will enable this feature if value is given (optional)
- grid: number, sets the number of columns in gallery and determines image widths (optional; ~~NOTE that this is only working in Chrome right now~~ (fixed)
- gap: string, can be Npx or N%, sets the space between rows in this gallery (optional; NOTE that this currently breaks the gallery if images aren't all the same size, so use with caution)

###resource links
- Polymer: https://github.com/Polymer/polymer
- Webcomponentsjs: https://github.com/webcomponents/webcomponentsjs)
- JQuery: https://jquery.com/
- Lightbox: https://github.com/lokesh/lightbox2/

###todo:
- ~~implement better touch gestures with hammer~~ (later, later, later)
- ~~make the ‘width’ property for u-photos~~ (done)
- ~~figure out why~~ ~~(u-gallery elements)~~ ~~cover photos only work in chrome (partially fixed)~~ (fixed!)
- fix the gap property so it doesn’t sometimes break the grid