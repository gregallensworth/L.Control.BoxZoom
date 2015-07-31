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

* **position** Any of the usual _position_ flags for a L.Control subclass: _topright_, _topleft_, and so on.

