import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSession from 'vue-session'
import Vue2Editor from "vue2-editor";
import * as firebase from 'firebase'
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
firebase.messaging().usePublicVapidKey('BDDedkUKbht2mBNQBtJZHVRNF13dt9UGWtVUp359uuMdC36LWmfl8zUETycLWoMZXukb-5QjQLVAtnAXNMfCp3A')
firebase.messaging().onTokenRefresh(function () {
  firebase.messaging().getToken().then(function (refreshedToken) {
    console.log('Token refreshed.');
    // Indicate that the new Instance ID token has not yet been sent to the
    // app server.
    // setTokenSentToServer(false);
    // // Send Instance ID token to app server.
    // sendTokenToServer(refreshedToken);
    // // [START_EXCLUDE]
    // // Display new Instance ID token and clear UI of all previous messages.
    // resetUI();
    // // [END_EXCLUDE]
  }).catch(function (err) {
    // console.log('Unable to retrieve refreshed token ', err);
    // showToken('Unable to retrieve refreshed token ', err);
  });
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
