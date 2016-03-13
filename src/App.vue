<template>
<div id="app">
	<div class="line-left"></div>
	<div class="mid-line"></div>
	<div class="line-right"></div>
	<intro></intro>
	<informations></informations>
	<articles></articles>
	<!--<img class="logo" src="./assets/logo.png">-->
</div>
</template>


<script>

import Intro from './components/Intro'
import Informations from './components/Informations'
import Articles from './components/Articles'

export default {
	components: {
		Intro, Informations, Articles
	}, 

	ready: function() {
		alert('hello');
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
