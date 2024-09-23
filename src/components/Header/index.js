import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Header = () => (
  <header className="header">
    <nav className="nav-items-container">
      <ul className="nav-list-items">
        <li className="link-item">
          <Link className="route-link" to="/">
            AboutMe
          </Link>
        </li>
        <li className="link-item">
          <Link className="route-link" to="/resume">
            Resume
          </Link>
        </li>
        <li className="link-item">
          <Link className="route-link" to="/projects">
            Projects
          </Link>
        </li>
        <li className="link-item">
          <Link className="route-link" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
