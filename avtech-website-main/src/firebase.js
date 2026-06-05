import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDVx1iJmsvuD0OpEHSgD4sCJXq7TfXSIp0",
  authDomain: "avtech-admin.firebaseapp.com",
  projectId: "avtech-admin",
  storageBucket: "avtech-admin.firebasestorage.app",
  messagingSenderId: "452567205328",
  appId: "1:452567205328:web:06941a07106b00529525d5",
  measurementId: "G-L7390N2SE5",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
