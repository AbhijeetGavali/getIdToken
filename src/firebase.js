import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { browserLocalPersistence, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig, {
  persistence: browserLocalPersistence,
});

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
