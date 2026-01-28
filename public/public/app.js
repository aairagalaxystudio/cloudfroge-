async function send() {
  const input = document.getElementById("input").value;
  const output = document.getElementById("output");

  output.textContent = "🤖 Thinking...";

  const res = await fetch("/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: input })
  });

  const data = await res.json();
  output.textContent = data.reply || "Error";
}
