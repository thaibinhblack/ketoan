import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSession from 'vue-session'
import Vue2Editor from "vue2-editor";
import firebase from 'firebase/app'
import 'firebase/messaging'
Vue.use(Vue2Editor);
Vue.use(VueSession)
Vue.use(VueAxios,axios)
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

firebase.initializeApp(firebaseConfig)

const messaging = firebase.messaging();
messaging.usePublicVapidKey("BDDedkUKbht2mBNQBtJZHVRNF13dt9UGWtVUp359uuMdC36LWmfl8zUETycLWoMZXukb-5QjQLVAtnAXNMfCp3A")
messaging.requestPermission().then(function () {
    //getToken(messaging);
    return messaging.getToken();
}).then(function (token) {
    console.log(token);
    // let xToken = $('meta[name="x-token"]').attr('content');
    // if (typeof xToken != 'undefined' && token != xToken) {
    //     axios.post(location.origin + '/update-token', {
    //         token: token
    //     });
    // }
})
import store from './store'
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
