<template>
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

      this.$http({url:'/api/articles', method: 'GET'}).then(function (response) {
          this.$set('articlesList', response)
      }, function (response) {
          console.log("bad request /api/articles");
      });

    }
}

</script>


<style>

.articles{
  color: green;
}

#article{
  color: red;
  border-style: solid;
  border-color: black;
  margin: 1em;
}

</style>
