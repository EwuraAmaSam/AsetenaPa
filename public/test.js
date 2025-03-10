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

let bulbOn = false;
let fanOn = false;
let lockOn = false;

function toggleBulb() {
    bulbOn = !bulbOn;
    set(ref(database, 'device/bulb'), { state: bulbOn });

    const bulbText = document.getElementById('bulb-text');
    const bulbCard = document.getElementById('bulb-card');
    if (bulbOn) {
        bulbText.textContent = "Bulb is On";
        bulbCard.querySelector('i').style.color = "#ffd700";
    } else {
        bulbText.textContent = "Bulb is Off";
        bulbCard.querySelector('i').style.color = "#6200ee";
    }
}

function toggleFan() {
    fanOn = !fanOn;
    set(ref(database, 'device/fan'), { state: fanOn });

    const fanText = document.getElementById('fan-text');
    const fanCard = document.getElementById('fan-card');
    if (fanOn) {
        fanText.textContent = "Fan is On";
        fanCard.querySelector('i').style.color = "#00bfa5";
    } else {
        fanText.textContent = "Fan is Off";
        fanCard.querySelector('i').style.color = "#6200ee";
    }
}

function toggleLock() {
    lockOn = !lockOn;
    set(ref(database, 'device/lock'), { state: lockOn });

    const lockText = document.getElementById('lock-text');
    const lockCard = document.getElementById('lock-card');
    if (lockOn) {
        lockText.textContent = "Lock is Unlocked";
        lockCard.querySelector('i').classList.replace('fa-lock', 'fa-unlock');
        lockCard.querySelector('i').style.color = "#f44336";
    } else {
        lockText.textContent = "Lock is Locked";
        lockCard.querySelector('i').classList.replace('fa-unlock', 'fa-lock');
        lockCard.querySelector('i').style.color = "#6200ee";
    }
}

document.getElementById('bulb-button').addEventListener('click', toggleBulb);
document.getElementById('fan-button').addEventListener('click', toggleFan);
document.getElementById('lock-button').addEventListener('click', toggleLock);

// Firebase listeners
const bulbRef = ref(database, 'device/bulb');
const fanRef = ref(database, 'device/fan');
const lockRef = ref(database, 'device/lock');

onValue(bulbRef, (snapshot) => {
    const data = snapshot.val();
    bulbOn = data?.state || false;
    const bulbText = document.getElementById('bulb-text');
    const bulbCard = document.getElementById('bulb-card');
    if (bulbOn) {
        bulbText.textContent = "Bulb is On";
        bulbCard.querySelector('i').style.color = "#ffd700";
    } else {
        bulbText.textContent = "Bulb is Off";
        bulbCard.querySelector('i').style.color = "#6200ee";
    }
});

onValue(fanRef, (snapshot) => {
    const data = snapshot.val();
    fanOn = data?.state || false;
    const fanText = document.getElementById('fan-text');
    const fanCard = document.getElementById('fan-card');
    if (fanOn) {
        fanText.textContent = "Fan is On";
        fanCard.querySelector('i').style.color = "#00bfa5";
    } else {
        fanText.textContent = "Fan is Off";
        fanCard.querySelector('i').style.color = "#6200ee";
    }
});

onValue(lockRef, (snapshot) => {
    const data = snapshot.val();
    lockOn = data?.state || false;
    const lockText = document.getElementById('lock-text');
    const lockCard = document.getElementById('lock-card');
    if (lockOn) {
        lockText.textContent = "Lock is Unlocked";
        lockCard.querySelector('i').classList.replace('fa-lock', 'fa-unlock');
        lockCard.querySelector('i').style.color = "#f44336";
    } else {
        lockText.textContent = "Lock is Locked";
        lockCard.querySelector('i').classList.replace('fa-unlock', 'fa-lock');
        lockCard.querySelector('i').style.color = "#6200ee";
    }
});