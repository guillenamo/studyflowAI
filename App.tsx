
import React, { useState } from 'react';
import { StudyFlowProvider } from './context/StudyFlowContext.tsx';
import Sidebar from './components/Sidebar.tsx';
import Dashboard from './pages/Dashboard.tsx';
import Assistant from './pages/Assistant.tsx';
import Schedule from './pages/Schedule.tsx';
import Resources from './pages/Resources.tsx';
import Chat from './pages/Chat.tsx';
import { Page } from './types.ts';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('Dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'Dashboard':
        return <Dashboard />;
      case 'AI Assistant':
        return <Assistant />;
      case 'Schedule':
        return <Schedule />;
      case 'Resources':
        return <Resources />;
      case 'Chatbot':
        return <Chat />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <StudyFlowProvider>
      <div className="flex h-screen bg-slate-100">
        <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto hide-scrollbar">
          {renderPage()}
        </main>
      </div>
    </StudyFlowProvider>
  );
}
