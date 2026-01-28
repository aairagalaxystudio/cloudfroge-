async function send() {
  const input = document.getElementById("message");
  const chat = document.getElementById("chat");
  const text = input.value.trim();
  if (!text) return;

  chat.innerHTML += `<div class="message user">You: ${text}</div>`;
  input.value = "";

  const res = await fetch("/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: text })
  });

  const data = await res.json();
  chat.innerHTML += `<div class="message bot">🐸 ${data.reply}</div>`;
  chat.scrollTop = chat.scrollHeight;
}