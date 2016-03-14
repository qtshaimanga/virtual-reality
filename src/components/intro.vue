<template>
<div id="intro">
	<div class="mid-line"></div>
	<div class="mid-line big"><div class="circle"></div></div>

	<div class="col-left">
		<div class="line"></div>
		<div id="geometry"></div>
		<div class="name kirgan">Kirgan Somville</div>
		<div class="name quentin">Quentin Tsmga</div>
		<div class="name lovis">Lovis Odin</div>
		<div class="name clement">Clément Ougier</div>
	</div><!--
	--><div class="col-right">
		<div class="line"></div>
		<h1>WHAT'S NEW IN VIRTUAL REALITY ?</h1>
		<div class="text">
			<p>
				Nous avons passé ces derniers mois à observer le milieu de la  réalité virtuelle et augmentée de près.
			</p>
			<p>
				À travers ce site, nous vous proposons de retracer l’évolution de cette technologie sur les six derniers mois.
			</p>
			<p>
				Êtes vous prêts ?
			</p>
		</div>
		<button class="discover">Discover</button>
	</div>
</div>
</template>

<script>
	// import './geometry.js';
export default {
	ready: function() {

	}
}


</script>

<style lang="sass">
$grey: #3e3e3e;

#intro {
	width: 100%;
	height: 100vh;
	color: white;

	.mid-line {
		position: absolute;
		bottom: 0;
		top: 0;
		left: 0;
		right: 0;
		margin: auto;
		width: 1px;
		height: 100%;
		background-color: rgba(#fff, 0.2);

		&.big {
			bottom: auto;
			height: 50px;
			width: 4px;
			background-color: rgba(#fff, 1);

			.circle {
				box-sizing: border-box;
				width: 40px;
				height: 40px;
				border: 4px solid #fff;
				border-radius:50%;
				position: absolute;
				bottom: -38px;
				left: 50%;
				transform: translateX(-50%);
			}
		}
	}

	.col-left, .col-right {
		display: inline-block;
		width: 50%;
		vertical-align: top;
		position: relative;
		height: 100%;

		// .line {
		// 	position: absolute;
		// 	bottom: 0;
		// 	top: 0;
		// 	left: 0;
		// 	right: 0;
		// 	margin: auto;
		// 	width: 1px;
		// 	height: 100vh;
		// 	background-color: rgba(#fff, 0.2);
		// }
	}

	.col-left {
		.geometry {
			// background: url('geometry.png') no-repeat;
		}

		.name {
			font-size: 24px;
			position: absolute;
			display: none;

			&.kirgan {
				bottom: 40%;
				left: 45%;
				transform: translateX(-50%);
			}

			&.quentin {
				bottom: 30%;
				left: 57%;
				transform: translateX(-50%);
			}

			&.lovis {
				bottom: 20%;
				left: 38%;
				transform: translateX(-50%);
			}

			&.clement {
				bottom: 10%;
				left: 55%;
				transform: translateX(-50%);
			}
		}
	}

	.col-right {
		padding: 20px 60px;
		box-sizing: border-box;

		h1 {
			font-size: 80px;
			font-style: italic;
			color: $grey;
			margin: 0;
			text-transform: uppercase;
		}

		.text {
			box-sizing: border-box;
			font-size: 20px;
			margin: 60px auto 0px auto;
			display: none;
		}

		button.discover {
			box-sizing: border-box;
			text-transform: uppercase;
			padding: 8px 12px;
			border: 2px solid rgba(#ffffff, 0.5);
			background-color: rgba(0,0,0,0);
			color: rgba(#ffffff, 0.5);
			font-size: 20px;
			position: absolute;
			bottom: 75px;
			left: 50%;
			transform: translateX(-50%);
			margin: 0 auto;
			outline: none;
			cursor: pointer;
			transition: background-color 250ms ease-out,color 250ms ease-out;
			display: none;

			&:hover {
				color: rgba(#ffffff, 1);
				border: 2px solid rgba(#ffffff, 1);

			}
		}
	}
}

</style>