import {useNavigate} from "react-router-dom";

export function ChatButton() {

    const navigate = useNavigate();

    const handleChat = () => {
    navigate  ('/chat')
    };
    


  return (
    <button className="chat-button" onClick={handleChat}>
      <i className="chat-icon">🗨</i>
    </button>
  );
}

