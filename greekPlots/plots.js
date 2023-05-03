/*
    goal is to make a clustered column chart
        grab all the greek names - store in an array
        grab all the roman names - store in an array
        grab all greek search results - store in an array
        grab all roman search results - store in an array
*/

// declare the arrays to hold each set of data
let greekNames = [];
let romanNames = [];
let greekSearchResults = [];
let romanSearchResults = [];
let pairs = [];

// for loop to populate the arrays
// data.js and all of it's information (searchResults array is available!!!)
for(var i = 0; i < searchResults.length; i++)
{
    // access each entry of data
    result = searchResults[i];

    // with each entry, push the information into the neccesary array
    pairs.push(result.pair);
    romanNames.push(result.romanName);
    greekNames.push(result.greekName);
    romanSearchResults.push(result.romanSearchResults);
    greekSearchResults.push(result.greekSearchResults);
};

// to plot the data, first we need to have our trace information
let greekTrace ={
    x: pairs,
    y: greekSearchResults,
    text: greekNames,
    name: "Greek",
    type: "bar"
};

let romanTrace ={
    x: pairs,
    y: romanSearchResults,
    text: romanNames,
    name: "Roman",
    type: "bar"
};

// create the array for out traces to be plotted together
let data = [greekTrace, romanTrace];

// add the layout properties
let layout = {
    title: "Greek vs. Roman Search Results",
    barmode: "group",
    margin: {
        l: 50,
        r: 50,
        b: 200,
        t: 50,
        pad: 4
    }
};

// render the plot to tag with id = 'plot'
Plotly.newPlot("plot", data, layout);