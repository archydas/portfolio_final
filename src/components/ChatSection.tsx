import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User } from 'lucide-react';
import { getChatResponse } from '../services/openai';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const ChatSection = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm an AI assistant that can help you learn more about my projects and experience. Ask me anything!",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isTyping) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    try {
      const response = await getChatResponse(inputMessage);
      
      const botResponse: Message = {
        id: Date.now() + 1,
        text: response,
        isBot: true,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      const errorResponse: Message = {
        id: Date.now() + 1,
        text: "I'm having trouble responding right now. Please try again or use the contact form below!",
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleQuickQuestion = (question: string) => {
    setInputMessage(question);
  };

  return (
    <section id="chat" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-white mb-16 text-center">
          Chat with AI Assistant
        </h2>
        
        <div className="bg-slate-800/90 backdrop-blur-sm rounded-lg border border-slate-600 shadow-2xl overflow-hidden">
          {/* Chat Header */}
          <div className="bg-slate-700/90 px-6 py-4 border-b border-slate-600">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="ml-4 text-white font-medium">AI Assistant</span>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="h-96 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start space-x-3 ${
                  message.isBot ? 'justify-start' : 'justify-end'
                }`}
              >
                {message.isBot && (
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                )}
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    message.isBot
                      ? 'bg-slate-700 text-white'
                      : 'bg-blue-600 text-white ml-auto'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
                {!message.isBot && (
                  <div className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
            ))}
            
            {isTyping && (
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="bg-slate-700 text-white px-4 py-2 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input */}
          <div className="border-t border-slate-600 p-4">
            <div className="flex space-x-3">
              <textarea
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Start a conversation... Ask me anything about AI!"
                className="flex-1 bg-slate-700 text-white placeholder-slate-400 border border-slate-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                rows={1}
                disabled={isTyping}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isTyping}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-slate-600 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg transition-colors flex items-center justify-center"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Quick Questions */}
        <div className="mt-8 text-center">
          <p className="text-white/70 mb-4">Try asking about:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Tell me about your projects',
              'What technologies do you use?',
              'What is your experience?',
              'How can I contact you?'
            ].map((question) => (
              <button
                key={question}
                onClick={() => handleQuickQuestion(question)}
                className="bg-slate-700/70 hover:bg-slate-600/70 text-white px-4 py-2 rounded-full text-sm transition-colors"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatSection;