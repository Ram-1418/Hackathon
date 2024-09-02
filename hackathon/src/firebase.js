
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import Firestore

const firebaseConfig = {
  apiKey: "AIzaSyBdvLjfu5AGAASvGikWoto5h_YPTOWYagQ",
  authDomain: "health-firstv2.firebaseapp.com",
  projectId: "health-firstv2",
  storageBucket: "health-firstv2.appspot.com",
  messagingSenderId: "3938762642",
  appId: "1:3938762642:web:7eeb76c2d34d471a53cb4b",
  measurementId: "G-QNLQ371VBD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app); // Firestore using modular SDK

export { auth, provider, signInWithPopup, db , signInWithEmailAndPassword};