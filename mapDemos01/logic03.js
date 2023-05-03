/*
    City
Latitude
Longitude

New York
40.7128
-74.0059

Los Angeles
34.0522
-118.2437

Houston
29.7604
-95.3698

Omaha
41.2524
-95.9980

Chicago
41.8781
-87.6298
*/

/* 
zoom level be somewhat low - cener it on the USA 37.0902 -95.7129
*/

var myMap = L.map("map",
{
    center : [37.0902, -95.7129],
    zoom: 4
}
);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

var newyork =  L.marker(
    [40.7128, -74.0059],
).addTo(myMap);

marker.newyork ("Hello from New York, NY USA!")

var Chicago =  L.marker(
    [41.8781, -87.6298],
    {
        title: "Hello from Chicago, IL USA!"
    }
).addTo(myMap);

var Omaha =  L.marker(
    [41.2524, -95.9980],
    {
        title: "Hello from Omaha, NE USA!"
    }
).addTo(myMap);

var Houston =  L.marker(
    [29.7604, -95.3698],
    {
        title: "Hello from Houston, TX USA!"
    }
).addTo(myMap);

var LosAngeles =  L.marker(
    [34.0522, -118.2437],
    {
        title: "Hello from Los Angeles, CA USA!"
    }
).addTo(myMap);