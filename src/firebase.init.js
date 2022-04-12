// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDpT2Z_ZvCEBRfI_LPwB7XWFpPh5GstDnk",
    authDomain: "ema-john-simple-88d76.firebaseapp.com",
    projectId: "ema-john-simple-88d76",
    storageBucket: "ema-john-simple-88d76.appspot.com",
    messagingSenderId: "736640003090",
    appId: "1:736640003090:web:cf068a4ca01a9301147ccb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;