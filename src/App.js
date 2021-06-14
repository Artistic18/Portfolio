import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Particle from './components/Particle';
import Home from './views/HomePage';
import About from './views/AboutPage';
import Project from './views/ProjectPage';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import './App.css';

function App() {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    document.title = "Hrishit's Portfolio";
  });

  const handleToggle = () => {
    setOpen(!isOpen);
  };

  return (
    <Router>
      <Particle />
      <Sidebar isOpen={isOpen} toggle={handleToggle} />
      <Navbar toggle={handleToggle} />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/projects" component={Project} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
