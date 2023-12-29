import React, { useState, useEffect } from 'react';
import './TopBar.css';

const TopBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);

      if (window.scrollY < 0) {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo"></div>
      
      <div className="hamburger-menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={menuOpen ? 'open' : ''}>
        <div className="menu-close" onClick={() => setMenuOpen(false)}>X</div>
        <li><a href="/">Introduction</a></li>
        <li><a href="/services">Projects</a></li>
        <li><a href="/contact">Experience</a></li>
        <li><a href="/contact" className="lets-talk-btn">Let's Talk</a></li>
      </ul>

      <div className={`red-line ${scrolled ? 'extend' : ''}`}></div>
    </nav>
  );
};

export default TopBar;
