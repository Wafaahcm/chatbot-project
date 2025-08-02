import { useState } from "react";
import ChatMessage from "./ChatMessage";

function ChatMessages() {
  const [chatMessages, setChatMessages] = useState([
    {
      id: "id1",
      message: "hello Chatbot",
      sender: "user",
    },
    {
      id: "id2",
      message: "Hello! How can I help you?",
      sender: "robot",
    },
    {
      id: "id3",
      message: "can you get me todays date?",
      sender: "user",
    },
    {
      id: "id4",
      message: "Today is August 01",
      sender: "robot",
    },
  ]);

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
    <>
      <button onClick={sendMessage}>Send message</button>
      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage
            message={chatMessage.message}
            sender={chatMessage.sender}
            key={chatMessage.id}
          />
        );
      })}
    </>
  );
}

export default ChatMessages;
