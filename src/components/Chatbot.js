import React, { useState } from "react";
import axios from "axios";
import "./chatbot.css"; // Make sure the CSS file is correctly imported
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot } from "@fortawesome/free-solid-svg-icons";

const Chatbot = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]); // Store all messages here
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const defaultRule =
    `Sami Noroozi is a committed, ambitious, and hardworking individual, currently excelling as a third-year Master of Science student in Computer Engineering at Jönköping University, with a keen focus on Artificial Intelligence and Machine Learning. His journey in this rigorous program has not only furnished him with profound knowledge in modern software development, AI, and engineering principles, but also refined his problem-solving, collaboration, and leadership skills. Adept in various programming languages including C, C++, Haskell, O#HL, and Python, Sami has a versatile skill set, ranging from low-level to high-level object-oriented programming. He possesses a robust understanding of Computer Science fundamentals, is proficient with machine learning frameworks like TensorFlow, PyTorch/Keras API, Certej AI, and is conversant with cloud orchestration tools such as Git, GitHub, and Docker.

    Sami's practical experience is equally impressive, featuring personal projects like an online event scheduling application, multiple embedded system projects, and advanced neural network and deep learning projects utilizing TensorFlow and Keras API. Professionally, he has been honing his skills as a part-time assembler at Magna International (Veoneer) since June 2021, where he's not only refined his problem-solving and teamwork abilities but also acquired valuable knowledge about various automobile products.
    
    Phone: 0708854209, I live in Sweden, Jönköping, ,My first programming language was Haskell, which I initially disliked because it felt like a black box full of recursion, making it hard to understand the processes. However, my journey took a positive turn when I was introduced to C, which was much easier to understandIn his pursuit of a balanced lifestyle, Sami dedicates time to the gym and exercise for physical well-being, indulges in playing games for leisure, nurtures his social life by hanging out with friends (albeit humorously claiming just to be pretending to be social), and constantly works on personal projects to gain practical experience in ideation and implementation. His multicultural background, proficiency in multiple languages including English, Swedish, Persian, and Hari, coupled with his ability to articulate technical challenges and solutions and handle ambiguous problems, make him a standout candidate. Sami is reachable through LinkedIn, email at saminoorzy@gmail.com, or phone at +46-708854209, with references like Jani Urpilanien from Magna International and Ulf Johansson, Professor of Computer Science at JU. e been persistent and diligent in my efforts. I have successfully learned both Swedish and English and completed my high school education with top grades.",`;

  const getResponse = async (message) => {
    const url = "https://api.openai.com/v1/chat/completions";
    const apiKey = "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"; // Use your actual API key here

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

    setLoading(true);
    try {
      const res = await axios.post(url, data, { headers: headers });
      const botMessage = res.data.choices[0].message.content; // Adapt based on actual API response structure
      setMessages((prevMessages) => [
        ...prevMessages,
        { content: botMessage, sender: "bot" },
      ]);
    } catch (error) {
      console.error("Error:", error);
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
    // This ensures that only clicks directly on the chatbot-container will toggle the chat
    if (e.currentTarget === e.target) {
      toggleChatbot();
    }
  };

  const handleContentClick = (e) => {
    // Prevents click inside the chat from closing it
    e.stopPropagation();
  };

  return (
    <div
      className={`chatbot-container ${isOpen ? "open" : "close"}`}
      onClick={handleContainerClick}
    >
      {!isOpen && (
        <div className="chatbot-closed-icon" onClick={toggleChatbot}>
          <FontAwesomeIcon icon={faRobot} size="2x" />
        </div>
      )}
      {isOpen && (
        <div className="chatbot-content" onClick={handleContentClick}>
          <div className="chatbot-header">
            <h2>SamiBot</h2>
            <button className="toggle-button" onClick={toggleChatbot}>
              −
            </button>
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
              placeholder="Type a message..."
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
