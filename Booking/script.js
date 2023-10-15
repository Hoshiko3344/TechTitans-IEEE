const openChatbotButton = document.getElementById("open-chatbot");
const chatbotPopup = document.getElementById("chatbot-popup");
const closeChatbotButton = document.getElementById("close-chatbot");
const chatMessages = document.getElementById("chat-messages");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send");

openChatbotButton.addEventListener("click", () => {
    chatbotPopup.style.display = "block";
});

closeChatbotButton.addEventListener("click", () => {
    chatbotPopup.style.display = "none";
});

sendButton.addEventListener("click", () => {
    const message = userInput.value;
    appendMessage("You", message);
    
    // Replace with real emergency message sending logic
    sendEmergencyMessage(message);

    userInput.value = "";
});

function appendMessage(sender, message) {
    const messageDiv = document.createElement("div");
    messageDiv.textContent = `${sender}: ${message}`;
    chatMessages.appendChild(messageDiv);
}

// Replace this function with your real emergency message sending logic
function sendEmergencyMessage(message) {
    alert(`Emergency Message Sent: "${message}"`);
}
