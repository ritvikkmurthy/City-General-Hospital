import React from 'react';
import Header from './components/Header';
import ChatInterface from './components/ChatInterface';

function App() {
  return (
    <div className="flex flex-col h-[100dvh] overflow-hidden bg-slate-50">
      <Header />
      <main className="flex-1 overflow-hidden relative flex flex-col">
        <ChatInterface />
      </main>
    </div>
  );
}

export default App;