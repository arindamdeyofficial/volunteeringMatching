'use client';

import { useState } from 'react';
import ChatBubble from '../../components/journey/ChatBubble';
import StarRating from '../../components/journey/StarRating';
import OptionButtons from '../../components/journey/OptionButtons';
import { Question } from './types';

const questions: Question[] = [
  { id: 'q1', text: 'What is your full name?', type: 'text' },
  { id: 'q2', text: 'Are you currently employed?', type: 'yesno', options: ['Yes', 'No'] },
  { id: 'q3', text: 'Which causes are you interested in?', type: 'multiple', options: ['Education', 'Environment', 'Health', 'Technology'] },
  { id: 'q4', text: 'How satisfied are you with your current volunteering journey?', type: 'rating' },
];

export default function JourneyPage() {
  const [step, setStep] = useState(0);
  const [chatLog, setChatLog] = useState<{ sender: 'user' | 'bot'; text: string }[]>([]);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [inputText, setInputText] = useState('');

  const currentQuestion = questions[step];

  const handleAnswer = (answer: any) => {
    setChatLog((prev) => [
      ...prev,
      { sender: 'bot', text: currentQuestion.text },
      { sender: 'user', text: answer.toString() }
    ]);
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: answer }));
    setStep((prev) => prev + 1);
    setInputText('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputText.trim()) {
      handleAnswer(inputText.trim());
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Journey Assistant</h1>
      <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg max-h-[70vh] overflow-y-auto mb-4">
        {chatLog.map((msg, idx) => (
          <ChatBubble key={idx} text={msg.text} isUser={msg.sender === 'user'} />
        ))}
        {step < questions.length && (
          <ChatBubble text={currentQuestion.text} />
        )}
      </div>

      {step < questions.length && (
        <div className="bg-white dark:bg-[#1a1a1a] p-4 rounded shadow">
          {currentQuestion.type === 'text' && (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded mb-2"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Type your answer..."
              />
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
                Submit
              </button>
            </form>
          )}

          {(currentQuestion.type === 'yesno' || currentQuestion.type === 'multiple') && (
            <OptionButtons options={currentQuestion.options!} onSelect={handleAnswer} />
          )}

          {currentQuestion.type === 'rating' && (
            <StarRating onSelect={(val) => handleAnswer(`${val} stars`)} />
          )}
        </div>
      )}

      {step >= questions.length && (
        <div className="mt-4 p-4 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded">
          <strong>Thank you!</strong> Your profile journey is now complete.
        </div>
      )}
    </div>
  );
}
