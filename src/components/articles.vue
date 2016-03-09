<template>
  <div class="articles">
    <div v-for="article in articlesList.data">
    <h5>{{ article.titre }}</h5>
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
</style>
