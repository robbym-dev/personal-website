import React, { useState, useEffect } from 'react';
import './TopBar.css';

const TopBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    // Add event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo"></div>
      <ul>
        <li><a href="/">Introduction</a></li>
        <li><a href="/services">Projects</a></li>
        <li><a href="/contact">Experience</a></li>
        <li><a href="/contact" className="lets-talk-btn">Let's Talk</a></li>
      </ul>
    </nav>
  );
};

export default TopBar;
