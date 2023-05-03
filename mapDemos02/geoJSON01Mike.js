// NYC Cords - 40.7128 74.0060

// make a variable to hold the map - center at the coordinates above
var myMap = L.map("map", {             
    center: [40.7128, -74.0060],
    zoom: 10
}); //goes to the variable in our HTML

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// get the GeoJSON Data - use D3!
/* d3.json("nyc.geojson").then(
    function(data)
    {
        // because this is nyc.geoJson file has polygon coordinates,
        // it plots the outlines of the neighborhoods
        L.geoJson(data).addTo(myMap);
    }
);
*/

// specify the properties in a variable to be used with the style property in L.geoJson()

var styling= {
    color: "white", // changes the outlines for each neighborhood to white
    fillColor: "pink", // changes the fill color to pink
    fillOpacity: 0.75, // change the opacity of each neighborhood
    weight: 1.5 // change the weight of the outline of neighborhoods
};
// we can change the color of the outlines of the neighborhoods


d3.json("nyc.geojson").then(
    function(data)
    {
        // because this is nyc.geoJson file has polygon coordinates,
        // it plots the outlines of the neighborhoods
        L.geoJson(data,
            {
                style: styling
                /*{
                    color: "white", // changes the outlines for each neighborhood to white
                    fillColor: "pink", // changes the fill color to pink
                    fillOpacity: 0.75, // change the opacity of each neighborhood
                    weight: 1.5 // change the weight of the outline of neighborhoods
                }*/
            }).addTo(myMap);
    }
);