
import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useOrder } from '../context/OrderContext';
import { getInitialOptions, getResponse, QuestionOption, ConversationState } from '../lib/customerCare';

const CustomerCareChat: React.FC = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const { getOrder } = useOrder();
  const [conversation, setConversation] = useState<ConversationState>({
    order: null,
    messages: [],
  });
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Initialize chat with order data
  useEffect(() => {
    if (orderId) {
      const order = getOrder(orderId);
      
      if (order) {
        const initialOptions = getInitialOptions(order);
        setConversation({
          order,
          messages: [
            {
              sender: 'system',
              content: `Hello! I'm your Lumina customer care assistant. How can I help you with order #${order.id}?`,
              options: initialOptions,
            },
          ],
        });
      }
    }
  }, [orderId, getOrder]);

  // Auto scroll to bottom of chat
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [conversation.messages]);

  const handleOptionSelect = (option: QuestionOption) => {
    if (!conversation.order) return;

    // Add user message
    setConversation((prev) => ({
      ...prev,
      messages: [
        ...prev.messages,
        {
          sender: 'user',
          content: option.text,
        },
      ],
    }));

    // Simulate typing delay
    setTimeout(() => {
      const response = getResponse(option.id, conversation.order!);
      
      setConversation((prev) => ({
        ...prev,
        messages: [
          ...prev.messages,
          {
            sender: 'system',
            content: response.text,
            options: response.followUp,
          },
        ],
      }));
    }, 500);
  };

  return (
    <div className="flex flex-col h-screen animate-fade-in">
      {/* Chat header */}
      <div className="bg-white border-b border-gray-200 px-4 py-4 shadow-sm">
        <div className="container mx-auto flex items-center">
          <Link to={`/order/${orderId}`} className="mr-4">
            <ArrowLeft size={20} />
          </Link>
          <div>
            <h1 className="text-lg font-semibold">Customer Support</h1>
            {conversation.order && (
              <p className="text-sm text-gray-500">Order #{conversation.order.id}</p>
            )}
          </div>
        </div>
      </div>

      {/* Chat container */}
      <div 
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto p-4 bg-gray-50"
      >
        <div className="container mx-auto max-w-2xl space-y-4">
          {conversation.messages.map((message, index) => (
            <div
              key={index}
              className={`animate-slide-in ${
                message.sender === 'user' ? 'flex justify-end' : 'flex justify-start'
              }`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-4 ${
                  message.sender === 'user'
                    ? 'bg-black text-white'
                    : 'bg-white border border-gray-200'
                }`}
              >
                <p>{message.content}</p>

                {/* Response options */}
                {message.options && (
                  <div className="mt-4 space-y-2">
                    {message.options.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => handleOptionSelect(option)}
                        className="w-full text-left px-4 py-2 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors text-sm"
                      >
                        {option.text}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerCareChat;
