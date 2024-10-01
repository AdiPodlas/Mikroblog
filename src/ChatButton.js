import {useNavigate} from "react-router-dom";
import { FaRocketchat } from "react-icons/fa";

export function ChatButton() {

    const navigate = useNavigate();

    const handleChat = () => {
    navigate  ('/chat')
    };
    


  return (
    <button className="chat-button" onClick={handleChat}>
      <FaRocketchat />
    </button>
  );
}

