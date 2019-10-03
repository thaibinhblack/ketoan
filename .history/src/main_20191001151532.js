import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSession from 'vue-session'
import Vue2Editor from "vue2-editor";
import * as firebase from 'firebase'
import 'firebase/app'
import 'firebase/firebase-app'
import 'firebase/messaging'
const firebaseConfig = {
  apiKey: "AIzaSyB8jVEPpZ1bDqM3MtjpnEkjW3_6WC-PTho",
  authDomain: "ketoan-34e5f.firebaseapp.com",
  databaseURL: "https://ketoan-34e5f.firebaseio.com",
  projectId: "ketoan-34e5f",
  storageBucket: "ketoan-34e5f.appspot.com",
  messagingSenderId: "618159512435",
  appId: "1:618159512435:web:22c716f3086c09de2ec306",
  measurementId: "G-D3QKVWEQ7K"
};
Vue.use(firebase)
firebase.initializeApp(firebaseConfig)
firebase.messaging().requestPermission()
        .then(function (token) {
          // MsgElem.innerHTML = "Notification permission granted." 
          console.log("Notification permission granted.",token);
        })
        .catch(function (err) {
        // ErrElem.innerHTML = ErrElem.innerHTML + "; " + err
        console.log("Unable to get permission to notify.", err);
      });



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
