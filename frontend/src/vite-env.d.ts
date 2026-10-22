/// <reference types="vite/client" />

interface YandexMapInstance {
  destroy: () => void;
  geoObjects: { add: (placemark: unknown) => void };
  getCenter: () => [number, number];
}

interface YandexMapsApi {
  ready: (callback: () => void) => void;
  Map: new (element: HTMLElement, options: object) => YandexMapInstance;
  Placemark: new (coordinates: [number, number], properties: object, options: object) => unknown;
}

interface Window {
  ymaps?: YandexMapsApi;
}
