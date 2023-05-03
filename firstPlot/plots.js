// define a JS obejct (value - key pairs) for trace information

var trace = {
    x: xData,
    y: yData
};

// data array that contains our trace info
var data = [trace];

// specify layout attributes
var layout = {
    title: "A Plotly Plot for you Plotters"
};

// call Plotly.newPlot()
// takes in three pieces of information
    // destination - an id in the html
    // data array
    // layout attribute object
Plotly.newPlot("plot", data, layout);