import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAFWWTblgRqS3gCtIvTXee0MofVP84wg0U",
  authDomain: "talentmeet-949fb.firebaseapp.com",
  projectId: "talentmeet-949fb",
  storageBucket: "talentmeet-949fb.firebasestorage.app",
  messagingSenderId: "63444160842",
  appId: "1:63444160842:web:4863c6fb730a07c94f71b3",
  measurementId: "G-8D9C91GC5K",
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth  = getAuth(app);
export const db  = getFirestore(app);
