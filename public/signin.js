// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

// Firebase config
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

// Email/Password Sign In
function initializeSignIn() {
  const signInForm = document.getElementById('signInForm');
  if (!signInForm) return;

  signInForm.addEventListener('submit', async (event) => {
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
      console.log('Signed in:', user.email);
      window.location.href = "home.html";
    } catch (error) {
      console.error('Sign in error:', error);
      alert(`Error: ${error.message}`);
    }
  });
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeSignIn);
} else {
  initializeSignIn();
}

// MetaMask Wallet Sign In
let web3 = null;
let userAddress = null;

const connectButton = document.getElementById("connectButton");
const signInButton = document.getElementById("signInButton");
const walletStatus = document.getElementById("walletStatus");

if (window.ethereum) {
  web3 = new Web3(window.ethereum);

  connectButton.addEventListener('click', async () => {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      userAddress = accounts[0];
      console.log("Connected to MetaMask:", userAddress);

      connectButton.style.display = 'none';
      signInButton.style.display = 'block';
    //   walletStatus.textContent = `Connected: ${userAddress}`;
    } catch (err) {
      console.error("MetaMask access denied:", err);
    }
  });

  signInButton.addEventListener('click', async () => {
    if (!userAddress) {
      alert("Please connect your wallet first.");
      return;
    }

    try {
      const message = "Sign Message as discussed.";
      const signature = await web3.eth.personal.sign(message, userAddress, '');
      console.log("Signature:", signature);

      // Optionally store in localStorage or send to backend for verification
      localStorage.setItem("walletAddress", userAddress);
      window.location.href = "home.html";
    } catch (err) {
      console.error("Signature failed:", err);
    }
  });
} else {
  alert("MetaMask not detected.");
}