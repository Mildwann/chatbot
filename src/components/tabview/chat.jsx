import React, { useEffect, useRef, useState } from 'react';
import './../../css/chat.css';

export default function Chat() {
  const [messages, setMessages] = React.useState([]);
  const [inputValue, setInputValue] = React.useState('');
  const messagesEndRef = useRef(null);

  const handleSendMessage = (event) => {
    event.preventDefault();
    if (inputValue.trim() === '') return;

    setMessages([...messages, { text: inputValue, isUser: true }]);
    setInputValue(''); 
    setTimeout(() => {
      const aiMessage = "This is an automated response.";
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: aiMessage, isUser: false },
      ]);
    }, 1000); 
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <>
      <div className='chat-container'>
        <label htmlFor="Super Chat" className='header-chat'>Real Chat</label>

        <div className='chat-messages'>
          {messages.map((message, index) => (
            <div
              key={index}
              className={`chat-text-container ${message.isUser ? '' : 'chat-text-ai'}`}
            >
              <img
                className='chat-text-image'
                src={message.isUser ? "src\\assets\\profile.png" : "src\\assets\\bot.png"}
                alt="Profile"
              />
              <div className='chat-text-text'>
                {message.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <form className='chat-input-container' onSubmit={handleSendMessage}>
          <textarea
            className='chat-text-input'
            placeholder='Ask Anything'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          ></textarea>
          <button className='chat-send-button'>
            <i className="fa-solid fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </>
  );
}