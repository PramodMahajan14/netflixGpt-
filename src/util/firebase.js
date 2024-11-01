// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDcdd9zBphyzV3L0GyHjs_hp9ejju0Tna8",
  authDomain: "gpt-netflix-77dfe.firebaseapp.com",
  projectId: "gpt-netflix-77dfe",
  storageBucket: "gpt-netflix-77dfe.appspot.com",
  messagingSenderId: "829458750594",
  appId: "1:829458750594:web:cab51f8d124954637f289b",
  measurementId: "G-83T7N21FCB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
