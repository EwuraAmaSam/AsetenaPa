// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD4yLgmzNRqNWwhOqFStE3zbhzwYguvBXA",
    authDomain: "asetenapa-d0183.firebaseapp.com",
    projectId: "asetenapa-d0183",
    storageBucket: "asetenapa-d0183.firebasestorage.app",
    messagingSenderId: "511219784343",
    appId: "1:511219784343:web:2e6b11e8fe9812147ce7d2",
    measurementId: "G-4LHMQM4GMM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);  

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const signUpForm = document.getElementById('signUpForm');

    // Register the service worker
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("/service-worker.js")
            .then((reg) => console.log("Service Worker Registered!", reg))
            .catch((err) => console.error("Service Worker Registration Failed!", err));
    }

    // Event listener for submission
    signUpForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('signUpEmail').value;
        const password = document.getElementById('signUpPassword').value;

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                window.location.href = "home.html";
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(errorMessage, errorCode);
            });
    });
});
