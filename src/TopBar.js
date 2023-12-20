import React from 'react';
import './TopBar.css';

const TopBar = () => {
  return (
    <nav className="nav">
      <div src="./name-logo.png" alt="Logo" className="logo"></div> 
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default TopBar;
