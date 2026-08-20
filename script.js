const messages = document.getElementById("messages");
const status = document.getElementById("status");

function sendMessage() {
    const username = document.getElementById("username").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!username || !message) {
        status.textContent = "Enter your username and a message!";
        return;
    }

    const newMessage = document.createElement("div");

    newMessage.className = "message";
    newMessage.textContent = username + ": " + message;

    messages.appendChild(newMessage);

    document.getElementById("message").value = "";

    status.textContent = "Message added!";
}

function startCall() {
    status.textContent = "📞 Calling...";

    // Real Wi-Fi calling will be added here with WebRTC.
    setTimeout(() => {
        status.textContent = "WebRTC calling isn't connected yet.";
    }, 1500);
}