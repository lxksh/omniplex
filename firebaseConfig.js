import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Firebase Config
export const firebaseConfig = {
  apiKey: "AIzaSyCgObw23srRQSLSm-KLGJ7cxZQsRWLE9NI",
  authDomain: "omniplex-assignment-59d22.firebaseapp.com",
  projectId: "omniplex-assignment-59d22",
  storageBucket: "omniplex-assignment-59d22.firebasestorage.app",
  messagingSenderId: "576765070778",
  appId: "1:576765070778:web:16957ee360c95d151ea183"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export default app;
