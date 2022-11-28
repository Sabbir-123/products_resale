// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyDd18qq_rnE89yfLdlP7Qm05fG6ltMDBW0",
  // authDomain: "resale-market-d3fe2.firebaseapp.com",
  // projectId: "resale-market-d3fe2",
  // storageBucket: "resale-market-d3fe2.appspot.com",
  // messagingSenderId: "832219195401",
  // appId: "1:832219195401:web:9aac1e66d4c2ba1d7c70d8"


  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app