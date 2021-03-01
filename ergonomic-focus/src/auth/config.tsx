import firebase from 'firebase/app';
import 'firebase/auth';

export const firebaseConfig = {
    apiKey: "AIzaSyCIIMvZwgD6BaaWTwiFidB7xjsFV11XoB4",
    authDomain: "ergon-2a73b.firebaseapp.com",
    projectId: "ergon-2a73b",
    storageBucket: "ergon-2a73b.appspot.com",
    messagingSenderId: "165160255386",
    appId: "1:165160255386:web:4b83d14e68fad278d14423"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
