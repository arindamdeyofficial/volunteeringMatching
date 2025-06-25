'use client';

import { useState } from 'react';

export default function ChatbotOverlay() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hello! How can I help you today?' },
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { from: 'user', text: input }]);

    // Simulate bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { from: 'bot', text: "Thanks for your message! We'll get back soon." },
      ]);
    }, 1000);

    setInput('');
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg z-50"
      >
        Chat with Us
      </button>

      {/* Chat Overlay */}
      {isOpen && (
        <div className="fixed bottom-0 right-0 w-full sm:w-96 h-[75vh] sm:h-[70vh] bg-white dark:bg-gray-900 border-t sm:border-l sm:rounded-tl-lg shadow-xl flex flex-col z-50">
          <div className="flex justify-between items-center p-3 border-b bg-blue-600 text-white rounded-tl-lg">
            <h3 className="font-semibold">Support Chat</h3>
            <button onClick={() => setIsOpen(false)}>&#x2715;</button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2 text-sm">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`max-w-[80%] px-3 py-2 rounded ${
                  msg.from === 'bot'
                    ? 'bg-gray-200 dark:bg-gray-700 text-black dark:text-white self-start'
                    : 'bg-blue-500 text-white self-end ml-auto'
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 border-t flex items-center gap-2">
            <input
              type="text"
              className="flex-1 px-3 py-2 border rounded dark:bg-gray-800 dark:text-white"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
