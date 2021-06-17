import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from './actions/Loader';
import Particle from './components/Particle';
import Home from './views/HomePage';
import About from './views/AboutPage';
import Project from './views/ProjectPage';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';
import './App.css';

function App() {
  const [isOpen, setOpen] = useState(false);
  const loading = useSelector((state) => state.loader.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "Hrishit's Portfolio";
    dispatch(setLoading());
  });

  const handleToggle = () => {
    setOpen(!isOpen);
  };

  const handleLoading = () => {
    if (loading) {
      return <Loader />;
    } else {
      return (
        <Router>
          <Particle />
          <Sidebar isOpen={isOpen} toggle={handleToggle} />
          <Navbar toggle={handleToggle} />
          <Footer />
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/projects" component={Project} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      );
    }
  };

  return <div>{handleLoading()}</div>;
}

export default App;
