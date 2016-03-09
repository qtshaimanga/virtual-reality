<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <hello></hello>
    <articles></articles>
  </div>
</template>


<script>

import Hello from './components/Hello'
import Articles from './components/Articles'

export default {
  components: {
    Hello,
    Articles
  }
}

</script>


<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
