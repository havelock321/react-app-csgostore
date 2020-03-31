import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDlva673SWQ5WEsYYfNCrmJ85PU31wcfuw",
  authDomain: "csgo-store.firebaseapp.com",
  databaseURL: "https://csgo-store.firebaseio.com",
  projectId: "csgo-store",
  storageBucket: "csgo-store.appspot.com",
  messagingSenderId: "99350126358",
  appId: "1:99350126358:web:2a9f38db14234970817a37",
  measurementId: "G-0MJKYMWH06"
};

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
    } catch (erro) {
      console.log("error creating user", erro.messsage);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
