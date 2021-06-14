import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Particle from './components/Particle';
import Home from './views/HomePage';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import './App.css';

function App() {
  const [isOpen, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="App">
      <Particle />
      <Router>
        <Sidebar isOpen={isOpen} toggle={handleToggle} />
        <Navbar toggle={handleToggle} />
        <Home />
      </Router>
    </div>
  );
}

export default App;
