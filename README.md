# L.Control.BoxZoom

A Leaflet control to do a box zoom. Not everyone knows about holding down Shift, and prefer to have a visible, clickable button to do box zooms.

Beyond that, this control also supports improvements over the stock box zoom behavior:
* ability to force an aspect ratio for the drawn zoom-box


# Installation and Example

## Super Quick

For the impatient, you can copy-paste from the live demo at http://gregallensworth.github.io/L.Control.BoxZoom/

## More Detailed

The _dist/_  folder contains the essentials: a JS file, a CSS file, and a single SVG icon.

Simply include the JS and CSS as usual:

    <script src="dist/leaflet-control-boxzoom.js"></script>
    <link rel="stylesheet" href="dist/leaflet-control-boxzoom.css" />

Then add the Control to your map:

    L.Control.boxzoom({ position:'topleft' }).addTo(map);

Contructor Options are as follows:

* **enableShiftDrag** Enable the original functionality of Leaflet's shift-drag box zoom, in addition to the button. Defaults to `false` to disable Leaflet's shift-draw behavior, so the button must be used.
* **keepOn** Boolean. Controls whether the zoombox button will remain active after zooming. Defaults to `false` (after zoom, turn off).
* **aspectRatio** Number of fraction. Force the box to the given width-to-height aspect ratio. Easiest if you express it as a fraction e.g. `aspectRatio: 8/7` Defaults to `null` so no aspect ratio will be enforced and any box may be drawn.
* **title** A tooltip when the user hovers their mouse over the control.
* **position** Any of the usual _position_ flags for a L.Control subclass: *topright*, *topleft*, and so on.
* **divClasses** Add classes to the div that holds the Leaflet control.
* **iconClasses** Any valid classes for an icon element. Used for easily adding a custom icon to the button.
