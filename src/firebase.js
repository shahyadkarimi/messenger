import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBSFqNwkHXYh7z6vi99edtZfekAzL51KPI",
  authDomain: "messenger-c3d8b.firebaseapp.com",
  projectId: "messenger-c3d8b",
  storageBucket: "messenger-c3d8b.appspot.com",
  messagingSenderId: "812530074766",
  appId: "1:812530074766:web:15daaa24ca48553b6f75df"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()