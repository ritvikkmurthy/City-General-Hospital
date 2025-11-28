import React from 'react';
import { Clock, Phone, Stethoscope, MapPin } from 'lucide-react';

interface QuickActionsProps {
  onActionClick: (query: string) => void;
  disabled: boolean;
}

const QuickActions: React.FC<QuickActionsProps> = ({ onActionClick, disabled }) => {
  const actions = [
    { label: 'Visiting Hours', query: 'What are the detailed visiting hours and policies?', icon: <Clock size={14} /> },
    { label: 'Emergency Numbers', query: 'What are the emergency numbers?', icon: <Phone size={14} /> },
    { label: 'Find a Doctor', query: 'List all departments and their available doctors.', icon: <Stethoscope size={14} /> },
    { label: 'Departments', query: 'What departments are available and where are they located?', icon: <MapPin size={14} /> },
  ];

  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {actions.map((action, index) => (
        <button
          key={index}
          onClick={() => onActionClick(action.query)}
          disabled={disabled}
          className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-100 active:bg-blue-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed border border-blue-200"
        >
          {action.icon}
          {action.label}
        </button>
      ))}
    </div>
  );
};

export default QuickActions;