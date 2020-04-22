import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
  var firebaseConfig = {
    apiKey: "AIzaSyCAAC1963H-F1zfeuxewA1ibL2FOCZ0ZTg",
    authDomain: "korean-app-c9b8e.firebaseapp.com",
    databaseURL: "https://korean-app-c9b8e.firebaseio.com",
    projectId: "korean-app-c9b8e",
    storageBucket: "korean-app-c9b8e.appspot.com",
    messagingSenderId: "234154171232",
    appId: "1:234154171232:web:fe92c1d0d464c0d7c0dc05",
    measurementId: "G-BKSFJG1KZB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore()

export default firebase 