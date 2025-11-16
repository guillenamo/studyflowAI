import React from 'react';
import { useChat } from './hooks/useChat.ts';
import ChatHistory from './components/ChatHistory.tsx';
import ChatInput from './components/ChatInput.tsx';
import { BookOpenIcon } from './components/icons.tsx';

const App: React.FC = () => {
  const { messages, sendMessage, isLoading, error } = useChat();

  return (
    <div className="flex flex-col h-screen max-h-screen bg-slate-100 font-sans">
      <header className="flex items-center justify-center p-4 border-b border-slate-300 bg-white shadow-sm">
        <BookOpenIcon className="w-8 h-8 text-sky-500 mr-3" />
        <h1 className="text-2xl font-bold text-slate-800">StudyFlow AI</h1>
      </header>

      <main className="flex-1 overflow-y-auto p-4 md:p-6">
        <ChatHistory messages={messages} />
      </main>

      <footer className="p-4 md:p-6 bg-white border-t border-slate-200">
        <div className="max-w-3xl mx-auto">
          {error && (
            <div className="mb-2 text-center text-red-500 bg-red-100 p-2 rounded-md">
              <p><strong>Error:</strong> {error}</p>
            </div>
          )}
          <ChatInput onSendMessage={sendMessage} isLoading={isLoading} />
           <p className="text-xs text-center text-slate-400 mt-3">
            StudyFlow AI can make mistakes. Consider checking important information.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
