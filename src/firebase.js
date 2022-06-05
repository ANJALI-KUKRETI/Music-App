import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDbCzR--MMyg4TcRCES6zwnrrEonjzSGcA",
  authDomain: "music-app-ed70a.firebaseapp.com",
  projectId: "music-app-ed70a",
  storageBucket: "music-app-ed70a.appspot.com",
  messagingSenderId: "1073463171493",
  appId: "1:1073463171493:web:78ad5671eb552a5138b04c",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();

export default app;
