d3.json('/data/location', function (data) {
    var data = data;
    // console.log(data[0]['locations']['LocationOne'])
    var distance_One = data[0]['locations']['LocationOne']['distance_in_meters'][0]
    var address_One = data[0]['locations']['LocationOne']['address'][0]
    var city_One = data[0]['locations']['LocationOne']['city'][0]
    var name_One = data[0]['locations']['LocationOne']['name'][0]
    var storeID_One = data[0]['locations']['LocationOne']['store_no'][0]
    var phone_One = data[0]['locations']['LocationOne']['phone'][0]
    var lat_One = data[0]['locations']['LocationOne']['lat'][0]
    var lon_One = data[0]['locations']['LocationOne']['lon'][0]

    // console.log(1, lat_One)
    // console.log(1, lon_One)


    document.getElementById('nameOne').innerHTML = "Store Name:" + " " + String(name_One);
    document.getElementById('cityOne').innerHTML = "City:" + " " + String(city_One);
    document.getElementById('storeIDOne').innerHTML = "Store Number:" + " " + String(storeID_One);
    document.getElementById('cityOne').innerHTML = "City:" + " " + String(city_One);
    document.getElementById('addressOne').innerHTML = "Address:" + " " + String(address_One);
    document.getElementById('distanceOne').innerHTML = "Distance:" + " " + String(Math.round(
            distance_One / 1609)) + " " +
        "m";
    document.getElementById('phoneOne').innerHTML = "Phone:" + " " + String(phone_One);



    var distance_Two = data[0]['locations']['LocationTwo']['distance_in_meters'][0]
    var address_Two = data[0]['locations']['LocationTwo']['address'][0]
    var city_Two = data[0]['locations']['LocationTwo']['city'][0]
    var name_Two = data[0]['locations']['LocationTwo']['name'][0]
    var storeID_Two = data[0]['locations']['LocationTwo']['store_no'][0]
    var phone_Two = data[0]['locations']['LocationTwo']['phone'][0]
    var lat_Two = data[0]['locations']['LocationTwo']['lat'][0]
    var lon_Two = data[0]['locations']['LocationTwo']['lon'][0]

    // console.log(2, lat_Two)
    // console.log(2, lon_Two)


    document.getElementById('nameTwo').innerHTML = "Store Name:" + " " + String(name_Two);
    document.getElementById('cityTwo').innerHTML = "City:" + " " + String(city_Two);
    document.getElementById('storeIDTwo').innerHTML = "Store Number:" + " " + String(storeID_Two);
    document.getElementById('cityTwo').innerHTML = "City:" + " " + String(city_Two);
    document.getElementById('addressTwo').innerHTML = "Address:" + " " + String(address_Two);
    document.getElementById('distanceTwo').innerHTML = "Distance:" + " " + String(Math.round(
        distance_Two / 1609)) + " " + "m";
    document.getElementById('phoneTwo').innerHTML = "Phone:" + " " + String(phone_Two);


    var distance_Three = data[0]['locations']['LocationThree']['distance_in_meters'][0]
    var address_Three = data[0]['locations']['LocationThree']['address'][0]
    var city_Three = data[0]['locations']['LocationThree']['city'][0]
    var name_Three = data[0]['locations']['LocationThree']['name'][0]
    var storeID_Three = data[0]['locations']['LocationThree']['store_no'][0]
    var phone_Three = data[0]['locations']['LocationThree']['phone'][0]
    var lat_Three = data[0]['locations']['LocationThree']['lat'][0]
    var lon_Three = data[0]['locations']['LocationThree']['lon'][0]

    // console.log(3, lat_Two)
    // console.log(3, lon_Two)


    document.getElementById('nameThree').innerHTML = "Store Name:" + " " + String(name_Three);
    document.getElementById('cityThree').innerHTML = "City:" + " " + String(city_Three);
    document.getElementById('storeIDThree').innerHTML = "Store Number:" + " " + String(
        storeID_Three);
    document.getElementById('cityThree').innerHTML = "City:" + " " + String(city_Three);
    document.getElementById('addressThree').innerHTML = "Address:" + " " + String(address_Three);
    document.getElementById('distanceThree').innerHTML = "Distance:" + " " + String(Math.round(
        distance_Three / 1609)) + " " + "m";
    document.getElementById('phoneThree').innerHTML = "Phone:" + " " + String(phone_Three);




    // map using leaflet

    // Creating map object
    var myMap = L.map("mapid", {
        center: [lat_One, lon_One],
        zoom: 10
    });
    // Adding tile layer
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
            '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets-satellite',
        accessToken: 'pk.eyJ1IjoiYmx0eHI5IiwiYSI6ImNqZGhqeXhtOTB6ZDAzMm8xamo5cHRmb3cifQ.lUfEpXhv5BlcfZ2c2gVLtQ'
    }).addTo(myMap);


    var location_one = L.marker([lat_One, lon_One]).addTo(myMap),
        location_two = L.marker([lat_Two, lon_Two]).addTo(myMap),
        location_three = L.marker([lat_Three, lon_Three]).addTo(myMap);


    location_one.bindPopup("<b>Store Name: " + String(name_One) + "</b><br>" + "Distance:" + " " +
            String(Math.round(
                distance_One / 1609)) + " " + "miles away"),

        location_two.bindPopup("<b>Store Name: " + String(name_Two) + "</b><br>" + "Distance:" +
            " " +
            String(Math.round(
                distance_Two / 1609)) + " " + "miles away"),

        location_three.bindPopup("<b>Store Name: " + String(name_Three) + "</b><br>" + "Distance:" +
            " " + String(Math.round(
                distance_Three / 1609)) + " " + "miles away");



});


d3.json('/data/stores/beerROOM', function (dataBeerRoom) {


    // var data = [{
    //     values: [19, 26, 55],
    //     labels: ['Residential', 'Non-Residential', 'Utility'],
    //     type: 'pie'
    // }];

    // Plotly.newPlot('myDiv', data);

    var dataBeerRoom = dataBeerRoom



    Highcharts.chart('container', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Has Beer Room: True or False'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) ||
                            'black'
                    }
                }
            }
        },
        series: [{
            name: 'True',
            colorByPoint: true,
            data: [{
                name: 'True',
                y: 412
            }, {
                name: 'False',
                y: 248,

            }]
        }]
    });









});




//              console.log(storeINFO)

// function initMap() {
//  var uluru = {
//      lat: -25.363,
//      lng: 131.044
//  }
//  var map = new google.maps.Map(document.getElementById('map'), {
//      zoom: 4,
//      center: uluru
//  });
//  var marker = new google.maps.Marker({
//      position: uluru,
//      map: map
//  });
// }