import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAPzU9FKncyVzpRO-q3c5lzd4It3TM1WGM",
  authDomain: "clone-76383.firebaseapp.com",
  databaseURL: "https://clone-76383.firebaseio.com",
  projectId: "clone-76383",
  storageBucket: "clone-76383.appspot.com",
  messagingSenderId: "1076786973546",
  appId: "1:1076786973546:web:b7ccb22b21a959de107313",
  measurementId: "G-3FMXYPRY4G"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth()

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export {db, auth}