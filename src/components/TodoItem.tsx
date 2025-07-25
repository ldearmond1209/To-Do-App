import React, { useState } from 'react';
import { Check, X, Edit3, Trash2 } from 'lucide-react';
import { Todo } from '../types';
import { clsx } from 'clsx';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newText: string) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onToggle,
  onDelete,
  onEdit,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (editText.trim() !== todo.text) {
      onEdit(todo.id, editText);
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleEdit();
    } else if (e.key === 'Escape') {
      setEditText(todo.text);
      setIsEditing(false);
    }
  };

  return (
    <div className="group animate-fade-in">
      <div
        className={clsx(
          'flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100 transition-all duration-200 hover:shadow-md',
          todo.completed && 'opacity-75'
        )}
      >
        {/* Checkbox */}
        <button
          onClick={() => onToggle(todo.id)}
          className={clsx(
            'flex-shrink-0 w-6 h-6 rounded-full border-2 transition-all duration-200 flex items-center justify-center',
            todo.completed
              ? 'bg-green-500 border-green-500 text-white'
              : 'border-gray-300 hover:border-green-400'
          )}
        >
          {todo.completed && <Check size={16} />}
        </button>

        {/* Todo Text */}
        <div className="flex-1 min-w-0">
          {isEditing ? (
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onBlur={handleEdit}
              onKeyDown={handleKeyDown}
              className="w-full px-2 py-1 bg-gray-50 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              autoFocus
            />
          ) : (
            <span
              className={clsx(
                'block text-left transition-all duration-200 cursor-pointer',
                todo.completed
                  ? 'line-through text-gray-500'
                  : 'text-gray-800 hover:text-gray-600'
              )}
              onClick={() => !todo.completed && setIsEditing(true)}
            >
              {todo.text}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {!todo.completed && !isEditing && (
            <button
              onClick={() => setIsEditing(true)}
              className="p-2 text-gray-400 hover:text-blue-500 transition-colors duration-200 rounded-lg hover:bg-blue-50"
            >
              <Edit3 size={16} />
            </button>
          )}
          <button
            onClick={() => onDelete(todo.id)}
            className="p-2 text-gray-400 hover:text-red-500 transition-colors duration-200 rounded-lg hover:bg-red-50"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};