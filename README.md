# Todo App

A beautiful, modern todo application built with React, TypeScript, and Tailwind CSS. Features a clean interface, local storage persistence, and excellent user experience.

## Features

- ✨ **Beautiful Design**: Modern UI with smooth animations and transitions
- 📱 **Responsive**: Works perfectly on desktop and mobile devices
- 💾 **Local Storage**: Automatically saves your todos locally
- ✏️ **Inline Editing**: Click on any todo to edit it
- 🏷️ **Filtering**: View all, active, or completed todos
- 📊 **Statistics**: See your progress with todo counts
- ⌨️ **Keyboard Shortcuts**: Enter to save, Escape to cancel editing
- 🎯 **Focus Management**: Intuitive focus states and interactions

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Usage

- **Add a todo**: Type in the input field and press Enter or click the plus icon
- **Complete a todo**: Click the circle checkbox next to any todo
- **Edit a todo**: Click on the todo text to edit it inline
- **Delete a todo**: Hover over a todo and click the trash icon
- **Filter todos**: Use the All/Active/Completed buttons to filter your view
- **Clear completed**: Click "Clear completed" to remove all finished todos

## Technology Stack

- **React 18** - User interface library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **Local Storage** - Data persistence

## Project Structure

```
src/
├── components/          # React components
│   ├── TodoInput.tsx   # Input for adding new todos
│   ├── TodoItem.tsx    # Individual todo item
│   ├── TodoFilters.tsx # Filter and stats controls
│   └── EmptyState.tsx  # Empty state display
├── hooks/              # Custom React hooks
│   └── useTodos.ts     # Todo management logic
├── types.ts            # TypeScript type definitions
├── App.tsx             # Main app component
├── main.tsx            # App entry point
└── index.css           # Global styles
```

## License

This project is open source and available under the MIT License.