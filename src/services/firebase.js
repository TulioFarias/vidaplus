
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCbUkBeBIdyXmeihoqQs_PjCMDrXFB6hZc",
  authDomain: "auth-vidaplus.firebaseapp.com",
  projectId: "auth-vidaplus",
  storageBucket: "auth-vidaplus.firebasestorage.app",
  messagingSenderId: "930007633440",
  appId: "1:930007633440:web:befe7d85e95f70f6847645",
  measurementId: "G-WCZ5T9TE4L"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);