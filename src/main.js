import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

// import VueGoogleApi from 'vue-google-api';
import VueGAPI from 'vue-gapi';

Vue.config.productionTip = false

const config = {
  apiKey: 'AIzaSyA3u8gveFQVh9qj3c66L9_fyO15ymQeuvg',
  clientId: '919241210274-nnc284pu108au36e9qe80hjlbimnclpg.apps.googleusercontent.com',
  scope: 'https://www.googleapis.com/auth/calendar.events',
  discoveryDocs: [ 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest' ]
}

Vue.use(VueGAPI, config)
Vue.use(require('vue-moment'));

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
