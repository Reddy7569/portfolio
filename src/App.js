import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import MobileNav from './components/MobileNav';
import './App.css';

const App = () => {
  return (
    <div className="App">
        <Home />
        <div className="container">
          <Header />
          <Routes>
            <Route exact path="/" element={<About />} />
            <Route exact path="/resume" element={<Resume />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <MobileNav/>
    </div>
  );
}

export default App;


