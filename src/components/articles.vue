<template>
<div id="intro">
	<div class="mid-line"></div>
	<div class="mid-line big"><div class="circle"></div></div>

	<div class="col-left">
		<div class="line"></div>
		<div class="objet"></div>
		<div class="name kirgan">Kirgan Somville</div>
		<div class="name quentin">Quentin Tsmga</div>
		<div class="name lovis">Lovis Odin</div>
		<div class="name clement">Clément Ougier</div>
	</div><!--
	--><div class="col-right">
		<div class="line"></div>
		<h1>WHAT'S NEW IN VIRTUAL REALITY</h1>
		<div class="text">
			<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula porta enim, lobortis sagittis tortor volutpat in. Phasellus non rutrum lorem.
			</p>
			<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula porta enim, lobortis sagittis tortor volutpat in. Phasellus non rutrum lorem.
			</p>
			<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula porta enim, lobortis sagittis tortor volutpat in. Phasellus non rutrum lorem.
			</p>
		</div>
		<button class="discover">Discover</button>
	</div>
</div>

<div id="definition">
	<div class="mid-line"></div>
	<div class="mid-line big"><div class="circle"></div></div>

	<div class="col-left">
		<div class="line"></div>
		<div class="objet"></div>
		<div class="name kirgan">Kirgan Somville</div>
		<div class="name quentin">Quentin Tsmga</div>
		<div class="name lovis">Lovis Odin</div>
		<div class="name clement">Clément Ougier</div>
	</div><!--
	--><div class="col-right">
		<div class="line"></div>
		<h1>WHAT'S NEW IN VIRTUAL REALITY</h1>
		<div class="text">
			<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula porta enim, lobortis sagittis tortor volutpat in. Phasellus non rutrum lorem.
			</p>
			<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula porta enim, lobortis sagittis tortor volutpat in. Phasellus non rutrum lorem.
			</p>
			<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula porta enim, lobortis sagittis tortor volutpat in. Phasellus non rutrum lorem.
			</p>
		</div>
		<button class="discover">Discover</button>
	</div>
</div>


  <div id="tags" v-for="tag in tagsList.data">
    <button class="deselected" v-on:click="selectedTags" value="{{ tag.tag}}" selected="deselect"> {{ tag.tag}}</button>
  </div>

  <div class="articles">
    <div id="article" v-for="article in articlesList.data">
      <h5>{{ article.date }}</h5>
      <h5>{{ article.titre }}</h5>
      <h5>{{ article.description }}</h5>
    </div>
  </div>
</template>



<script>
export default {
  props: {
    tab: Array
  },
  data: {
    tagsList:'',
    articlesList: '',
    tab: 'art'
  },

  ready: function() {

      this.$http({url:'./tags', method: 'GET'}).then(function (response) {
          this.$set('tagsList', response)
      }, function (response) {
          console.log("bad request /api/tags");
      });

      this.$http({url:'./articles', method: 'GET'}).then(function (response) {
          this.$set('articlesList', response)
      }, function (response) {
          console.log("bad request /api/articles");
      });


  },
  methods: {
    selectedTags: function (event) {
      var select = event.target.getAttribute("selected");
      var tag = ""


      if(select == "deselect"){
        tag = String(event.target.value)
          event.target.setAttribute("selected", "select")
          event.target.setAttribute("class", "selected")
      }else{
        tag = ""
          event.target.setAttribute("selected", "deselect")
          event.target.setAttribute("class", "deselected")
      }

      this.$http({url:'./articles/'+ tag, method:'GET'}).then(function (response) {
          this.$set('articlesList', response)
      }, function (response) {
          console.log("bad request /api/articles");
      });

    }
  }

}
</script>


<style lang="sass">
$blue: #3bbfce;
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
		.name {
			font-size: 24px;
			position: absolute;

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
		padding: 20px 40px;
		box-sizing: border-box;

		h1 {
			font-size: 60px;
			color: $grey;
			text-transform: uppercase;
		}

		.text {
			font-size: 16px;
			margin: 0 auto 20px auto;
		}

		button.discover {
			box-sizing: border-box;
			text-transform: uppercase;
			padding: 8px 12px;
			border: 2px solid rgba(#ffffff, 0.5);
			background-color: rgba(0,0,0,0);
			color: rgba(#ffffff, 0.5);
			font-size: 16px;
			position: absolute;
			bottom: 50px;
			left: 50%;
			transform: translateX(-50%);
			margin: 0 auto;
			outline: none;
			cursor: pointer;
			transition: background-color 250ms ease-out,color 250ms ease-out;

			&:hover {
				color: rgba(#ffffff, 1);
				border: 2px solid rgba(#ffffff, 1);

			}
		}
	}
}

.articles{
  color: green;
}

#article{
  color: $blue;
  border-style: solid;
  border-color: white;
  margin: 1em;
}


.deselected{
background-color: red;
}

.selected{
background-color: yellow;
}

</style>
