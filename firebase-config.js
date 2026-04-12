// ORVEXA - Firebase Core Configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCxDUBknzr72aLZTv_8Ru-_RvRUWxbnudw",
    authDomain: "rexa-platform.firebaseapp.com",
    projectId: "rexa-platform",
    storageBucket: "rexa-platform.firebasestorage.app",
    messagingSenderId: "461455978632",
    appId: "1:461455978632:web:65c743134c96a8fb40ef3d",
    measurementId: "G-EF0ZTWKK09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Keyword "export" use karna bahut zaroori hai
export const db = getFirestore(app); 
