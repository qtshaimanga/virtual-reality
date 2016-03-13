<template>
  <div id="app">
    <articles></articles>
    <!--<img class="logo" src="./assets/logo.png">-->
  </div>
</template>


<script>

import Articles from './components/Articles'
import Intro from './components/Intro'

export default {
  components: {
    Articles, Intro
  }
}

</script>


<style>
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,300italic,300,400italic,600,600italic,700,700italic,800,800italic);

body {
	font-family: 'Open sans', sans-serif;
	background-color: black;
	margin: 0;
}

</style>
