import React from 'react';
import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import { Ticket } from './features/ticket/Ticket';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Ticket />
	  </header>
    </div>
  );
}

export default App;
