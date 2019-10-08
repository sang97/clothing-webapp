import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB-wEC3utnVEYIHvSC04gUzOpHonScoRQI",
  authDomain: "clothing-60f60.firebaseapp.com",
  databaseURL: "https://clothing-60f60.firebaseio.com",
  projectId: "clothing-60f60",
  storageBucket: "",
  messagingSenderId: "391904885824",
  appId: "1:391904885824:web:eef959051ce6ffd4aeb3a5",
  measurementId: "G-TN660C00F1"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
