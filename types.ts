
export type ChatRole = 'user' | 'model';

export interface Message {
  id: string;
  role: ChatRole;
  content: string;
}
