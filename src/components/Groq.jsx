import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.REACT_APP_GROQ_API_KEY,
  dangerouslyAllowBrowser: true,
});

let messageHistory = [];
const regexBold = /\*\*([^*]+)\*\*/g;
const regexBullet = /\*([^*]+)\*/g;
const regexPreformatted = /\`\`\`([^\`]+)\`\`\`/g;
const regexInlineCode = /\`([^`]+)\`/g;

export async function main(content) {
  let chatMessages = document.getElementById("chat-messages");

  chatMessages.innerHTML += `<div class="user-message"><div class="user-content">${content
    .replace(regexPreformatted, (match, p1) => {
      return `<pre class="code-block"><code>${escapeHTML(p1)}</code></pre>`;
    })
    .replace(regexBold, (match, p1) => `<strong>${p1}</strong>`)
    .replace(regexBullet, (match, p1) => `<ul><li>${p1}</li></ul>`)
    .replace(
      regexInlineCode,
      (match, p1) => `<code>${escapeHTML(p1)}</code>`
    )}</div></div>`;

  messageHistory.push({
    role: "user",
    content: content,
  });

  const chatCompletion = await getGroqChatCompletion(messageHistory);
  function escapeHTML(str) {
    return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  messageHistory.push({
    role: "assistant",
    content: chatCompletion.choices[0]?.message?.content || "",
  });
  chatMessages.scrollTop = chatMessages.scrollHeight;

  let element = document.createElement("div");
  element.className = "assistant-message";
  let text = (chatCompletion.choices[0]?.message?.content || "")
    .replace(regexPreformatted, (match, p1) => {
      return `<pre class="code-block"><code>${escapeHTML(p1)}</code></pre>`;
    })
    .replace(regexBold, (match, p1) => `<strong>${p1}</strong>`)
    .replace(regexBullet, (match, p1) => `<ul><li>${p1}</li></ul>`)
    .replace(regexInlineCode, (match, p1) => `<code>${escapeHTML(p1)}</code>`);
  let speed = 20;
  if (text.length > 100) {
    speed = 1;
  }

  function typeEffect(element, text, speed) {
    chatMessages.appendChild(element);
    let i = 0;
    function type() {
      if (i < text.length) {
        element.innerHTML = text.substring(0, i + 1);
        i++;
        setTimeout(type, speed);
      }
    }
    chatMessages.scrollTop = chatMessages.scrollHeight;
    type();
  }

  typeEffect(element, text, speed);
}

export async function getGroqChatCompletion(messages) {
  return groq.chat.completions.create({
    messages: messages,
    model: "llama3-8b-8192",
    temperature: 0.69,
    top_p: 1,
  });
}
