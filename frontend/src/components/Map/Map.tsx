import { useEffect, useRef } from 'react';

const Map = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let isDisposed = false;
    let myMap: YandexMapInstance | undefined;

    // Load Yandex Maps script
    const script = document.createElement('script');
    script.src = 'https://api-maps.yandex.ru/2.1/?apikey=593adae1-7cb4-48c0-87c5-988f05b19aec&lang=ru_RU';
    script.async = true;
    script.onload = () => {
      if (isDisposed) return;

      const ymaps = window.ymaps;
      if (ymaps) {
        ymaps.ready(() => {
          if (isDisposed || !mapRef.current) return;

          const initializedMap = new ymaps.Map(
            mapRef.current,
            {
              center: [53.89002908347792, 27.574736463661242],
              zoom: 18,
              controls: []
            }
          );
          myMap = initializedMap;

          const myPlacemark = new ymaps.Placemark(
            initializedMap.getCenter(),
            {
              hintContent: '',
            },
            {
              iconLayout: 'default#image',
              iconImageHref: '/images/pointer.png',
              iconImageSize: [40, 55],
              iconImageOffset: [0, -27]
            }
          );

          initializedMap.geoObjects.add(myPlacemark);
        });
      }
    };
    document.head.appendChild(script);

    return () => {
      isDisposed = true;
      myMap?.destroy();
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div
      id="map"
      ref={mapRef}
      style={{
        width: '100%',
        height: '500px',
        margin: '0',
        padding: '0'
      }}
    ></div>
  );
};

export default Map;
