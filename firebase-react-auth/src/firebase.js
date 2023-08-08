// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import from env.local
import firebaseConfig1 from "./env.local";
const firebaseConfig = firebaseConfig1;

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
