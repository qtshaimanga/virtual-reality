<template>
  <div id="tags" v-for="tag in tagsList.data">
    <button v-on:click="selectedTags" value="{{ tag.tag}}"> {{ tag.tag}}</button>
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
  data: {
    tagsList:'',
    articlesList: ''
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
      console.log(event);

      var tag = String(event.target.value)

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

.articles{
  color: green;
}

#article{
  color: $blue;
  border-style: solid;
  border-color: black;
  margin: 1em;
}
</style>
