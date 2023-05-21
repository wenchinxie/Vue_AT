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
import axios from 'axios'

export default {
    name:'DayTransactionChart',
    data() {
        return {
            day_trans:''
        } 
    },

    mounted(){
        this.getDayTrans()
    },

  methods: {
        async getDayTrans(){

            const stockid = this.$route.params.stockid
            await axios
            .get(`/api/v1/comp/${stockid}/DayTransaction/`)
            .then(response => {
                this.day_trans = response.data
                
            })
            .catch(error => {
                console.log(error)
            })
            console.log(this.day_trans)

            var candlestick_trace = {
  
            x: this.day_trans.Date, 
            
            close:this.day_trans.Close,
            
            decreasing: {line: {color: '#00CB19'}}, 
            
            high: this.day_trans.Max,

            increasing: {line: {color: '#FF0000'}}, 
            
            line: {color: 'rgba(31,119,180,1)'}, 
            
            low: this.day_trans.Min,

            open: this.day_trans.Open,
            
            type: 'candlestick',

            xaxis: 'x',
            
            yaxis: 'y',

            name: 'candlestick'

            };
            console.log(this.day_trans.TradeVolume)
            var trace2 = {
                x: this.day_trans.Date,
                y: this.day_trans['TradeVolume'], 
                name: '交易量',
                type: 'bar',
                xaxis:'x',
                yaxis:'y2',
                };
                
            var trace3 = {
                x: this.day_trans.Date,
                y: this.day_trans['DayTradeVolume'], 
                name: '當沖量',
                type: 'bar',
                xaxis:'x',
                yaxis:'y2',
            };

            var stock_price = [candlestick_trace, trace2, trace3];

            // var groupedDataWeek = Plotly.groupby(candlestick_trace, 'x', 'week')

            var layout = {       
                grid: {
                    rows: 2,
                    columns: 1,
                    roworder:'top to bottom',
                    pattern:'coupled',
                    ygap:0.7
                },
                xaxis: {
                    domain:[0,1],
                    autorange: true,
                    title: 'Date',
                    rangeslider: {visible: false},
                    rangebreaks: [{
                        values: this.day_trans['Missing Date']
                    }],
                    rangeselector: {
                        x: 0,
                        y: 1.2,
                        xanchor: 'left',
                        font: {size:18},
                        buttons: [{
                            step: 'month',
                            stepmode: 'backward',
                            count: 1,
                            label: '1 month'
                        }, {
                            step: 'month',
                            stepmode: 'backward',
                            count: 6,
                            label: '6 months'
                        }, {
                            step: 'all',
                            label: 'All dates'
                        }]
                    },

                    anchor:'y',
                    id:'x',
                    showspikes: true,
                },
                xaxis2:{
                    matches: 'x',
                    anchor: 'x',
                    rangebreaks: [{
                        values: this.day_trans['Missing Date']
                    }],
                },
                yaxis: {
                    domain: [0.6,1],
                    showgrid: true,
                    zeroline: false,
                    showline: false,
                    id:'y'
                    },
                yaixs2: {
                    domain: [0, 0.4],
                    title: 'Bar chart',
                    anchor: 'x',
                    side: 'left',
                    id: 'y2'
                },
                barmode:'grouped',
                showlegend: true,
                height: this.row*500,
                spikemode: 'across',
                spikesnap: 'cursor',
                hovermode: 'x unified',
                calendar :'taiwan'
            }

            var config = {
                displayModeBar: false,
                responsive: true
                };

            Plotly.newPlot('candle_stick_plot', stock_price, layout, config);

            var myPlot = document.getElementById('candle_stick_plot');
            
            myPlot.on('plotly_hover', function(eventdata){
                if(eventdata.xvals){
                    Plotly.Fx.hover(myPlot,
                    {xval:eventdata.xvals[0]},
                    ['xy','xy2'])
                }
        })},

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
        xaxis: "x1",
        yaxis: "y2"
        };

        var layout = {
        xaxis: {
            rangeslider: {},
            domain: [0, 1],
            anchor: "y",
            id: "x",
            hovermode: 'x unified'
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