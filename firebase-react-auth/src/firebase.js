import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyArjPt-qusi8QDsGCkNioAVqcxKo3hFAQY",
  authDomain: "react-firebase-auth-408c4.firebaseapp.com",
  projectId: "react-firebase-auth-408c4",
  storageBucket: "react-firebase-auth-408c4.appspot.com",
  messagingSenderId: "923276814434",
  appId: "1:923276814434:web:93eac1a330d4bf4989893b",
  measurementId: "G-TBK0FYMYKT",
};
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
