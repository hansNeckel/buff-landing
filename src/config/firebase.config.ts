// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyBP6CmwJqxNmu08cYfnEIJ6mmLCMuRcWuo",
  authDomain: "buff-health.firebaseapp.com",
  projectId: "buff-health",
  storageBucket: "buff-health.appspot.com",
  messagingSenderId: "796208547576",
  appId: "1:796208547576:web:247bbcb917b18a68349d0d",
  measurementId: "G-6Q8EQ2P66Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);