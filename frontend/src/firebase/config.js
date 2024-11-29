// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnxEOyK2GN7XEr4I9Wmc4y8ciNTqPuZSk",
  authDomain: "online-shopping-c2bab.firebaseapp.com",
  projectId: "online-shopping-c2bab",
  storageBucket: "online-shopping-c2bab.appspot.com",
  messagingSenderId: "109601279486",
  appId: "1:109601279486:web:8350ed29cda8b18eebc4af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
