import { useState } from "react";
import ChatInput from "./ChatInput";

import ChatMessages from "./ChatMessages";

function App() {
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

  return (
    <div className="App">
      <>
        <ChatInput
          chatMessages={chatMessages}
          setChatMessages={setChatMessages}
        />
        <ChatMessages chatMessages={chatMessages} />
      </>
    </div>
  );
}

export default App;
