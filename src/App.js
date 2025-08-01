import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";

function App() {
  return (
    <div className="App">
      <>
        <ChatInput />
        <ChatMessages />
      </>
    </div>
  );
}

function ChatMessages() {
  const chatMessages = [
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
  ];

  return (
    <>
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

export default App;
