import Vue from 'vue';
import store from './store/store';
import App from './App.vue';

const app = new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
