function initialMap(data) {
  ymaps.ready(() => {
    const myMap = new ymaps.Map("map", {
        center: [43.237163, 76.945627],
        zoom: 11
    });

    for (let i = 0; i < data.length; i++) {
      let point = data[i];
      let content = '';

      for (let j = 0; j < point.posts.length; j++) {
        content += point.posts[j].kazhydrometCode + ': ' + point.posts[j].mpcDailyAverage + ' | ';
      }

      let marker = new ymaps.Placemark([point.coors[0], point.coors[1]], {
        balloonContent: content
      });
      myMap.geoObjects.add(marker);
    }
  });
}

export default initialMap;