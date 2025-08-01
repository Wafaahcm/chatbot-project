import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ChatInput />
        <ChatMessage message="hello Chatbot" sender="user" />
        <ChatMessage message="Hello! How can I help you?" sender="robot" />
        <ChatMessage message="can you get me todays date?" sender="user" />
        <ChatMessage message="Today is August 01" sender="robot" />
      </header>
    </div>
  );
}

export default App;
