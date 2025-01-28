
    import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
    import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

    // Firebase configuration (same as in your sign-in and sign-up pages)
    const firebaseConfig = {
        apiKey: "AIzaSyD4yLgmzNRqNWwhOqFStE3zbhzwYguvBXA",
        authDomain: "asetenapa-d0183.firebaseapp.com",
        projectId: "asetenapa-d0183",
        storageBucket: "asetenapa-d0183.appspot.com",
        messagingSenderId: "511219784343",
        appId: "1:511219784343:web:2e6b11e8fe9812147ce7d2",
        measurementId: "G-4LHMQM4GMM"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    // Check if the user is logged in
    onAuthStateChanged(auth, (user) => {
        if (!user) {
            // User is not logged in, redirect to sign-in page
            window.location.href = "signIn.html";
        } else {
            // User is logged in, allow access to the home page
            console.log("User is logged in:", user.email);
        }
    });
