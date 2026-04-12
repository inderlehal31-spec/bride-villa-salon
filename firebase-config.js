<script type="module">
  // 1. Import the necessary SDKs
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js"; // For Database
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";           // For Login

  // 2. Your Configuration (Keep this secure!)
  const firebaseConfig = {
    apiKey: "AIzaSyAF0-Xgkyi-SsdARvLRYvht5cO3JLLrz-Q",
    authDomain: "orvexa-43391.firebaseapp.com",
    projectId: "orvexa-43391",
    storageBucket: "orvexa-43391.firebasestorage.app",
    messagingSenderId: "466296930584",
    appId: "1:466296930584:web:afa0083a982089f8f99e6d",
    measurementId: "G-PCNSCH29BY"
  };

  // 3. Initialize Firebase Services
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);
  const auth = getAuth(app);

  // Now you can use 'db' to save data or 'auth' to manage users!
  console.log("Orvexa Studio: Firebase initialized successfully.");
</script>
