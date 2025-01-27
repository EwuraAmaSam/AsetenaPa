let bulbOn = false;
let fanOn = false;
let lockOn = false;

function toggleBulb() {
    bulbOn = !bulbOn;
    const bulbText = document.getElementById('bulb-text');
    const bulbCard = document.getElementById('bulb-card');
    if (bulbOn) {
        bulbText.textContent = "Bulb is On";
        bulbCard.querySelector('i').style.color = "#ffd700"; // Yellow color for bulb on
    } else {
        bulbText.textContent = "Bulb is Off";
        bulbCard.querySelector('i').style.color = "#6200ee"; // Default color for bulb off
    }
}

function toggleFan() {
    fanOn = !fanOn;
    const fanText = document.getElementById('fan-text');
    const fanCard = document.getElementById('fan-card');
    if (fanOn) {
        fanText.textContent = "Fan is On";
        fanCard.querySelector('i').style.color = "#00bfa5"; // Green for fan on
    } else {
        fanText.textContent = "Fan is Off";
        fanCard.querySelector('i').style.color = "#6200ee"; // Default color for fan off
    }
}

function toggleLock() {
    lockOn = !lockOn;
    const lockText = document.getElementById('lock-text');
    const lockCard = document.getElementById('lock-card');
    if (lockOn) {
        lockText.textContent = "Lock is Unlocked";
        lockCard.querySelector('i').classList.replace('fa-lock', 'fa-unlock'); // Change lock to unlock icon
        lockCard.querySelector('i').style.color = "#f44336"; // Red for unlocked
    } else {
        lockText.textContent = "Lock is Locked";
        lockCard.querySelector('i').classList.replace('fa-unlock', 'fa-lock'); // Change unlock to lock icon
        lockCard.querySelector('i').style.color = "#6200ee"; // Default color for lock
    }
}
