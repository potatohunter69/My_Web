import React, { useState } from "react";
import axios from "axios";
import "./chatbot.css"; // Ensure this CSS file is correctly linked
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot } from "@fortawesome/free-solid-svg-icons";

const Chatbot = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]); // Stores all messages
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const defaultRule = `...`; // Your long default rule string

  const getResponse = async (message) => {
    const url = "https://api.openai.com/v1/chat/completions";
    const apiKey = "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"; // Ensure this is the correct API key

    const headers = {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    };

    const data = {
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: defaultRule },
        { role: "user", content: message },
      ],
      temperature: 0.7,
    };

    console.log("API Key:", apiKey); // Debug: API Key
    console.log("Headers:", headers); // Debug: Headers
    console.log("Data being sent:", data); // Debug: Data being sent

    setLoading(true);
    console.log("Sending message to OpenAI API...");
    try {
      const res = await axios.post(url, data, { headers: headers });
      console.log("Response received:", res.data); // Debug: Response Data
      const botMessage = res.data.choices[0].message.content; // Adapt based on actual API response structure
      setMessages((prevMessages) => [
        ...prevMessages,
        { content: botMessage, sender: "bot" },
      ]);
    } catch (error) {
      console.error("Error:", error);
      if (error.response) {
        console.log("Server response:", error.response.data); // Debug: Server Response
      }
      console.error("Detailed error:", JSON.stringify(error, null, 2)); // Debug: Detailed Error
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return; // Prevent sending empty messages
    setMessages([...messages, { content: message, sender: "user" }]);
    getResponse(message);
    setMessage(""); // Clear the input field after sending the message
  };

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleContainerClick = (e) => {
    if (e.currentTarget === e.target) {
      toggleChatbot();
    }
  };

  const handleContentClick = (e) => {
    e.stopPropagation(); // Prevents click inside the chat from closing it
  };

  return (
    <div className={`chatbot-container ${isOpen ? "open" : "close"}`} onClick={handleContainerClick}>
      {!isOpen && (
        <div className="chatbot-closed-icon" onClick={toggleChatbot}>
          <FontAwesomeIcon icon={faRobot} size="2x" />
        </div>
      )}
      {isOpen && (
        <div className="chatbot-content" onClick={handleContentClick}>
          <div className="chatbot-header">
            <h2>SamiBot</h2>
            <button className="toggle-button" onClick={toggleChatbot}>−</button>
          </div>
          <div className="messages-container">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                <p>{msg.content}</p>
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="chatbot-form">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Who is Sami?"
              disabled={loading}
            />
            <button type="submit" disabled={loading}>
              {loading ? "Loading..." : "Send"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
