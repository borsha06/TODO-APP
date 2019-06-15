import React from 'react';

import './App.css';
import Header from './components/header';
import Taskbar from './components/Taskbar';
import Tasklist from './components/Tasklist';

function App() {
  return (
    <div className="App">
      <Header/>
      <Taskbar />
      <Tasklist />
    </div>
  );
}

export default App;
