import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyARBAiJXx32Xg2vv_fYzARe72FDRprcpIA",
    authDomain: "data-collector-818e6.firebaseapp.com",
    databaseURL: "https://data-collector-818e6-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "data-collector-818e6",
    storageBucket: "data-collector-818e6.firebasestorage.app",
    messagingSenderId: "815379786649",
    appId: "1:815379786649:web:2066b638d469932578c108"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
