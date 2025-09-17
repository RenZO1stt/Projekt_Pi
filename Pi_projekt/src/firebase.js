import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, onSnapshot  } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCxEKw1LGTkuKLqXF54kZyC2EEYWdV9jUI",

  authDomain: "fit4life-4ever.firebaseapp.com",

  projectId: "fit4life-4ever",

  storageBucket: "fit4life-4ever.firebasestorage.app",

  messagingSenderId: "659823389009",

  appId: "1:659823389009:web:37a10587f36162eefecb70",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);


export {
  app,
  db,
  auth,
  onSnapshot,
  doc,
  setDoc,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
};
