import * as L from 'leaflet';

declare module 'leaflet' {
    interface BoxZoomOptions extends ControlOptions {
        title?: string;
        aspectRatio?: number;
        divClasses?: string;
        enableShiftDrag?: boolean;
        iconClasses?: string;
        keepOn?: boolean;
    }

    namespace Control {
        class BoxZoom extends L.Control {
            constructor(options?: BoxZoomOptions);

            public toggleState(): void;
            public setStateOn(): void;
            public setStateOff(): void;
            public handleMouseDown(event: MouseEvent): void;
        }

        function boxzoom(options?: BoxZoomOptions): Control.BoxZoom;
    }
}
