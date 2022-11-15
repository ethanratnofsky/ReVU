// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKVi9htuM-Pnr8C5iiCiHtjV0g0w_xfnA",
  authDomain: "revu-75f69.firebaseapp.com",
  projectId: "revu-75f69",
  storageBucket: "revu-75f69.appspot.com",
  messagingSenderId: "185686401511",
  appId: "1:185686401511:web:e07ff8a9c95f228d9d1d42",
  measurementId: "G-X94XBXJ9SB"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = fireabase.app();
}

const auth = firebase.auth();

export { auth };