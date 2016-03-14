<template>
<div id="informations">
	<div class="title">Virtual Reality vs Augmented Reality</div>
	<div class="wrapper">
		<div class="col-left">
			<img src="../assets/vr.png" />
			<div class="text">
				<p>
					La <b>réalité virtuelle</b> est une simulation interactive immersive, visuelle, sonore et/ou haptique, d'environnements réels ou imaginaires.
				</p>
				<ul>
					<li>Facebook – Oculus Rift</li>
					<li>Samsung - Samsung Gear VR</li>
					<li>Google - Cardboard</li>
					<li>HTC - Vive</li>
					<li>Sony - PLAYSTATION VR</li>
				</ul>
			</div>
		</div><!--
		--><div class="col-right">
			<img src="../assets/ar.png" />
			<div class="text">
				<p>
					La <b>réalité augmentée</b> rend possible la superposition d'un modèle virtuel 2D ou 3D à la perception que nous avons naturellement de la réalité et ceci en temps réel.
				</p>
				<ul>
					<li>Microsoft – HoloLens</li>
					<li>Google - Google Glasses</li>
				</ul>
			</div>
		</div>
	</div>

</div>
</template>

<script>

export default {
	ready: function() {

		console.log("ready");

		var controller = new ScrollMagic.Controller();

		var tl = new TimelineMax();
		// var tween = new TweenMax();
		// tween.set("#informations .col-left", {x: -1000});

		tl.fromTo("#informations .col-left", 1, {opacity: 0, x:-100}, {opacity: 1, x: 0, ease: Power4.easeInOut}, "tag")
		.fromTo("#informations .col-right", 1, {opacity: 0, x:100}, {opacity: 1, x: 0, ease: Power4.easeInOut}, "tag")
		;

		new ScrollMagic.Scene({
			triggerElement: "#informations .title"
		})
		.on("enter", function(){
			console.log("douche");
		})
		.setTween(tl)
		.addTo(controller);
	}
}

</script>


<style lang="sass">
$grey: #3e3e3e;
$grey-light: #cdcdcd;

#informations {
	width: 100%;
	height: 100vh;
	color: white;
	box-sizing: border-box;
	padding: 100px 40px;

	.title {
		font-size: 40px;
		color: $grey;
		text-transform: uppercase;
		position: relative;
		font-weight: bold;

		&:after {
			content: " ";
			display: block;
			width: 60px;
			height: 7px;
			position: absolute;
			left: 0;
			bottom: -10px;
			background-color: #ffffff;
		}
	}

	.wrapper {
		margin-top: 60px;
	}

	.col-left, .col-right {
		display: inline-block;
		width: 50%;
		vertical-align: top;
		position: relative;
		height: 100%;
		padding: 20px 60px;
    	box-sizing: border-box;

    	.text {
    		font-size: 20px;
    		color: $grey-light;
    	}

		img {
			margin-left: 50%;
			transform: translateX(-50%);
			margin-bottom: 80px;
    	}

		.line {
			position: absolute;
			bottom: 0;
			top: 0;
			left: 0;
			right: 0;
			margin: auto;
			width: 1px;
			height: 100vh;
			background-color: rgba(#fff, 0.2);
		}
	}

	.col-left {
	}

	.col-right {
		.img {
			width: 300px;
			height: 300px;
			margin: 0 auto;
			background-url: url("../assets/vr.png");
			background-repeat: no-repeat;
			background-size: cover;
			background-position: center;
		}

		.text {
			margin: 0 auto 20px auto;
		}
	}
}

</style>
