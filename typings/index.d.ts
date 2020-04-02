declare namespace naver {
  namespace maps {
    export class Map {
      constructor(mapDiv: string | HTMLElement, mapOptions?: MapOptions);
      fitBounds(bounds: Bounds | BoundsLiteral | ArrayOfCoords | ArrayOfCoordsLiteral, margin?: margin): void;
      getCenter(): Coord;
      getCenterPoint(): Coord;
      getZoom(): number;
      setZoom(zoom: number, effect?: boolean): void;
      setCenter(center: Coord | CoordLiteral): void;
    }

    export class Marker {
      constructor(options: MarkerOptions);
      setMap(map: Map | null): void;
      setVisible(visible: boolean): void;
    }

    export class InfoWindow {
      constructor(options: InfoWindowOptions);
      open(map: Map | null, marker: Marker): void;
      close(): void;
      getMap(): Map;
      setContent(content: any): void;
    }

    // reference: https://navermaps.github.io/maps.js/docs/naver.maps.LatLng.html
    export class LatLng extends Point {
      constructor(lat?: number, lng?: number);
    }

    export class PointBounds {
      constructor(minPoint: Point, maxPoint: Point);
    }

    export class LatLngBounds {
      constructor(sw: LatLng, ne: LatLng);
    }

    export class Point {
      x: number;
      y: number;
      constructor({ x, y }: { x: number; y: number; });
      get lat(): number;
      get lng(): number;
    }

    export class Event {
      constructor();
      static addListener?(
        map: naver.maps.Map | naver.maps.Marker,
        event: string,
        callback: (event: Event) => void,
      ): void;
      static clearListeners?(map: naver.maps.Map, event: string): void;
    }

    export class MapTypeRegistry {
      constructor(mapTypeInfo: object, defaultMapTypeId?: string);
    }

    export class Size {
      constructor(width?: number, height?: number);
    }

    // ================SubTypes======================
    interface MarkerOptions {
      map: Map;
      position: Coord | CoordLiteral;
      animation?: Animation;
      icon?: string | ImageIcon | SymbolIcon | HtmlIcon;
      shape?: MarkerShape;
      title?: string;
      curor?: string;
      clickable?: boolean;
      draggable?: boolean;
      visible?: boolean;
      zindex?: number;
    }

    // ref. https://navermaps.github.io/maps.js.ncp/docs/naver.maps.InfoWindow.html
    interface InfoWindowOptions {
      content: string | HTMLElement;
      position?: Coord;
      zIndex?: number;
      maxWidth?: number;
      backgroundColor?: string;
      borderColor?: string;
      borderWidth?: number;
      anchorSize?: Size;
      anchorColor?: string;
      pixelOffset?: Point;
    }

    enum Animation {
      BOUNCE = 1,
      DROP,
    }
    type MarkerShape = {
      coords: any[]; // Array 타입이 명확하게 나와있지 않음
      type: string;
    };

    type ImageIcon = {
      url: string;
      size?: Size | SizeLiteral;
      scaledSize?: Size | SizeLiteral;
      origin?: Point | PointLiteral;
      anchor?: Point | PointLiteral | Position;
    };
    type SymbolIcon = {
      path: SymbolPath | Point[] | PointLiteral[];
      style?: SymbolStyle;
      radius?: number;
      fillColor?: string;
      fillOpacity?: number;
      strokeColor?: string;
      strokeWeight?: number;
      strokeOpacity?: number;
      anchor?: Point | PointLiteral | Position;
    };
    enum SymbolPath {
      BACKWARD_CLOSED_ARROW = 1,
      BACKWARD_OPEN_ARROW,
      CIRCLE,
      FORWARD_CLOSED_ARROW,
      FORWARD_OPEN_ARROW,
    }
    enum SymbolStyle {
      CIRCLE = 'circle',
      PATH = 'path',
      CLOSED_PATH = 'closedPath',
    }
    type HtmlIcon = {
      content: string | HTMLElement;
      size?: Size | SizeLiteral;
      anchor?: Point | PointLiteral | Position;
    };

    interface MapOptions {
      useStyleMap: boolean;
      background?: string;
      baseTileOpacity?: number;
      bounds?: Bounds | BoundsLiteral;
      center?: Coord | CoordLiteral;
      disableDoubleClickZoom?: boolean;
      disableDoubleTapZoom?: boolean;
      disableKineticPan?: boolean;
      disableTwoFingerTapZoom?: boolean;
      draggable?: boolean;
      keyboardShortcuts?: boolean;
      logoControl?: boolean;
      logoControlOptions?: LogoControlOptions;
      mapDataControl?: boolean;
      mapDataControlOptions?: MapDataControlOptions;
      mapTypeControl?: boolean;
      mapTypeControlOptions?: MapTypeControlOptions;
      mapTypeId?: string;
      mapTypes?: MapTypeRegistry;
      maxBounds?: Bounds | BoundsLiteral;
      maxZoom?: number;
      minZoom?: number;
      padding?: { top: number; right: number; bottom: number; left: number; };
      pinchZoom?: boolean;
      resizeOrigin?: Position;
      scaleControl?: boolean;
      scaleControlOptions?: ScaleControlOptions;
      scrollWheel?: boolean;
      size?: Size | SizeLiteral;
      overlayZoomEffect?: null | string;
      tileSpare?: number;
      tileTransition?: boolean;
      zoom?: number;
      zoomControl?: boolean;
      zoomControlOptions?: ZoomControlOptions;
      zoomOrigin?: Coord | CoordLiteral;
    }

    type Bounds = PointBounds | LatLngBounds;
    type BoundsLiteral = PointBoundsLiteral | LatLngBoundsLiteral;
    type ArrayOfCoords = Point[] | LatLng[];
    type ArrayOfCoordsLiteral = PointLiteral | LatLngLiteral;

    type LatLngBoundsLiteral = PointBoundsLiteral | LatLngBoundsObjectLiteral;
    type LatLngBoundsObjectLiteral = {
      north: number;
      east: number;
      south: number;
      west: number;
    };

    type PointBoundsLiteral = PointBoundsArrayLiteral | PointBoundsObjectLiteral;
    type PointBoundsArrayLiteral = [number, number, number, number]; // minX, minY, maxX, maxY
    type PointBoundsObjectLiteral = {
      minX: number;
      minY: number;
      maxX: number;
      maxY: number;
    };

    type Coord = Point | LatLng;
    type CoordLiteral = PointLiteral | LatLngLiteral;

    type PointLiteral = PointArrayLiteral | PointObjectLiteral;
    type PointArrayLiteral = [number, number]; // x, y
    type PointObjectLiteral = {
      x: number;
      y: number;
    };

    type LatLngLiteral = PointLiteral | LatLngObjectLiteral;
    type LatLngObjectLiteral = {
      lat: number;
      lng: number;
    };

    type LogoControlOptions = {
      position?: Position;
    };

    type MapDataControlOptions = {
      position?: Position;
    };

    type ScaleControlOptions = {
      position?: Position;
    };

    type margin = {
      top: number;
      right: number;
      bottom: number;
      left: number;
    };

    type MapTypeControlOptions = {
      mapTypeIds: MapTypeId[] | null;
      position?: Position;
      style?: MapTypeControlStyle;
    };
    enum MapTypeId {
      NORMAL = 'NORMAL',
      TERRAIN = 'TERRAIN',
      SATELLITE = 'SATELLITE',
      HYBRID = 'HYBRID',
    }
    enum MapTypeControlStyle {
      BUTTON,
      DROPDOWN,
    }

    type SizeLiteral = SizeArrayLiteral | SizeObjectLiteral;
    type SizeArrayLiteral = [number, number]; // width, height
    type SizeObjectLiteral = {
      width: number;
      height: number;
    };

    type ZoomControlOptions = {
      position?: Position; // default: TOP_LEFT
      style?: ZoomControlStyle; // default: LARGE
      legendDiabled?: boolean; // default: false
    };
    enum ZoomControlStyle {
      LARGE,
      SMALL,
    }
  }
}
