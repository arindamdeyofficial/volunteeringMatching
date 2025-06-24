interface Props {
  text: string;
  isUser?: boolean;
}

export default function ChatBubble({ text, isUser }: Props) {
  return (
    <div className={`mb-2 flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`px-4 py-2 rounded-lg max-w-md ${isUser ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-800 text-black dark:text-white'}`}>
        {text}
      </div>
    </div>
  );
}
