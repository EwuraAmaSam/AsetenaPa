// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

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
const auth = getAuth(app);

function initializeSignIn() {
    console.log('Initializing sign in functionality...');
    
    const signInForm = document.getElementById('signInForm');
    
    if (!signInForm) {
        console.error('Sign in form not found in the DOM');
        return;
    }
    
    console.log('Sign in form found, attaching event listener...');
    
    signInForm.addEventListener('submit', async function(event) {
        event.preventDefault();
        
        const email = document.getElementById('signInEmail')?.value;
        const password = document.getElementById('signInPassword')?.value;
        
        if (!email || !password) {
            alert('Please fill in all fields');
            return;
        }
        
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log('User signed in successfully:', user.email);
            window.location.href = "home.html";
        } catch (error) {
            console.error('Sign in error:', error);
            alert(`Error: ${error.message}`);
        }
    });
}

// Make sure the DOM is fully loaded before initializing
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeSignIn);
} else {
    initializeSignIn();
}