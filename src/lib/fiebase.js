// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-cca7d.firebaseapp.com",
  projectId: "reactchat-cca7d",
  storageBucket: "reactchat-cca7d.appspot.com",
  messagingSenderId: "1045389187015",
  appId: "1:1045389187015:web:192cd928c1bca9140babe2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()