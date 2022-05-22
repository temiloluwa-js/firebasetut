// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyAzsaUMfCBANk-beziM5JXBd0dWthi2ggw",

  authDomain: "blogproject-1fce7.firebaseapp.com",

  projectId: "blogproject-1fce7",

  storageBucket: "blogproject-1fce7.appspot.com",

  messagingSenderId: "158018984934",

  appId: "1:158018984934:web:db051c0e88cf3f5bb61427"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db =getFirestore(app);
export const auth = getAuth(app);
export const provider =new GoogleAuthProvider();