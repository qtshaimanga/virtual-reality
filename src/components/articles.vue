<template>
<div id="timeline">
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
