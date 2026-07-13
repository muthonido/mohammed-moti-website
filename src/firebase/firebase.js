import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAD7WBtdKtdZGiymUvQvzL0kvTsec4TcHg",
  authDomain: "mohammed-moti-website.firebaseapp.com",
  projectId: "mohammed-moti-website",
  storageBucket: "mohammed-moti-website.firebasestorage.app",
  messagingSenderId: "560454889840",
  appId: "1:560454889840:web:e0cd7b5a424ad7f72edfb5"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;