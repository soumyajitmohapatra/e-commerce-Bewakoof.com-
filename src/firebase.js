import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAU5ng3IyaCSXG-3nMQxIcA2Ouu0NjwErA",
  authDomain: "ecommerce-24a88.firebaseapp.com",
  projectId: "ecommerce-24a88",
  storageBucket: "ecommerce-24a88.appspot.com",
  messagingSenderId: "138112138389",
  appId: "1:138112138389:web:a4cc39321b82866c542f9c",
  measurementId: "G-YR4QCKN8ZH",
};

const firebaseAPP = firebase.initializeApp(firebaseConfig);

const database = firebaseAPP.firestore();

const auth = firebase.auth();

export { database, auth };
