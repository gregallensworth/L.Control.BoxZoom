# L.Control.BoxZoom
A Leaflet control to do a box zoom.

Not everyone knows about holding down Shift, and prefer to have a visible, clickable button to do box zooms.

Live demo: http://gregallensworth.github.io/L.Control.BoxZoom/

# Installation and Example
For the impatient, copy-and-paste out of the working example, _index.html_

The _dist/_  folder contains the essentials: a JS file, a CSS file, and a single SVG icon.

Simply include the JS and CSS as usual:

    <script src="dist/leaflet-control-boxzoom.js"></script>
    <link rel="stylesheet" href="dist/leaflet-control-boxzoom.css" />

Then add the Control to your map:

    L.Control.boxzoom({ position:'topleft' }).addTo(map);

# Options

* **enableShiftDrag** Enable the original functionality of Leaflet's shift-drag box zoom, in addition to the button.
* **iconClasses** Any valid classes for an icon element. Used for easily adding a custom icon to the button.
* **iconColor** Use to set the color of the custom icon. Accepts anything valid for a standard CSS color value, e.g. "black", "#000000", etc. Defaults to "black".
* **keepOn** Boolean. Controls whether the zoombox state ends when drawing a zoom, or whether it's kept on. Defaults to false.
* **position** Any of the usual _position_ flags for a L.Control subclass: _topright_, _topleft_, and so on.
* **title** A string to give information to user.
