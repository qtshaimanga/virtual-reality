<template>
<div id="timeline">

  <div class="tags">
    <div class="tag" v-for="tag in tagsList.data">
      <button class="deselected" id="{{tag.tag}}" v-on:click="selectedTags" value="{{tag.tag}}" selected="deselect"> {{tag.tag}}</button>
    </div>
  </div>

  <div class="articles">
    <div v-for="articles in articlesList.data" id="art-{{$index}}">

        <div id="article" v-if="articles.description.length >0">
            <img src="{{ articles.img }}"/>
            <h4 id="date">{{ articles.date }}</h4>
            <p>{{ articles.tag }}</p>
            <h5>{{ articles.description }}</h5>
            <a href="{{ articles.url }}">titre</a>
        </div>

        <div v-for="article in articles.articles">
            <div class="dates" v-if="article.description.length >0">
              <h4 id="date">{{ articles.date }}</h4>
            </div>
            <div  id="article" >
              <img src="{{ article.img }}"/>
              <h4>{{ article.date }}</h4>
              <p>{{ article.tag }}</p>
              <h5>{{ article.description }}</h5>
              <a href="{{ article.url }}">titre</a>
            </div>
      </div>
    </div>
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
          event.target.setAttribute("selected", "select")
          event.target.setAttribute("class", "selected")
      }else{
          event.target.setAttribute("selected", "deselect")
          event.target.setAttribute("class", "deselected")
      }

      var btnSelect = document.getElementsByClassName("selected")
      var tab = []
      for (var i =0; i<btnSelect.length; i++){
        tab.push(btnSelect[i].value)
      }
      tag = tab
			console.log(tag);
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
$gray: #F5F5F5;

$rouge: #EE1C25;
$vert: #90C544;
$violet: #8660A9;
$bleu: #08AAEC;
$saumon: #FAAD81;
$rose: #F49AC1;



/*--Timeline-Container--*/
#timeline{
	margin-top: 0.1em;
}


/*--TAG--*/

.tags{
  width:auto;
  text-align: center;
  margin-bottom: 6em;
}

.tag {
  display: inline;
}

.tag button {
  margin-left: 1em;
  margin-right: 1em;
  color: $gray;
  padding-top : 1em;
  padding-bottom : 1em;
  padding-right : 1.5em;
  padding-left : 1.5em;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  border-shadow: none;
  border:none;
}

.tag button:hover {
  cursor: pointer;
  border-shadow: none;
}

.tag #business{ background-color: $bleu; }
.tag #art{ background-color: $rouge; }
.tag #jeu{ background-color: $violet; }
.tag #tech{ background-color: $saumon; }
.tag #insolite{ background-color: $rose; }
.tag #social{ background-color: $vert; }
.tag #marketing{ background-color: $bleu; }

.tag .selected{
  opacity: 0.5;
}


/*--ARTICLE--*/

.articles{

}

.articles #article{
  color: $gray;
  border-style: solid;
  border-color: white;
  width: 28em;
  margin: 1em;
  text-align: center;
  margin-left: 5%;
}

.dates{
  position: absolute;
  margin-top: 7%;
  margin-left: 70%;
}

@for $i from 0 through 100 {
  @if ($i%2 != 0) {
    .articles #art-#{$i} #article{
      color: red;
      margin-left: 60%;
    }

    .articles #art-#{$i} .dates{
      color: red;
      position: absolute;
      margin-top: 8%;
      margin-left: 20%;
    }
  }
}

.articles #article img{
  width: 400px;
  height: auto;
}

</style>
