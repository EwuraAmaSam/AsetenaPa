import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyD4yLgmzNRqNWwhOqFStE3zbhzwYguvBXA",
    authDomain: "asetenapa-d0183.firebaseapp.com",
    databaseURL: "https://asetenapa-d0183-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "asetenapa-d0183",
    storageBucket: "asetenapa-d0183.firebasestorage.app",
    messagingSenderId: "511219784343",
    appId: "1:511219784343:web:2e6b11e8fe9812147ce7d2",
    measurementId: "G-4LHMQM4GMM"
};

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);

    // Reference to the state in Firebase
    const stateRef = ref(database, "monitoring/state");

    // Listen for changes in the state
    onValue(stateRef, (snapshot) => {
        const state = snapshot.val();
        document.getElementById("context-text").textContent = state;
    });

