import { useState } from "react";

function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState("");

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  function sendMessage() {
    setChatMessages([
      ...chatMessages,
      {
        message: "test",
        sender: "user",
        id: crypto.randomUUID(),
      },
    ]);
  }

  return (
    <div>
      <input
        placeholder="Send a message to Chatbot"
        size="30"
        onChange={saveInputText}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default ChatInput;
