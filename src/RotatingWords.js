import React, { useState, useEffect, useRef } from 'react';

import './RotatingWords.css';

const RotatingWords = () => {
  const [showArrow, setShowArrow] = useState(true);
  const [startTyping, setStartTyping] = useState(false);
  const aboutMeRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (aboutMeRef.current) {
        const rect = aboutMeRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setStartTyping(true); // Start typing effect when section is in view
        } else {
          setStartTyping(false); // Optional: Reset animation when out of view
        }
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Landing page info */}
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
      {/* Landing page info */}

      {/* About Me Section */}
      <div className="background-image-container">
        {/* Content that goes on top of the image, if any */}
      </div>
      <div ref={aboutMeRef} className="about-me-section">
        <h2 className={startTyping ? 'typing-effect' : ''}>A little bit about <span className="highlight">me</span></h2>
        <p className="about-me-text">
          {/* Charting a path less traveled, I find myself at the intersection of technology and innovation as a <br /> Computer Science student at Stanford University.
          My academic journey is fueled by a deep fascination <br />  with Brain-Computer Interfaces (BCIs), Natural Language Processing (NLP), and 
          Robotics.
          Particularly, I'm drawn<br />  to the dynamic world of startups, where ideas transform into impactful realities. Beyond the academic sphere, I've  <br /> found a deep interest in music production and dance, specifically Bhangra.
          I'm an enthusiast of culinary adventures,  <br />
          always eager to explore new restaurants. Above all, I cherish the joy of meeting new people and exchanging ideas,  <br /> believing that every encounter is a 
          doorway to a world of knowledge and perspectives. */}
        </p>
        {/* Three Boxes */}
        <div className="boxes-container">
          <div className="box box-1 flip-vertical">
            <div className="box-inner">
              <div className="box-front">
                <h3>Bio</h3>
              </div>
              <div className="box-back">
                <p>Charting a path less traveled, I find myself at the intersection of technology and innovation as a <br /> Computer Science student at Stanford University.
          My academic journey is fueled by a deep fascination with Brain-Computer Interfaces (BCIs), Natural Language Processing (NLP), and 
          Robotics. Particularly, I'm drawn<br />  to the dynamic world of startups, where ideas transform into impactful realities.</p>
              </div>
            </div>
          </div>
          <div className="box box-2 flip-vertical">
            <div className="box-inner">
              <div className="box-front">
                <h3>Skills</h3>
              </div>
              <div className="box-back">
                <p>
                <ul>
                    <li>Python</li>
                    <li>C/C++</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                </ul>
                </p>
              </div>
            </div>
          </div>
          <div className="box box-3 flip-vertical">
            <div className="box-inner">
              <div className="box-front">
                <h3>Interests</h3>
              </div>
              <div className="box-back">
                <p>Content for Box 3</p>
              </div>
            </div>
          </div>
        </div>
        {/* End of Three Boxes */}
      </div>
      {/* About Me Section */}
    </div>
  );
};

export default RotatingWords;
