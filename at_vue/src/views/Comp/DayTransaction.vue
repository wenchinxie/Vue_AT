<template>
    <div class="container-fluid">
        <div class="row">
            <h2 class="mt-5">S</h2>
            <div id='candle_stick_plot'></div>
        </div>
    </div>
</template>

<script>
import Plotly from 'plotly.js/dist/plotly' 

export default {
    name:'LineChart',
    data() {
        return {
            non_trading_dates : ['2017-01-21', '2017-01-22'],
            row:2
        } 
    },

    mounted(){
        this.getProductData()
    },

  methods: {
        async getProductData(){



            var candlestick_trace = {
  
            x: ['2017-01-17', '2017-01-18', '2017-01-19', '2017-01-20', '2017-01-23', '2017-01-24', '2017-01-25', '2017-01-26', '2017-01-27', '2017-01-30', '2017-01-31', '2017-02-01', '2017-02-02', '2017-02-03', '2017-02-06', '2017-02-07', '2017-02-08', '2017-02-09', '2017-02-10'], 
            
            close: [120, 119.989998, 119.779999, 120, 120.080002, 119.970001, 121.879997, 121.940002, 121.949997, 121.629997, 121.349998, 128.75, 128.529999, 129.080002, 130.289993, 131.529999, 132.039993, 132.419998, 132.119995], 
            
            decreasing: {line: {color: '#00CB19'}}, 
            
            high: [120.239998, 120.5, 120.089996, 120.449997, 120.809998, 120.099998, 122.099998, 122.440002, 122.349998, 121.629997, 121.389999, 130.490005, 129.389999, 129.190002, 130.5, 132.089996, 132.220001, 132.449997, 132.940002], 
            
            increasing: {line: {color: '#FF0000'}}, 
            
            line: {color: 'rgba(31,119,180,1)'}, 
            
            low: [118.220001, 119.709999, 119.370003, 119.730003, 119.769997, 119.5, 120.279999, 121.599998, 121.599998, 120.660004, 120.620003, 127.010002, 127.779999, 128.160004, 128.899994, 130.449997, 131.220001, 131.119995, 132.050003], 
            
            open: [118.339996, 120, 119.400002, 120.449997, 120, 119.550003, 120.419998, 121.669998, 122.139999, 120.93, 121.150002, 127.029999, 127.980003, 128.309998, 129.130005, 130.539993, 131.350006, 131.649994, 132.460007], 
            
            type: 'candlestick',

            xaxis: 'x',
            
            yaxis: 'y',

            name: 'candlestick'

            };
            var trace2 = {
                x: ['2017-01-17', '2017-01-18', '2017-01-19', '2017-01-20', '2017-01-23', '2017-01-24', '2017-01-25', '2017-01-26', '2017-01-27', '2017-01-30', '2017-01-31', '2017-02-01', '2017-02-02', '2017-02-03', '2017-02-06', '2017-02-07', '2017-02-08', '2017-02-09', '2017-02-10'], 
                y: [1200, 1190.989998, 1190.779999, 1200, 120.080002, 119.970001, 121.879997, 121.940002, 121.949997, 121.629997, 121.349998, 128.75, 128.529999, 129.080002, 130.289993, 131.529999, 132.039993, 132.419998, 132.119995], 
                name: 'LA Zoa',
                type: 'bar',
                xaxis:'x2',
                yaxis:'y2',
                };
                
            var trace3 = {
                x: ['2017-01-17', '2017-01-18', '2017-01-19', '2017-01-20', '2017-01-23', '2017-01-24', '2017-01-25', '2017-01-26', '2017-01-27', '2017-01-30', '2017-01-31', '2017-02-01', '2017-02-02', '2017-02-03', '2017-02-06', '2017-02-07', '2017-02-08', '2017-02-09', '2017-02-10'], 
                y: [900, 1090.989998, 1390.779999, 1400, 150.080002, 219.970001, 121.879997, 121.940002, 121.949997, 121.629997, 121.349998, 128.75, 128.529999, 129.080002, 130.289993, 131.529999, 132.039993, 132.419998, 132.119995], 
                name: 'LA Zoo',
                type: 'bar',
                xaxis:'x2',
                yaxis:'y2',
            };

            var stock_price = [candlestick_trace, trace2, trace3];

            // var groupedDataWeek = Plotly.groupby(candlestick_trace, 'x', 'week')

            var layout = {       
                barmode:'grouped',
                dragmode: 'zoom',
                showlegend: true,
                height: this.row*500,
                grid: {
                    rows: 3,
                    columns: 1,
                    roworder:'top to bottom',
                    pattern:'independent'
                },
                xaxis: {
                    autorange: true,
                    title: 'Date',
                    rangeslider: {visible: false},
                    rangebreaks: [{
                        values: this.non_trading_dates
                    }],
                    anchor:'y',
                    id:'x'
                },
                yaxis: {
                        showgrid: true,
                        zeroline: false,
                        showline: false,
                        anchor:'x',
                        id:'y'
                    },
                yaixs2: {
                    title: 'Bar chart',
                    anchor: 'x',
                    side: 'left',
                    overlaying: 'y',
                    id: 'y2'
                },
                xref: 'paper'
            }

            Plotly.newPlot('candle_stick_plot', stock_price, layout);




        },
    async getDayTransaction(){
        // Draw a vertical line and move as users' mouse moves 
        var trace1 = {
        x: [1, 2, 3, 4],
        y: [10, 15, 13, 17],
        type: "scatter"
        };

        var trace2 = {
        x: [1, 2, 3, 4],
        y: [16, 5, 11, 9],
        type: "scatter"
        };

        var layout = {
        xaxis: {
            range: [0, 5]
        },
        yaxis: {
            range: [0, 20]
        },
        shapes: [
            {
            type: "line",
            x0: 2,
            y0: 0,
            x1: 2,
            y1: 20,
            yref: "paper",
            line: {
                color: "red"
            }
            }
        ],
        annotations: [
            {
            x: 2,
            y: 20,
            xref: "x",
            yref: "paper",
            text: "2",
            showarrow: false
            }
        ]
        };

        var data = [trace1, trace2];

        var myDiv = Plotly.newPlot("myDiv", data, layout);

        myDiv.on("relayout", function(event) {
        var x = event.xaxis.range[0];
        Plotly.update("myDiv", {}, {
            shapes: [
            {
                type: "line",
                x0: x,
                y0: 0,
                x1: x,
                y1: 20,
                yref: "paper",
                line: {
                color: "red"
                }
            }
            ],
            annotations: [
            {
                x: x,
                y: 20,
                xref: "x",
                yref: "paper",
                text: x.toString(),
                showarrow: false
            }
            ]
        });
        });




    }
    ,
    async getDayTransaction1(){
        var trace1 = {
        x: [1, 2, 3, 4],
        close: [10, 15, 13, 17],
        high: [12, 16, 14, 18],
        low: [9, 13, 10, 15],
        open: [11, 14, 12, 16],
        type: "candlestick",
        xaxis: "x",
        yaxis: "y"
        };

        var trace2 = {
        x: [1, 2, 3, 4],
        y: [16, 5, 11, 9],
        type: "bar",
        xaxis: "x",
        yaxis: "y2"
        };

        var layout = {
        xaxis: {
            rangeslider: {},
            domain: [0, 1],
            anchor: "y",
            id: "x"
        },
        yaxis: {
            title: "Candlestick",
            domain: [0.5, 1],
            anchor: "x",
            id: "y"
        },
        yaxis2: {
            title: "Bar Chart",
            domain: [0, 0.5],
            anchor: "x",
            side: "left",
            overlaying: "y",
            id: "y2"
        },
        updatemenus: [
            {
            buttons: [
                {
                args: [
                    {
                    xaxis: {
                        autorange: true
                    },
                    yaxis: {
                        autorange: true
                    },
                    yaxis2: {
                        autorange: true
                    }
                    },
                    {
                    "xaxis.autorange": false,
                    "yaxis.autorange": false,
                    "yaxis2.autorange": false
                    }
                ],
                label: "Reset Zoom",
                method: "relayout"
                }
            ],
            showactive: false,
            type: "buttons",
            x: 0.1,
            xanchor: "right",
            y: 1.1,
            yanchor: "top"
            }
        ],
        showlegend: false
        };

        var data = [trace1, trace2];

        Plotly.newPlot("myDiv", data, layout);

    }

            
}
}

</script>