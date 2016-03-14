<template>
<div id="app">
		<canvas id="canvas" width="1000" height = "1000" style="position: absolute;"></canvas>
		<canvas id="canvas2" width="1000" height = "1000" style="position: absolute;"></canvas>

		<div class="line-left"></div>
		<div id="line" class="midline"></div>
		<div class="line-right"></div>
			<intro></intro>
			<informations></informations>
			<articles></articles>
</div>
</template>


<script>

import Intro from './components/Intro'
import Informations from './components/Informations'
import Articles from './components/Articles'
import $ from 'jquery'

export default {

	components: {
		Intro,
    Informations,
    Articles
	},
	ready: function() {

		var height = app.offsetHeight
		var c1 = document.getElementById("canvas");
		var c1_context = c1.getContext("2d");
		c1_context.moveTo(300, 0);
		c1_context.lineTo(300, height);
		c1_context.strokeStyle = "white";
		c1_context.stroke();

		var c2 = document.getElementById("canvas2");
		var c2_context = c2.getContext("2d");
		c2_context.moveTo(1000, 0);
		c2_context.lineTo(1000, height);
		c2_context.strokeStyle = "white";
		c2_context.stroke();

	}
}

</script>


<style lang="sass">
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,300italic,300,400italic,600,600italic,700,700italic,800,800italic);

body {
	font-family: 'Open sans', sans-serif;
	background-color: black;
	margin: 0;

	#app {
		.midline {
			position: absolute;
			bottom: 0;
			top: 0;
			left: 0;
			right: 0;
			margin: auto;
			width: 1px;
			height: 4100vh;											/*check the height*/
			background-color: rgba(#fff, 0.2);
			z-index: -10;
		}
	}
}

canvas {
	opacity: 0.3;
}

</style>
