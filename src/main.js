import Vue from 'vue'
import App from './App'
import googlesheet from './googlesheet'

Vue.use(require('vue-resource'));
Vue.http.options.root = 'http://localhost:9000/';

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
