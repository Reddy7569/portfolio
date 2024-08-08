import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const MobileNav = () => (
  <div className="header-nav">
    <nav className="nav-items-container">
      <ul className="nav-list-items">
        <li className="link-item">
          <Link className="route-link" to="portfolio/">
            AboutMe
          </Link>
        </li>
        <li className="link-item">
          <Link className="route-link" to="portfolio/resume">
            Resume
          </Link>
        </li>
        <li className="link-item">
          <Link className="route-link" to="portfolio/projects">
            Projects
          </Link>
        </li>
        <li className="link-item">
          <Link className="route-link" to="portfolio/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default MobileNav;