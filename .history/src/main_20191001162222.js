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
const firebaseConfig = {
  apiKey: "AIzaSyBWC5rlbttLgPnSW92AlWfL2NDSYda7n4M",
  authDomain: "notifyketoan.firebaseapp.com",
  databaseURL: "https://notifyketoan.firebaseio.com",
  projectId: "notifyketoan",
  storageBucket: "",
  messagingSenderId: "779329775896",
  appId: "1:779329775896:web:845e581ec148618b47d66d",
  measurementId: "G-NB5ZKNZW9L"
};
Vue.use(firebase)
const firebaseApp = firebase.initializeApp(firebaseConfig);
window.firebaseMessaging = firebaseApp.messaging();
firebase.initializeApp(firebaseConfig)
firebase.messaging().usePublicVapidKey("BC4CeRlK9dc0TsoJEEFu5DvZSqzvU8e3YTGwSBi_DL_6qRvZGpoCyy5oPCisJMscVIodDpusF3tRfZhRP3soeyk")
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
