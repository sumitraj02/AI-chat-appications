document.addEventListener('DOMContentLoaded', function () {
    const chatMessages = document.querySelector('.chat-messages');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');
    const promptCards = document.querySelectorAll('.prompt-card');
    const welcomeMessage = document.querySelector('.welcome-message');
    const newChatBtn = document.querySelector('.new-chat-btn');

    if (!chatMessages || !userInput || !sendBtn) {
        console.error("💥 Missing essential DOM elements.");
        return;
    }

    function startNewChat() {
        welcomeMessage.style.display = 'none';
        chatMessages.style.display = 'flex';
        chatMessages.innerHTML = '';
    }

    function addMessage(role, content) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message';

        const avatarDiv = document.createElement('div');
        avatarDiv.className = 'message-avatar';
        avatarDiv.textContent = role === 'user' ? 'U' : 'AI';

        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';

        const contentP = document.createElement('p');
        contentP.textContent = content;

        contentDiv.appendChild(contentP);
        messageDiv.appendChild(avatarDiv);
        messageDiv.appendChild(contentDiv);
        chatMessages.appendChild(messageDiv);

        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    async function handleUserInput() {
        const message = userInput.value.trim();
        if (!message) return;

        addMessage('user', message);
        userInput.value = '';

        showTypingIndicator();

        try {
            const response = await callAIAPI(message);
            removeTypingIndicator();
            addMessage('assistant', response);
        } catch (err) {
            removeTypingIndicator();
            addMessage('assistant', "⚠️ Failed to get response.");
        }
    }

    function showTypingIndicator() {
        const typingIndicator = document.createElement('div');
        typingIndicator.className = 'message typing-indicator';
        typingIndicator.innerHTML = `
            <div class="message-avatar">AI</div>
            <div class="message-content">
                <p>Typing...</p>
            </div>
        `;
        chatMessages.appendChild(typingIndicator);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function removeTypingIndicator() {
        const typing = chatMessages.querySelector('.typing-indicator');
        if (typing) chatMessages.removeChild(typing);
    }

    async function callAIAPI(message) {
        try {
            const response = await fetch('/api/ask', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message })
            });

            const data = await response.json();
            console.log("✅ Backend response:", data);
            return data?.reply || "No response received";
        } catch (error) {
            console.error('❌ Error calling backend:', error);
            return "Sorry, I encountered an error. Please try again.";
        }
    }

    sendBtn.addEventListener('click', handleUserInput);

    userInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleUserInput();
        }
    });

    promptCards.forEach(card => {
        card.addEventListener('click', function () {
            startNewChat();
            const prompt = this.textContent;
            addMessage('user', prompt);
            showTypingIndicator();

            callAIAPI(prompt).then(response => {
                removeTypingIndicator();
                addMessage('assistant', response);
            });
        });
    });

    newChatBtn.addEventListener('click', startNewChat);

    welcomeMessage.style.display = 'block';
    chatMessages.style.display = 'none';
});
