<template>
<div id="timeline">
  <div id="titre"><h1>TIMELINE</h1></div>

  <div class="tags">
    <div class="tag" v-for="tag in tagsList.data">
      <button class="deselected" id="{{tag.tag}}" v-on:click="selectedTags" value="{{tag.tag}}" selected="deselect"> {{tag.tag}}</button>
    </div>
  </div>

  <div class="articles">
    <div v-for="articles in articlesList.data" id="art-{{$index}}">

        <div id="article" v-if="articles.description.length >0">
            <p class="circle"></p>
            <img src="{{ articles.img }}"/>
            <h4 id="date">{{ articles.date }}</h4>
            <p><span id="{{ articles.tag }}">{{ articles.tag }}</span></p>
            <h5>{{ articles.description }}</h5>
            <p id="plus"><a href="{{ articles.url }}" target="_blank">en savoir plus</a><p>
        </div>

        <div v-for="article in articles.articles">
            <div class="dates">
              <h4 id="date">{{ article.date }}</h4>
            </div>

            <div  id="article">
              <p class="circle"></p>
              <img src="{{ article.img }}"/>
              <p><span id="{{ article.tag }}">{{ article.tag }}</span></p>
              <h5>{{ article.description }}</h5>
              <p id="plus"><a href="{{ article.url }}" target="_blank">en savoir plus</a></p>
            </div>
        </div>
    </div>
  </div>
</div>

<div id="videoTest">
  <iframe width="1280" height="720" src="https://www.youtube.com/embed/tOgE-dnLHMM" frameborder="0" allowfullscreen></iframe>
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


      setTimeout(function(){
        window.sr = ScrollReveal();
        sr.reveal('#art-0');
        sr.reveal('#art-1');
        sr.reveal('#art-2');
        sr.reveal('#art-3');
        sr.reveal('#art-4');
        sr.reveal('#art-5');
        sr.reveal('#art-6');
        sr.reveal('#art-7');
        sr.reveal('#art-8');
        sr.reveal('#art-9');
        sr.reveal('#art-10');
        sr.reveal('#art-11');
        sr.reveal('#art-12');
        sr.reveal('#art-13');
        sr.reveal('#art-14');
        sr.reveal('#art-15');
        sr.reveal('#art-16');
        sr.reveal('#art-17');
        sr.reveal('#art-18');
        sr.reveal('#art-19');
        sr.reveal('#art-20');
        sr.reveal('#art-21');
        sr.reveal('#art-22');
        sr.reveal('#art-23');
        sr.reveal('#art-24');
        sr.reveal('#art-25');
        sr.reveal('#art-26');
        sr.reveal('#art-27');
        sr.reveal('#art-28');
        sr.reveal('#art-29');
        sr.reveal('#art-30');
        sr.reveal('#art-31');
        sr.reveal('#art-32');
        sr.reveal('#art-33');
        sr.reveal('#art-34');
        sr.reveal('#art-35');
        sr.reveal('#art-36');
        sr.reveal('#art-37');
        sr.reveal('#art-38');
        sr.reveal('#art-39');
    }, 100);


  },
  methods: {
    selectedTags: function (event) {
      var select = event.target.getAttribute("selected");
      var tag = ""

      if(select == "deselect"){
          event.target.setAttribute("selected", "select")
          event.target.setAttribute("class", "selected")

          var height = (document.getElementById("app").offsetHeight - 6000);
          console.log(height)
          document.getElementById("line").style.height = height+"px";

      }else{
          event.target.setAttribute("selected", "deselect")
          event.target.setAttribute("class", "deselected")
          document.getElementById("line").style.height = "32600px";
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
$dark : #333333;

/*--Timeline-Container--*/
#timeline{
	margin-top:20em;
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


/*--ARTICLES--*/
p #business { background-color: $bleu; padding:0.5em;}
p #art {  background-color: $rouge; padding:0.5em;}
p #jeu {  background-color: $violet; padding:0.5em;}
p #tech { background-color: $saumon; padding:0.5em; }
p #insolite {  background-color: $rose; padding:0.5em; }
p #social {  background-color: $vert; padding:0.5em; }
p #marketing {  background-color: $bleu; padding:0.5em; }

.articles #article{
  color: $gray;
  background-color: $dark;
  border-style: none;
  border-color: white;
  width: 27.5em;
  text-align: center;
  padding-bottom: 1em;
  margin-bottom: 0.5em;
  margin-left: 5%;
}

.articles #article p {
  margin-right: 20px;
  text-align: right;
}

.articles #article h5 {
  text-align: left;
  margin-left: 20px;
}

.articles #article #date {
  text-align: left;
  margin-left: 20px;
  margin-bottom: -40px;
}

.dates{
  color: $gray;
  font-size: 35px;
  position: absolute;
  margin-top: 5%;
  margin-left: 80%;
}

.circle {
    position: absolute;
    background-color: rgba(204, 0, 102, 0);
    border: 3px solid #F5F5F5;
    height:15px;
    width:15px;
    -webkit-border-radius:75px;
    -moz-border-radius:75px;
    margin-top: 10%;
    margin-left: 44.2%;
}

@for $i from 0 through 100 {
  @if ($i%2 != 0) {
    .articles #art-#{$i} #article{
      margin-left: 60%;
      margin-bottom: 0.5em;
    }
    .articles #art-#{$i} #article .circle{
      margin-top: 10%;
      margin-left: -10.8%;
    }
    .articles #art-#{$i} .dates{
      position: absolute;
      margin-top: 5%;
      margin-left: 5%;
    }
  }
}

.articles #article img{
  width: 400px;
  height: auto;
  margin-top: 20px;
}

.articles #article #plus {
  text-align: left;
  margin-left: 20px;
}
a {
  color: $gray;
  text-decoration: none;
  font-size: 12px;
}
a:hover{
  color: #999999
}

#titre{
  border-bottom: solid 7px white;
  width: 5em;
  margin-bottom: 4em;
  margin-left: 40px;
}
#titre h1{
  letter-spacing: 2px;
  font-size: 40px;
  color: #555555;
  opacity: 0.7;
  margin-bottom: 3px;
}

#videoTest{
  margin-top: 10em;
}
</style>
