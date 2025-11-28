import React from 'react';
import { Message } from '../types';
import { Bot, User } from 'lucide-react';

interface MessageBubbleProps {
  message: Message;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const isUser = message.role === 'user';

  // Function to format text: removes ** stars and makes text bold, handles bullet points
  const formatText = (text: string) => {
    return text.split('\n').map((line, i) => {
      let content = line.trim();
      
      // Handle Bullet Points (starts with - or *)
      // We look for a dash or star followed by a space, or just a dash/star at the start
      const bulletRegex = /^[-*]\s+/;
      const isBullet = bulletRegex.test(content);
      
      if (isBullet) {
        content = content.replace(bulletRegex, '');
      }

      // Handle Bold (**text**)
      const parts = content.split(/\*\*(.*?)\*\*/g);
      
      const formattedLine = parts.map((part, index) => {
        // The split with group (.*?) results in: [text, bolded_text, text, bolded_text...]
        // Even indices are normal text, Odd indices are the captured group (bold text)
        if (index % 2 === 1) {
          return <strong key={index} className="font-semibold text-slate-900">{part}</strong>;
        }
        return part;
      });

      // Filter out empty lines unless they are intended spacers
      if (content.length === 0 && !isBullet) {
         return <div key={i} className="h-2" />;
      }

      return (
        <div key={i} className={`${isBullet ? 'flex gap-2 ml-1 mb-1' : 'mb-1'}`}>
          {isBullet && <span className="text-blue-500 font-bold">•</span>}
          <span>{formattedLine}</span>
        </div>
      );
    });
  };

  return (
    <div className={`flex w-full mb-6 ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`flex max-w-[85%] md:max-w-[70%] gap-3 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
        
        {/* Avatar */}
        <div className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center ${
          isUser ? 'bg-slate-200 text-slate-600' : 'bg-blue-600 text-white'
        }`}>
          {isUser ? <User size={16} /> : <Bot size={16} />}
        </div>

        {/* Bubble */}
        <div className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}>
          <div className={`px-5 py-3.5 rounded-2xl shadow-sm text-[15px] leading-relaxed ${
            isUser 
              ? 'bg-blue-600 text-white rounded-tr-none' 
              : 'bg-white text-slate-700 border border-slate-100 rounded-tl-none'
          }`}>
            {isUser ? message.text : formatText(message.text)}
          </div>
          <span className="text-[10px] text-slate-400 mt-1 px-1">
            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>

      </div>
    </div>
  );
};

export default MessageBubble;