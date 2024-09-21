// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMvU3xHqFV6XJNGle_oDIzCGbHBzUGQ30",
  authDomain: "internship-project-14e8e.firebaseapp.com",
  projectId: "internship-project-14e8e",
  storageBucket: "internship-project-14e8e.appspot.com",
  messagingSenderId: "334181441003",
  appId: "1:334181441003:web:688ea84323f78bfecacdae",
  measurementId: "G-JDNP6WMZNT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}