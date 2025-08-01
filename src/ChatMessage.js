import userImage from "./assets/user.png";
import robotImage from "./assets/robot.png";

function ChatMessage({ message, sender }) {
  return (
    <div>
      {sender === "robot" && <img alt="userImg" src={robotImage} width={50} />}
      {message}
      {sender === "user" && <img alt="userImg" src={userImage} width={50} />}
    </div>
  );
}

export default ChatMessage;
