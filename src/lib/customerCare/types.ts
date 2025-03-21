
import { Order } from '../../context/OrderContext';

export type QuestionOption = {
  id: string;
  text: string;
};

export type SystemMessage = {
  sender: 'system';
  content: string;
  options?: QuestionOption[];
};

export type UserMessage = {
  sender: 'user';
  content: string;
};

export type Message = SystemMessage | UserMessage;

export type ConversationState = {
  order: Order | null;
  messages: Message[];
};

export type ResponseData = {
  text: string;
  followUp?: QuestionOption[];
};
