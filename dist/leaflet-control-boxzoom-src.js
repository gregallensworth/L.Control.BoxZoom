/*
 * L.Control.BoxZoom
 * A visible, clickable control for doing a box zoom.
 * https://github.com/gregallensworth/L.Control.BoxZoom
 */
L.Control.BoxZoom = L.Control.extend({
    options: {
        position: 'topright',
        title: 'Click here then draw a square on the map, to zoom in to an area'
    },
    initialize: function(options) {
        L.setOptions(this, options);
        this.map    = null;
        this.active = false;
    },
    onAdd: function (map) {
        // add a linkage to the map, since we'll be managing map layers
        this.map = map;
        this.active = false;

        // create our button: uses FontAwesome cuz that font is... awesome
        // assign this here control as a property of the visible DIV, so we can be more terse when writing click-handlers on that visible DIV
        this.controlDiv           = L.DomUtil.create('div', 'leaflet-control-boxzoom');

        // if we're not using an icon, add the background image class
        if (!this.options.iconClasses) {
            L.DomUtil.addClass(this.controlDiv, 'with-background-image');
        }
        if (this.options.divClasses) {
            L.DomUtil.addClass(this.controlDiv, this.options.divClasses);
        }
        this.controlDiv.control   = this;
        this.controlDiv.title     = this.options.title;
        this.controlDiv.innerHTML = ' ';
        L.DomEvent
            .addListener(this.controlDiv, 'mousedown', L.DomEvent.stopPropagation)
            .addListener(this.controlDiv, 'click', L.DomEvent.stopPropagation)
            .addListener(this.controlDiv, 'click', L.DomEvent.preventDefault)
            .addListener(this.controlDiv, 'click', function () {
                this.control.toggleState();
            });

        // start by toggling our state to off; this disables the boxZoom hooks on the map, in favor of this one
        this.setStateOff();

        if (this.options.iconClasses) {
            var iconElement = L.DomUtil.create('i', this.options.iconClasses, this.controlDiv);
            if (iconElement) {
                iconElement.style.color = this.options.iconColor || 'black';
                iconElement.style.textAlign = 'center';
                iconElement.style.verticalAlign = 'middle';
            } else {
                console.log('Unable to create element for icon');
            }
        }

        // done!
        return this.controlDiv;
    },

    toggleState: function () {
        this.active ? this.setStateOff() : this.setStateOn();
    },
    setStateOn: function () {
        L.DomUtil.addClass(this.controlDiv,'leaflet-control-boxzoom-active');
        this.active = true;
        this.map.dragging.disable();
        if (!this.options.enableShiftDrag) {
            this.map.boxZoom.addHooks();
        }

        this.map.on('mousedown', this.handleMouseDown, this);
        this.map.on('boxzoomend', this.setStateOff, this);
        if (!this.options.keepOn) {
            this.map.on('boxzoomend', this.setStateOff, this);
        }

        L.DomUtil.addClass(this.map._container,'leaflet-control-boxzoom-active');
    },
    setStateOff: function () {
        L.DomUtil.removeClass(this.controlDiv,'leaflet-control-boxzoom-active');
        this.active = false;
        this.map.off('mousedown', this.handleMouseDown, this);
        this.map.dragging.enable();
        if (!this.options.enableShiftDrag) {
            this.map.boxZoom.removeHooks();
        }

        L.DomUtil.removeClass(this.map._container,'leaflet-control-boxzoom-active');
    },

    handleMouseDown: function (event) {
        this.map.boxZoom._onMouseDown.call(this.map.boxZoom, { clientX:event.originalEvent.clientX, clientY:event.originalEvent.clientY, which:1, shiftKey:true });
    }
});
L.Control.boxzoom = function(options) {
    return new L.Control.BoxZoom(options);
}
