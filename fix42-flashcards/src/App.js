import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('/fix42-messages.json');
        setMessages(response.data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div className="App">
      <h1>FIX 4.2 Flashcards</h1>
      <div className="flashcards">
        {messages.map((msg) => (
          <div key={msg.id} className="flashcard">
            <p>{msg.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
