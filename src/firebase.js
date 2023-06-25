import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAEo3AhDEZQiZR-rp5rN5r5RcDB6NuO_rg",
  authDomain: "linkedin-clone-59dc7.firebaseapp.com",
  projectId: "linkedin-clone-59dc7",
  storageBucket: "linkedin-clone-59dc7.appspot.com",
  messagingSenderId: "144013356155",
  appId: "1:144013356155:web:824e798d9712f07b7606de"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
