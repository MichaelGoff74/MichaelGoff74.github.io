// set a function that initalized the plot
function init()
{
    // load the data and load the charts
    d3.json("data.json").then(function(data){
        trace = {
            x: data.map(data => data.pair),
            y: data.map(data => data.greekSearchResults),
            type: "bar"
        }

        traceData = [trace];

        layout = {
            title: "Greek Data"
        }

        Plotly.newPlot("plot1", traceData, layout);
    })
}

// make a function that updates the plot
function updatePlot()
{
    d3.json("data.json").then(function(data){
        // d3 selector on the drop down menu
        let dropdown = d3.select("#selDataset");

        // access the nested value properties from the options in the dropdown
        let dataset = dropdown.property("value");

        // define the arrays
        let x = [];
        let y = [];
        let label = "";

        // based on the value attribute from either option in the drop down
        // establish the values of the arrays for the data for the traces
        if(dataset == "greek")
        {
            x = data.map(data => data.pair);
            y = data.map(data => data.greekSearchResults);
            label = 'Greek Search Results'
        }
        else if(dataset == "roman")
        {
            x = data.map(data => data.pair);
            y = data.map(data => data.romanSearchResults);
            label = 'Roman Search Results';
        }

        // call on Plotly.restyle() to restyle the plot
        Plotly.restyle("plot1", "x", [x]);
        Plotly.restyle("plot1", "y", [y]);
        
    })
}

// call on d3 selector associate the dropdown with an object
d3.selectAll("#selDataset").on("change", updatePlot)


// call init()
init();