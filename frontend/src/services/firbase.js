// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVO13NhgLP7EhQmGkwMIFjaKl2EmDmzz4",
  authDomain: "task-manager-9eb2d.firebaseapp.com",
  projectId: "task-manager-9eb2d",
  storageBucket: "task-manager-9eb2d.firebasestorage.app",
  messagingSenderId: "483968655302",
  appId: "1:483968655302:web:ce12dd833b5277fc935cc7",
  measurementId: "G-T5LFPEMENW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);



















