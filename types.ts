import React from 'react';

export interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface QuickAction {
  label: string;
  query: string;
  icon?: React.ReactNode;
}