<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <hello></hello>
    <news></news>

  </div>
</template>



<script>

import Hello from './components/Hello'
import news from './components/news'

export default {
  components: {
    Hello,
    news
  }
}

</script>




<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
