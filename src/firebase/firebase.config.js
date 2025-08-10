import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: "863728777208",
  appId: "1:863728777208:web:a2e5c1b347266b39f1080d",
  measurementId: "G-FR2VK8DY40",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// firebase.initializeApp(firebaseConfig);

// export default firebase.firestore();
export const db = getFirestore(app);
export const auth = getAuth(app);
