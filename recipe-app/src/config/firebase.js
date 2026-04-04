// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANiRoil9tBc0u0NW1WA5FQ7hatuXH-1E4",
  authDomain: "recipe-adc13.firebaseapp.com",
  projectId: "recipe-adc13",
  storageBucket: "recipe-adc13.firebasestorage.app",
  messagingSenderId: "151447036312",
  appId: "1:151447036312:web:5f3b01729ab08e53fdcbed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);