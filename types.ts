
export type Page = 'Dashboard' | 'AI Assistant' | 'Schedule' | 'Resources' | 'Chatbot';

export interface Task {
  id: string;
  text: string;
  completed: boolean;
  createdAt: number;
}

export interface Resource {
  id: string;
  title: string;
  url: string;
  notes: string;
  createdAt: number;
}

export interface GroundingChunk {
  web: {
    uri: string;
    title: string;
  };
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model' | 'system';
  content: string;
}

export type Action = 'ADD_TASK' | 'ADD_RESOURCE';

export interface ActionPayload {
  text?: string;
  title?: string;
  url?: string;
  notes?: string;
}

export interface ActionResponse {
  action: Action;
  payload: ActionPayload;
  thought: string;
}
