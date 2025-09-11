import React, { useState, useRef, useEffect } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm EarthBot, your environmental data assistant. How can I help you explore our planet today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = generateBotResponse(inputMessage);
      const botMessage = {
        id: Date.now() + 1,
        text: botResponse,
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const generateBotResponse = (userInput) => {
    const input = userInput.toLowerCase();
    
    if (input.includes('climate') || input.includes('temperature')) {
      return "I can help you with climate data! Our platform tracks global temperature changes, precipitation patterns, and extreme weather events. Would you like to see the latest climate trends in a specific region?";
    } else if (input.includes('forest') || input.includes('deforestation')) {
      return "Forest monitoring is one of our key features! We track deforestation rates, forest health, and biodiversity changes using satellite imagery. I can show you recent forest alerts or historical deforestation data.";
    } else if (input.includes('satellite') || input.includes('imagery')) {
      return "Our satellite imagery covers 195 countries with 10m/pixel resolution, updated daily! You can access high-resolution images for land use analysis, urban development tracking, or environmental monitoring.";
    } else if (input.includes('api') || input.includes('data')) {
      return "You can access our data through our REST API or real-time WebSocket feed. We provide endpoints for satellite imagery, climate data, forest monitoring, and more. Would you like API documentation?";
    } else {
      return "That's an interesting question about Earth monitoring! I can help you with satellite imagery, climate data, forest monitoring, and environmental analytics. What specific aspect would you like to explore?";
    }
  };

  const quickQuestions = [
    "Show me latest climate data",
    "Forest deforestation alerts",
    "Satellite imagery access",
    "API documentation"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-800 to-indigo-900 text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-300 to-green-400 bg-clip-text text-transparent">
              EarthBot Assistant
            </h1>
            <p className="text-blue-200">
              Ask me anything about environmental data and Earth monitoring
            </p>
          </div>

          {/* Chat Container */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden">
            {/* Messages Area */}
            <div className="h-96 overflow-y-auto p-6 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
                  <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    message.isBot 
                      ? 'bg-blue-600/80 text-white' 
                      : 'bg-green-600/80 text-white'
                  }`}>
                    <p className="text-sm">{message.text}</p>
                    <p className="text-xs mt-1 opacity-70">
                      {message.timestamp.toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-blue-600/80 text-white px-4 py-2 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            <div className="px-6 py-4 border-t border-white/20">
              <p className="text-sm text-blue-200 mb-3">Quick questions:</p>
              <div className="flex flex-wrap gap-2">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => setInputMessage(question)}
                    className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-full text-xs text-blue-200 transition-all"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Area */}
            <form onSubmit={handleSendMessage} className="p-6 border-t border-white/20">
              <div className="flex space-x-4">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Ask about environmental data, satellite imagery, or climate trends..."
                  className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-blue-400"
                  disabled={isTyping}
                />
                <button
                  type="submit"
                  disabled={!inputMessage.trim() || isTyping}
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed rounded-lg font-semibold transition-all"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
