<template>
    <div class="home">
        <div class="container-fluid">
            <div class="row">
                <Sidebar />
                <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4 pt-4">
                <h2>Currencies</h2>
                <div class="table-responsive">
                    <table class="table table-striped table-sm">
                    <Table 
                        v-bind:table="data_all" />
                    </table>
                </div>
                <LineChart />
                </main>
            </div>
        </div>
    </div> 
</template>

<script>
import Sidebar from '../components/SidebarPlugin/SideBar'
import Table from '../components/Dashboard/Table'
import LineChart from '../components/Dashboard/LineChart'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    Sidebar,
    Table,
    LineChart
  },  

  data() {
    return{
      data_all :[]
    } 
  },
    mounted(){
    this.getDataTable(),
    this.$root.changeColor(),
    document.title="Home | AT"
  },

  methods: {
    async getDataTable(){
      await axios
      .get('/api/v1/table-data')
      .then(response => {
        this.data_all = response.data
        console.log(this.data_all)
      })
      .catch(error => {
        console.log(error)
      })
    }}

}
</script>