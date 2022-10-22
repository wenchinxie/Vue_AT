<template>
    <nav id="sidebarMenu" class="d-flex flex-column col-md-3 col-lg-2 d-md-block bg-white text-black sidebar collapse border-end shadow-sm">
      <ul class="list-unstyled ps-0">
        <li>
          <button class="btn btn-toggle align-items-center collapsed mt-2 fw-bold fs-5" data-bs-toggle="collapse" data-bs-target="#macro-collapse" aria-expanded="false">
            Macro-Overview
          </button>
  
          <div class="collapse show" id="macro-collapse">
            <ul class="nav nav-pills nav-justified flex-column mb-auto">
              <li class="nav-item pt-2">
                <a class="nav-link active" id="v-pills-home-tab" type="button" role="pill" aria-selected="true" href="/" >
                  Overview
                </a>
              </li>
  
              <li class="nav-item pt-2">
                <a class="nav-link" id="v-pills-home-tab" type="button" role="pill" aria-selected="true" href="/macro/Currencies" >
                  Currencies
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="v-pills-profile-tab" type="button" role="pill" aria-selected="false" href="/macro/bonds" >Bonds</a>
              </li>
            </ul>
          </div>
        </li> 
      </ul>
  
      <ul class="list-unstyled ps-0">
        <li>
          <button class="btn btn-toggle align-items-center collapsed mt-2 fw-bold fs-5" data-bs-toggle="collapse" data-bs-target="#industry-collapse" aria-expanded="false">
            Industry-Overview
          </button>
          <div class="collapse show" id="industry-collapse">
            <ul class="nav nav-pills nav-justified flex-column mb-auto">
              <li class="nav-item pt-2">
                <a class="nav-link active" id="v-pills-home-tab" type="button" role="pill" aria-selected="true" href="/" >
                  Overview
                </a>
              </li>
  
              <li class="nav-item">
                <a class="nav-link" id="v-pills-home-tab" type="button" role="pill" aria-selected="true" href="/industry/textile" >
                  Textile
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="v-pills-profile-tab" type="button" role="pill" aria-selected="false" href="/industry/semiconductor" >Semiconductor</a>
              </li>
            </ul>
          </div>
        </li> 
      </ul>        
  
    </nav>
  </template>
  <script>
  export default {
      props:{
          product:Object
      }
  }
  </script>
  <style>
    nav .nav-pills .nav-link.active, .nav-pills .show > .nav-link {
        color: #fff;
        background-color: #34ebae;
    }
    nav .nav-link {
        display: block;
        padding: 0.5rem 1rem;
        color: #020504;
        text-decoration: none;
        transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
    }
  </style>