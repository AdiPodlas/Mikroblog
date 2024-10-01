import React, { useState } from "react";
import "./ChatPage.css";

function ChatPage() {
  const [message, setMessage] = useState(""); 

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Wiadomość wysłana:", message);
    setMessage(""); // Wyczyść pole po wysłaniu wiadomości
  };

  return (
    <div className="chat-page">
      <h1>Wyślij wiadomość</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Wpisz swoją wiadomość..."
          rows="4"
          cols="50"
          required
        />
        <br />
        <button type="submit">Wyślij</button>
      </form>
    </div>
  );
}

export default ChatPage;
