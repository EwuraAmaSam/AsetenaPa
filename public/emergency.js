function callEmergency(service) {
    let phoneNumber = "";

    switch (service) {
        case "911":
            phoneNumber = "+233205552741";
            break;
        case "Fire Department":
            phoneNumber = "+233205552741"; 
            break;
        case "Medical Emergency":
            phoneNumber = "+233205552741"; 
            break;
        case "Security Services":
            phoneNumber = "+233205552741"; 
            break;
        default:
            return;
    }

    // Open the phone dialer 
    window.location.href = `tel:${phoneNumber}`;
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
