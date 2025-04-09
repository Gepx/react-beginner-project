import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD1SASiviDHWc5nHDgkU4rZFxzLKib9DIE",
  authDomain: "login-signup-dec8a.firebaseapp.com",
  projectId: "login-signup-dec8a",
  storageBucket: "login-signup-dec8a.firebasestorage.app",
  messagingSenderId: "382119994577",
  appId: "1:382119994577:web:a6a7b63ebe6ea058ee51f0",
  measurementId: "G-WXZZW2538V",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
