// Initialize Firebase
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
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();
messaging.requestPermission().then(function () {
    //getToken(messaging);
    return messaging.getToken();
}).then(function (token) {
    console.log(token);
    let xToken = $('meta[name="x-token"]').attr('content');
    if (typeof xToken != 'undefined' && token != xToken) {
        axios.post(location.origin + '/update-token', {
            token: token
        });
    }
})