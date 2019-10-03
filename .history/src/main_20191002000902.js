import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSession from 'vue-session'
import Vue2Editor from "vue2-editor";
import * as firebase from 'firebase'
import VueSocketIO from 'vue-socket.io'
 
Vue.use(new VueSocketIO({
    debug: true,
    connection: 'http://localhost:8000',
    options: { path: "/manager" } //Optional options
}))
 
const firebaseConfig = {
  apiKey: "AIzaSyBfd4mIJqjuwYVai39tf9bbBzTerGdv2KA",
  authDomain: "htqlcx.firebaseapp.com",
  databaseURL: "https://htqlcx.firebaseio.com",
  projectId: "htqlcx",
  storageBucket: "",
  messagingSenderId: "1039388797015",
  appId: "1:1039388797015:web:80a2e0089db4baf1c51b12",
  measurementId: "G-SWSD7K3YF4"
};
Vue.use(firebase)
firebase.initializeApp(firebaseConfig)
firebase.messaging().usePublicVapidKey('BCiThXboXh53P2nFJ9-gmbOJ_q-dne-UUWubkcwtgqZgAdTyugVR8rsEpgFBPafLzoX2rxQqedQbT_2QrAU58BI')
Vue.use(Vue2Editor);
Vue.use(VueSession)
Vue.use(VueAxios,axios)


import store from './store'
Vue.config.productionTip = false


new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
