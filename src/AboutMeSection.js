import React, { useState, useEffect } from 'react';
import './RotatingWords.css';
import './AboutMeSection.css';

const RotatingWords = () => {
  const [showArrow, setShowArrow] = useState(true);
  const [showAboutMe, setShowAboutMe] = useState(false);
  const [fadeInfo, setFadeInfo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowArrow(scrollY <= 20);
      setShowAboutMe(scrollY > 300);
      if (scrollY > 500) { 
        setFadeInfo(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="outer-headings">
      {/* Existing code */}
      {showAboutMe && (
        <div className="about-me-container">
          <div className="typing-container">
            <h1 className="typing-effect">A little bit about me</h1>
          </div>
          <div className={`info-container ${fadeInfo ? 'fade-in' : ''}`}>
            <p>
              Hey! I'm Robby, an undergraduate at Stanford studying Computer Science and Electrical Engineering. <br/>
              
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RotatingWords;
