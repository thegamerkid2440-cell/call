const messages = document.getElementById("messages");
const status = document.getElementById("status");
const usernameDisplay = document.getElementById("usernameDisplay");
const peopleOnline = document.getElementById("peopleOnline");
const onlineCount = document.getElementById("onlineCount");

// Make a random username
function makeUsername() {
    const names = [
        "BluePanda",
        "CoolTiger",
        "FastFox",
        "HappyKoala",
        "RocketDog",
        "PixelCat",
        "StarWolf",
        "SuperDuck",
        "MagicBear",
        "TurboLion"
    ];

    const number = Math.floor(Math.random() * 9999) + 1;
    const name = names[Math.floor(Math.random() * names.length)];

    return name + number;
}

// Give this device a username
let username = localStorage.getItem("wifiPhoneUsername");

if (!username) {
    username = makeUsername();
    localStorage.setItem("wifiPhoneUsername", username);
}

usernameDisplay.textContent = username;

// Send a message
function sendMessage() {
    const message = document.getElementById("message").value.trim();

    if (!message) {
        status.textContent = "Type a message first!";
        return;
    }

    const newMessage = document.createElement("div");

    newMessage.className = "message";
    newMessage.textContent = username + ": " + message;

    messages.appendChild(newMessage);

    document.getElementById("message").value = "";

    status.textContent = "Message sent!";
}

// Call button
function startCall() {
    status.textContent = "📞 Calling...";

    setTimeout(() => {
        status.textContent = "Calling will be connected with WebRTC later.";
    }, 1500);
}

// Temporary online display
peopleOnline.innerHTML = `
    <div class="person">🟢 ${username} <small>(You)</small></div>
`;

onlineCount.textContent = "1";