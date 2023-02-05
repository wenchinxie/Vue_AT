<template>
    <keep-alive>
        <div id="LineChart" class="col-fluid"></div>
    </keep-alive>
</template>

<script>
import Plotly from 'plotly.js/dist/plotly' 
import axios from 'axios'

export default {
    name:'LineChart',
    data() {
        return {
            date:[],
            price:[],
            product:[],
            xi:'',
            opentemp:'',
            productname:''
        } 
    },

    mounted(){
        this.getProductData()
    },

  methods: {
        async getProductData(){
            
            const type_info = this.$route.path.substring(0).split('/')[1]
            const product = this.$route.params.product

            await axios
            .get(`/api/v1/${type_info}/${product}`)
            .then(response => {
                
                this.date=[]
                this.price=[]
                this.product=[]
                this.opentemp = response.data
                this.productname=''

                const productname = this.opentemp[0].productname

                for (this.xi of this.opentemp) {
                    this.date.push(this.xi.date)
                    this.product.push(this.xi.product)
                    this.price.push(this.xi.price)
                    }

            })
            .catch(error => {
                console.log(error)
            })

        var trace1 = {
        type: "scatter",
        mode: "lines",
        name: this.productname,
        x: this.date,
        y: this.price,
        line: {color: '#17BECF'}
        }

        console.log(this.date)
        console.log(this.price)

        var data = [trace1];

        var layout = {
        title: product,
        xaxis: {
            autorange: true,
            range: [this.date[0],this.date[this.date.length-1]],
            rangeselector: {buttons: [
                {
                count: 1,
                label: '1m',
                step: 'month',
                stepmode: 'backward'
                },
                {
                count: 6,
                label: '6m',
                step: 'month',
                stepmode: 'backward'
                },
                {step: 'all'}
            ]},
            rangeslider: {range: [this.date[0],this.date[this.date.length-1]]},
            type: 'date'
        },
        yaxis: {
            autorange: true,
            range: [Math.min(...this.price)-10,Math.max(...this.price)+10],
            type: 'linear'
        }
        }

        Plotly.newPlot('LineChart', data, layout);
    }
}}

</script>