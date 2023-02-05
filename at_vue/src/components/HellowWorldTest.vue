<template>
    <p>{{ msg }}8</p>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  
  export default defineComponent({
    name: "HelloWorld",
    props: {
      message: {
        type: String,
        default: "Worlds",
      },
    },
    setup(props) {
      return {
        msg: props.message,
      };
    },
  });
  </script>
  
  