import firebase from "firebase/app"
import "firebase/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_FxXWI7ftYRyOTQMYAE7jb0Hgnc1p-Tc",
  authDomain: "insaat-hizmetleri.firebaseapp.com",
  projectId: "insaat-hizmetleri",
  storageBucket: "insaat-hizmetleri.appspot.com",
  messagingSenderId: "919839381956",
  appId: "1:919839381956:web:b0764e13456bb8f845ec91",
  measurementId: "G-425EZE1HH0"
};

firebase.initializeApp(firebaseConfig)

const firestoreRef = firebase.firestore()

export {firebase,firestoreRef}