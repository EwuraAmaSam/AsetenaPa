function callEmergency(service) {
    alert(`Calling ${service}...`);
}

document.getElementById('emergency-form').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const emergencyType = document.getElementById('emergency-type').value;
    const location = document.getElementById('emergency-location').value;
    const description = document.getElementById('emergency-description').value;

    if (emergencyType && location && description) {
        alert(`Emergency reported:\nType: ${emergencyType}\nLocation: ${location}\nDescription: ${description}`);
    } else {
        alert('Please fill out all fields before submitting.');
    }
});
