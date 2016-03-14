<template>
<div id="timeline">

  <div class="tags">
    <div class="tag" v-for="tag in tagsList.data">
      <button class="deselected" v-on:click="selectedTags" value="{{tag.tag}}" selected="deselect"> {{tag.tag}}</button>
    </div>
  </div>

  <div class="articles">
    <div v-for="articles in articlesList.data">
        <div id="article">
            <h5 id="date">{{ articles.date }}</h5>
            <h5>{{ articles.titre }}</h5>
            <h5>{{ articles.description }}</h5>
            <h5>{{ articles.tag }}</h5>
        </div>
        <div id="article" v-for="article in articles.articles">
            <h5>{{ $index }}</h5>
            <h5>{{ article.date }}</h5>
            <h5>{{ article.titre }}</h5>
            <h5>{{ article.description }}</h5>
            <h5>{{ article.tag }}</h5>
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


/*--Timeline-Container--*/
#timeline{
	margin-top: 0.5em;
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
  color: yellow;
  padding-top : 0.5em;
  padding-bottom : 0.5em;
  padding-right : 1em;
  padding-left : 1em;
}

.tag .deselected{
  background-color: red;
}

.tag .selected{
  background-color: yellow;
}


/*--ARTICLE--*/

.articles{
  color: green;
}

#article{
  color: $blue;
  border-style: solid;
  border-color: white;
  width: 20em;
  margin: 1em;
}



</style>
