import React, { useState, useEffect } from 'react';
import './RotatingWords.css';

const RotatingWords = () => {
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY <= 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="outer-headings">
      <h1>
        Hi, I'm Robby, <br />
        welcome to <br />
        my digital <div className="inner-headings">
          <span>
            playground :) <br />
            studio :) <br />
            oasis :) <br />
          </span>
        </div>
      </h1>
      <div className="image-container"></div>
      <div className={`arrow-wrapper ${showArrow ? '' : 'hide-arrow'}`}>
        <div className="arrow-down"></div>
      </div>
    </div>
  );
};

export default RotatingWords;
