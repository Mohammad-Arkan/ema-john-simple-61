// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfrt5LmChnLfDPTC3KV0VqwJRCGQQAC4o",
  authDomain: "ema-john-with-firebase-a-902f0.firebaseapp.com",
  projectId: "ema-john-with-firebase-a-902f0",
  storageBucket: "ema-john-with-firebase-a-902f0.appspot.com",
  messagingSenderId: "664945751603",
  appId: "1:664945751603:web:1b322a8d1b4658062a9546"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app