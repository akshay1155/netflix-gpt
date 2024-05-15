// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaVJkrcj2tHqqKJFoHwbuxS7SqQAe3a8Y",
  authDomain: "netflixgpt-eea8a.firebaseapp.com",
  projectId: "netflixgpt-eea8a",
  storageBucket: "netflixgpt-eea8a.appspot.com",
  messagingSenderId: "267905746769",
  appId: "1:267905746769:web:07eb71d39c674035cbb570"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth();