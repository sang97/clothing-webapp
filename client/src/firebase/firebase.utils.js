import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyB-wEC3utnVEYIHvSC04gUzOpHonScoRQI",
  authDomain: "clothing-60f60.firebaseapp.com",
  databaseURL: "https://clothing-60f60.firebaseio.com",
  projectId: "clothing-60f60",
  storageBucket: "clothing-60f60.appspot.com",
  messagingSenderId: "391904885824",
  appId: "1:391904885824:web:eef959051ce6ffd4aeb3a5",
  measurementId: "G-TN660C00F1"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
