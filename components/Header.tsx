import React from 'react';
import { Cross, Activity } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-blue-100 px-6 py-4 flex items-center gap-3 sticky top-0 z-10 shadow-sm">
      <div className="bg-blue-600 p-2 rounded-lg">
        <Cross className="w-6 h-6 text-white" />
      </div>
      <div>
        <h1 className="text-xl font-bold text-slate-800 tracking-tight">City General Hospital</h1>
        <div className="flex items-center gap-1.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <p className="text-xs font-medium text-slate-500">Reception Desk • Online</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
