import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Dashboard from './components/Dashboard';  // Assuming Dashboard contains PeopleList and RoleContainer
import './App.css';

const App = () => {
  return (
    <DndProvider backend={HTML5Backend}> {/* Wrap the entire app in DndProvider */}
      <div className="app">
        <Dashboard />
      </div>
    </DndProvider>
  );
};

export default App;
