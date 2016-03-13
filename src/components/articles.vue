<template>
 <button v-on:click="selectedTags" name="yolo">yolo</button>
 <button v-on:click="selectedTags" name="yolo-art">yolo-art</button>
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
     articlesList: ''
  },

  ready: function() {

      this.$http({url:'./articles', method: 'GET'}).then(function (response) {
          this.$set('articlesList', response)
      }, function (response) {
          console.log("bad request /api/articles");
      });

  },
  methods: {
    selectedTags: function (event) {
      console.log(String(event.target.name))


      this.$http({url:'./articles/', method:'GET', params:''}).then(function (response) {
          this.$set('articlesList', response)
      }, function (response) {
          console.log("bad request /api/articles");
      });

    }
  }

  // function selec articlesTags with Tags


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
