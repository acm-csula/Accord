//firebase configurations

import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAKM9hlwY3DSgC9KtQs2fKAOvmIeHQJNRA",
    authDomain: "accord-7789b.firebaseapp.com",
    databaseURL: "https://accord-7789b.firebaseio.com",
    projectId: "accord-7789b",
    storageBucket: "accord-7789b.appspot.com",
    messagingSenderId: "255745495487",
    appId: "1:255745495487:web:6fa59c9410503bcb"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(config);
  export default fire;