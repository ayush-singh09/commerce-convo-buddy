
import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Send, MessageCircle, HelpCircle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { useOrder } from '../context/OrderContext';
import { 
  getInitialOptions, 
  getResponse, 
  QuestionOption, 
  ConversationState, 
  SystemMessage 
} from '../lib/customerCare';

const CustomerCareChat: React.FC = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const { getOrder } = useOrder();
  const [conversation, setConversation] = useState<ConversationState>({
    order: null,
    messages: [],
  });
  const [inputValue, setInputValue] = useState('');
  const chatContainerRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [conversation.messages]);

  const handleOptionSelect = (option: QuestionOption) => {
    if (!conversation.order) return;

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
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-4 shadow-sm sticky top-0 z-10">
        <div className="container mx-auto flex items-center gap-3">
          <Link to={`/order/${orderId}`} className="rounded-full p-2 hover:bg-gray-100 transition-colors">
            <ArrowLeft size={20} />
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white">
              <MessageCircle size={18} />
            </div>
            <div>
              <h1 className="text-lg font-semibold">Customer Support</h1>
              {conversation.order && (
                <p className="text-sm text-gray-500">Order #{conversation.order.id}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Chat area */}
      <div 
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto p-4 bg-gradient-to-br from-gray-50 to-gray-100"
      >
        <div className="container mx-auto max-w-2xl space-y-6 py-4">
          {conversation.messages.map((message, index) => (
            <div
              key={index}
              className={`animate-slide-in ${
                message.sender === 'user' ? 'flex justify-end' : 'flex justify-start'
              }`}
            >
              <Card
                className={`max-w-[80%] overflow-hidden ${
                  message.sender === 'user'
                    ? 'bg-black text-white border-none shadow-lg'
                    : 'bg-white border border-gray-100 shadow-md'
                }`}
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    {message.sender === 'system' && (
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center shrink-0 mt-1">
                        <HelpCircle size={16} className="text-gray-600" />
                      </div>
                    )}
                    <div className="space-y-3">
                      <p className="leading-relaxed">{message.content}</p>

                      {message.sender === 'system' && (message as SystemMessage).options && (
                        <div className="mt-4 grid gap-2">
                          {(message as SystemMessage).options!.map((option) => (
                            <button
                              key={option.id}
                              onClick={() => handleOptionSelect(option)}
                              className="w-full text-left px-4 py-3 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors text-sm flex items-center gap-2 group"
                            >
                              <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                                <CheckCircle size={12} />
                              </div>
                              <span>{option.text}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Input area */}
      <div className="border-t border-gray-200 bg-white p-4 sticky bottom-0">
        <div className="container mx-auto max-w-2xl">
          <div className="flex items-center gap-2">
            <Input
              placeholder="Type a message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="rounded-full bg-gray-100 border-none focus-visible:ring-black"
            />
            <Button
              className="rounded-full w-12 h-12 p-0 flex items-center justify-center aspect-square"
              disabled={!inputValue.trim()}
            >
              <Send size={18} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerCareChat;
