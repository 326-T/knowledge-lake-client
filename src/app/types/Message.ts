export interface Message {
  id: string;
  user: string;
  self: boolean;
  content: string;
  topicId: string;
  createdAt: string;
  updatedAt: string;
  version: number;
}