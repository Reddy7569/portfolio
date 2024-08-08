import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
      <Router>
        <Home />
        <div className="container">
          <Header />
          <Routes>
            <Route exact path="portfolio/" element={<About />} />
            <Route exact path="portfolio/resume" element={<Resume />} />
            <Route exact path="portfolio/projects" element={<Projects />} />
            <Route exact path="portfolio/contact" element={<Contact />} />
          </Routes>
        </div>
        <MobileNav/>
      </Router>
    </div>
  );
}

export default App;

