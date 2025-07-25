import React from 'react';
import { useTodos } from './hooks/useTodos';
import { TodoInput } from './components/TodoInput';
import { TodoItem } from './components/TodoItem';
import { TodoFilters } from './components/TodoFilters';
import { EmptyState } from './components/EmptyState';

function App() {
  const {
    todos,
    stats,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    clearCompleted,
  } = useTodos();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Todo App
          </h1>
          <p className="text-gray-600">
            Stay organized and get things done
          </p>
        </div>

        {/* Todo Input */}
        <TodoInput onAddTodo={addTodo} />

        {/* Filters */}
        {stats.total > 0 && (
          <div className="mb-6">
            <TodoFilters
              filter={filter}
              onFilterChange={setFilter}
              stats={stats}
              onClearCompleted={clearCompleted}
            />
          </div>
        )}

        {/* Todo List */}
        <div className="space-y-3">
          {todos.length === 0 ? (
            <EmptyState filter={filter} />
          ) : (
            todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
                onEdit={editTodo}
              />
            ))
          )}
        </div>

        {/* Footer */}
        {stats.total > 0 && (
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>
              {stats.active} item{stats.active !== 1 ? 's' : ''} left
              {stats.completed > 0 && (
                <> • {stats.completed} completed</>
              )}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;