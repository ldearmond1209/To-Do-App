import React from 'react';
import { FilterType } from '../types';
import { clsx } from 'clsx';

interface TodoFiltersProps {
  filter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  stats: {
    total: number;
    active: number;
    completed: number;
  };
  onClearCompleted: () => void;
}

export const TodoFilters: React.FC<TodoFiltersProps> = ({
  filter,
  onFilterChange,
  stats,
  onClearCompleted,
}) => {
  const filters: { key: FilterType; label: string; count?: number }[] = [
    { key: 'all', label: 'All', count: stats.total },
    { key: 'active', label: 'Active', count: stats.active },
    { key: 'completed', label: 'Completed', count: stats.completed },
  ];

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2">
        {filters.map(({ key, label, count }) => (
          <button
            key={key}
            onClick={() => onFilterChange(key)}
            className={clsx(
              'px-4 py-2 rounded-lg font-medium transition-all duration-200 text-sm',
              filter === key
                ? 'bg-blue-100 text-blue-700 shadow-sm'
                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
            )}
          >
            {label}
            {count !== undefined && (
              <span
                className={clsx(
                  'ml-2 px-2 py-0.5 rounded-full text-xs',
                  filter === key
                    ? 'bg-blue-200 text-blue-800'
                    : 'bg-gray-200 text-gray-600'
                )}
              >
                {count}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Clear Completed Button */}
      {stats.completed > 0 && (
        <button
          onClick={onClearCompleted}
          className="px-4 py-2 text-sm font-medium text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors duration-200"
        >
          Clear completed ({stats.completed})
        </button>
      )}
    </div>
  );
};