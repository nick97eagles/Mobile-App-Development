/*
 * 4. src/firebase.js
 *
 * data obtained from console.firebase.google.com
 * substitute your project's information
 */

import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyCZAvrUCAJQKL7jrQy4iNFk6ML7QCerXys",
  authDomain: "messaging-bea39.firebaseapp.com",
  databaseURL: "https://messaging-bea39.firebaseio.com",
  projectId: "messaging-bea39",
  storageBucket: "messaging-bea39.appspot.com",
  messagingSenderId: "1026438327068"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);