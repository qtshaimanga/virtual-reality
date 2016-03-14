<template>
<div id="informations">
	<div class="title">Virtual Reality vs Augmented Reality</div>
	<div class="col-left">
		<div class="img"></div>
		<div class="text">
			<p>
				La réalité virtuelle est une simulation interactive immersive, visuelle, sonore et/ou haptique, d'environnements réels ou imaginaires.
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
		<div class="img"></div>
		<div class="text">
			<p>
				La réalité augmentée rend possible la superposition d'un modèle virtuel 2D ou 3D à la perception que nous avons naturellement de la réalité et ceci en temps réel.
			</p>
			<ul>
				<li>Microsoft – HoloLens</li>
				<li>Google - Google Glasses</li>
			</ul>
		</div>
	</div>
</div>
</template>

<script>


</script>


<style lang="sass">
$grey: #3e3e3e;

#informations {
	width: 100%;
	height: 60vh;
	color: white;
	box-sizing: border-box;
	padding: 100px 90px;

	.title {
		font-size: 40px;
		color: $grey;
		text-transform: uppercase;
		position: relative;

		&:after {
			content: " ";
			display: block;
			width: 60px;
			height: 6px; 
			position: absolute;
			left: 0;
			bottom: -20px;
			background-color: #ffffff;
		}
	}

	.col-left, .col-right {
		display: inline-block;
		width: 50%;
		vertical-align: top;
		position: relative;
		height: 100%;
		padding: 20px 60px;
    	box-sizing: border-box;

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
		.img {
			width: 300px;
			height: 300px;
			margin: 0 auto;
			background-url: url("../assets/vr.png");
			background-repeat: no-repeat;
			background-size: cover;
			background-position: center;
		}
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
			font-size: 16px;
			margin: 0 auto 20px auto;
		}
	}
}

</style>
