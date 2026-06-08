const botResponses = [
  {
    triggers: ['hello', 'hi', 'hey', 'greetings'],
    response: 'Hello! I’m the MHM Assistant. Ask me about the portfolio, project details, or how this site is built.'
  },
  {
    triggers: ['portfolio', 'work', 'projects'],
    response: 'This portfolio highlights brand systems, digital experiences, and launch-ready design work. Each project card includes an interactive package selector so visitors can explore service tiers.'
  },
  {
    triggers: ['resume', 'experience', 'hiring'],
    response: 'I’d describe the resume as polished and recruiter-friendly, with an accessible layout, clear role summary, and attention to visual storytelling.'
  },
  {
    triggers: ['contact', 'email', 'hire'],
    response: 'You can reach out via email to mdh524355@gmail.com or click the Hire me button in the hero section to start a conversation.'
  },
  {
    triggers: ['design', 'brand', 'identity'],
    response: 'This project is styled to feel modern and premium with glassy panels, gradient accents, and a balanced typographic hierarchy.'
  },
  {
    triggers: ['ai', 'bot', 'assistant'],
    response: 'The AI assistant is built with vanilla JavaScript and delivers helpful on-page guidance. It is designed to mimic an intelligent recruiter support widget for this portfolio.'
  }
];

function createMessage(content, sender) {
  const bubble = document.createElement('div');
  bubble.className = `chat-message ${sender}`;
  bubble.textContent = content;
  return bubble;
}

function getBotReply(message) {
  const normalized = message.trim().toLowerCase();

  if (!normalized) {
    return 'Please enter a question so I can help you.';
  }

  for (const item of botResponses) {
    if (item.triggers.some(trigger => normalized.includes(trigger))) {
      return item.response;
    }
  }

  return 'This is a portfolio bot, so I can best respond to questions about the work, resume, design, or contact details. Try asking something like “What is this project?” or “How can I hire you?”.';
}

function appendChatMessage(text, sender) {
  const chatWindow = document.getElementById('chatWindow');
  const message = createMessage(text, sender);
  chatWindow.appendChild(message);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function initChatbot() {
  const chatForm = document.getElementById('chatForm');
  const chatInput = document.getElementById('chatInput');

  appendChatMessage('Welcome to the MHM Studio Assistant. Ask about the portfolio or resume to get started.', 'bot');

  chatForm.addEventListener('submit', event => {
    event.preventDefault();
    const userMessage = chatInput.value;
    if (!userMessage.trim()) return;

    appendChatMessage(userMessage, 'user');
    chatInput.value = '';

    setTimeout(() => {
      const reply = getBotReply(userMessage);
      appendChatMessage(reply, 'bot');
    }, 300);
  });
}

window.addEventListener('DOMContentLoaded', initChatbot);
