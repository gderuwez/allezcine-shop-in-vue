import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import './../node_modules/jquery/dist/jquery.min.js';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../node_modules/bootstrap/dist/js/bootstrap.min.js';
import firebase from 'firebase'
import VueFire from 'vuefire'

Vue.config.productionTip = false
Vue.use(VueFire)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
