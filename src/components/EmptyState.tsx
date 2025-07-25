import React from 'react';
import { CheckCircle, Circle, ListTodo } from 'lucide-react';
import { FilterType } from '../types';

interface EmptyStateProps {
  filter: FilterType;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ filter }) => {
  const getEmptyStateContent = () => {
    switch (filter) {
      case 'active':
        return {
          icon: <CheckCircle className="w-16 h-16 text-green-400" />,
          title: 'All done! 🎉',
          subtitle: 'No active tasks remaining.',
        };
      case 'completed':
        return {
          icon: <Circle className="w-16 h-16 text-gray-400" />,
          title: 'No completed tasks',
          subtitle: 'Complete some tasks to see them here.',
        };
      default:
        return {
          icon: <ListTodo className="w-16 h-16 text-gray-400" />,
          title: 'No todos yet',
          subtitle: 'Add your first task to get started!',
        };
    }
  };

  const { icon, title, subtitle } = getEmptyStateContent();

  return (
    <div className="flex flex-col items-center justify-center py-16 text-center animate-fade-in">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-700 mb-2">{title}</h3>
      <p className="text-gray-500 max-w-md">{subtitle}</p>
    </div>
  );
};