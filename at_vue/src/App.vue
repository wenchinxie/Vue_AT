<template>
  <header class="navbar navbar-dark sticky-top flex-md-nowrap p-3 shadow" :style="StyleObject">
      <div class="container-fluid">
          <a class="navbar-brand col-md-3 col-lg-2" href="/">Allium Tuberosum</a>

          <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><a href="/" class="nav-link px-2 text-secondary">Home</a></li>

            <li class="nav-item dropdown">
              <a class="nav-link text-white dropdown-toggle" id="MacroDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Macroeconomic Gauge
              </a>
              <ul class="dropdown-menu" aria-labelledby="MacroDropdown">
                <li><a class="dropdown-item" href="/macro/Currencies">Currencies</a></li>
              </ul>
            </li>

            <li class="nav-item dropdown">
              <a class="nav-link text-white dropdown-toggle" id="MicroDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Microeconomic Gauge
              </a>
              <ul class="dropdown-menu" aria-labelledby="MicroDropdown">
                <li><a class="dropdown-item" href="/Industry/Textile">Textile</a></li>
              </ul>
            </li>
          </ul>

          <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            <input type="search" class="form-control form-control-dark" placeholder="Search..." aria-label="Search">
          </form>

          <div class="text-end">
            <button type="button" class="btn btn-outline-light me-2">Login</button>
            <button type="button" class="btn btn-warning">Sign-up</button>
          </div>
        </div>
  </header>

  <div class="container-fluid">
    <router-view></router-view>
  </div>
  


</template>

<script>

export default {
  name:"atweb",
  data(){
    return{
      StyleObject :{},
      pathname:''
    }
  },
  mounted(){
    this.changeColor()
    },

   methods: {
    changeColor(){

      var pathname = this.$route.path.split('/')[1]
      if(pathname == 'Automation'){
        this.StyleObject = {'background':'#23305C'}}
        else{
          this.StyleObject = {'background':'#014509'}
        }
   }
   }}

</script>

<style lang="scss">
@import '../node_modules/bootstrap';
</style>