ymaps.ready(function () {
    let myMap = new ymaps.Map('map', {
            center: [53.89002908347792, 27.574736463661242],
            zoom: 18,
            controls: []
        }),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: '',

        }, {
            iconLayout: 'default#image',
            iconImageHref: 'images/pointer.png',
            iconImageSize: [40, 55],
            iconImageOffset: [0, -27]
        });

    myMap.geoObjects.add(myPlacemark);
});