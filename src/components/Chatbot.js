// ChatBot.js
import React, { useState } from 'react';
import axios from 'axios';

const ChatBot = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);

    const sendMessage = async () => {
        if (!input) return;

        const userMessage = { text: input, user: 'human' };
        setMessages(prevMessages => [...prevMessages, userMessage]);

        try {
            const response = await axios.post('http://localhost:5001/chat-message', { message: input });
            const botMessage = { text: response.data.choices[0].text.trim(), user: 'ai' };
            setMessages(prevMessages => [...prevMessages, botMessage]);
        } catch (error) {
            console.error('Error:', error);
        }

        setInput('');
    };

    return (
        <div>
            <div>
                {messages.map((message, index) => (
                    <p key={index} className={message.user} style={{
                        textAlign: message.user === 'human' ? 'right' : 'left',
                        backgroundColor: message.user === 'human' ? '#add8e6' : '#90ee90',
                        padding: '5px',
                        borderRadius: '10px',
                        maxWidth: '80%',
                        marginLeft: message.user === 'human' ? 'auto' : '10px',
                        marginRight: message.user === 'ai' ? 'auto' : '10px',
                    }}>
                        {message.text}
                    </p>
                ))}
            </div>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default ChatBot;
