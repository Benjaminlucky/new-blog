// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-58f42.firebaseapp.com",
  projectId: "mern-blog-58f42",
  storageBucket: "mern-blog-58f42.appspot.com",
  messagingSenderId: "740727238194",
  appId: "1:740727238194:web:389997e9b53b3d52e8562b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
