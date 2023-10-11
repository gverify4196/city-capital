import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getDatabase } from 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCy1yqf7ghIkK4m4YyzJ07QaTKS6HmDJts",
  authDomain: "city-capital-d4a45.firebaseapp.com",
  projectId: "city-capital-d4a45",
  storageBucket: "city-capital-d4a45.appspot.com",
  messagingSenderId: "38766130268",
  appId: "1:38766130268:web:34d7a75e16382ceaace299"
};


// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth();
const storage = getStorage(app);
const db = getDatabase(app);

export { app, db, auth, storage }

