// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAlhZBSyAiOxFKrgFCmjYVZ22SglVNsFrA",
  authDomain: "portfolio-910b1.firebaseapp.com",
  projectId: "portfolio-910b1",
  storageBucket: "portfolio-910b1.appspot.com",
  messagingSenderId: "315867089733",
  appId: "1:315867089733:web:c02a53cb7d2cea9b784c2c",
  measurementId: "G-2XX16PM2E2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);



