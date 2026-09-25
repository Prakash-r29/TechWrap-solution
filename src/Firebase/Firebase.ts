import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAr_OZYAhgwKurozA66WKrMqGAcMaJohvQ",
  authDomain: "techwrap-d88e8.firebaseapp.com",
  projectId: "techwrap-d88e8",
  storageBucket: "techwrap-d88e8.firebasestorage.app",
  messagingSenderId: "381343154478",
  appId: "1:381343154478:web:1bf3ad54efbe5d3feababf",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;