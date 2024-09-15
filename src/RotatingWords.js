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
          setStartTyping(true);
        } else {
          setStartTyping(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
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
      <div className="background-image-container"></div>
      <div ref={aboutMeRef} className="about-me-section background-text">
        <h2 className={startTyping ? 'typing-effect' : ''}>A little bit about <span className="highlight">me</span></h2>
        <p className="about-me-text">
          {/* Charting a path less traveled, I find myself at the intersection of technology and innovation as a
          Computer Science student at Stanford University. My academic journey is fueled by a deep fascination
          with Brain-Computer Interfaces (BCIs), Natural Language Processing (NLP), and Robotics.
          Particularly, I'm drawn to the dynamic world of startups, where ideas transform into impactful realities.
          Beyond the academic sphere, I've found a deep inter est in music production and dance, specifically Bhangra.
          I'm an enthusiast of culinary adventures, always eager to explore new restaurants.
          Above all, I cherish the joy of meeting new people and exchanging ideas,
          believing that every encounter is a doorway to a world of knowledge and perspectives. */}
        </p>
        {/* Three Boxes */}
        <div className="boxes-container">
          {/* Box 1 */}
          <div className="box box-1 flip-vertical">
            <div className="box-inner">
              <div className="box-front">
                <h3>Bio</h3>
              </div>
              <div className="box-back">
                <p>
                  I am a first-generation student and grew up split between Los Angeles and Denver. I fell in love with 
                  the idea of building at 9-years old when I dismantled by iPad Mini 2 with a flat-head screwdriver, my parents weren't 
                  the happiest. But nowadays I've kept out of trouble and have
                  been busy in ML/NLP research in the Hazy Research Lab co-advised by Christopher Re and Azalia Mirhoseini,
                  and have been collaborating with Matei Zaharia and Christopher Potts in helping develop an Automated RAG Evaluation
                  Framework.
                </p>
              </div>
            </div>
          </div>
          {/* Box 2 */}
          <div className="box box-2 flip-vertical">
  <div className="box-inner">
    <div className="box-front">
      <h3>Skills</h3>
    </div>
    <div className="box-back">
      <div className="skills">
      <div className="skill">
          <div className="skill-name">Python</div>
          <div className="skill-bar">
            <div className="skill-per" per="90%" style={{ maxWidth: "85%" }}></div>
          </div>
        </div>
      <div className="skill">
          <div className="skill-name">C/C++</div>
          <div className="skill-bar">
            <div className="skill-per" per="60%" style={{ maxWidth: "75%" }}></div>
          </div>
        </div>
        <div className="skill">
          <div className="skill-name">Javascript</div>
          <div className="skill-bar">
            <div className="skill-per" per="60%" style={{ maxWidth: "95%" }}></div>
          </div>
        </div>
        <div className="skill">
          <div className="skill-name">SQL</div>
          <div className="skill-bar">
            <div className="skill-per" per="90%" style={{ maxWidth: "85%" }}></div>
          </div>
        </div>
        <div className="skill">
          <div className="skill-name">React</div>
          <div className="skill-bar">
            <div className="skill-per" per="60%" style={{ maxWidth: "80%" }}></div>
          </div>
        </div>
        <div className="skill">
          <div className="skill-name">HTML/CSS</div>
          <div className="skill-bar">
            <div className="skill-per" per="70%" style={{ maxWidth: "95%" }}></div>
          </div>
        </div>
      </div>
      {/* Your existing content */}
    </div>
  </div>
</div>
          {/* Box 3 */}
          <div className="box box-3 flip-vertical">
            <div className="box-inner">
              <div className="box-front">
                <h3>Interests</h3>
              </div>
              <div className="box-back">
                <p> Music's my life - it's always playing, no matter what I'm doing. 
                  In my free time, I'm either tinkering with new tracks in FL 
                  Studio or dancing Bhangra at Stanford's dance studios across campus. 
                  Food's another passion of mine. I love checking out new restaurants and 
                  chatting with the people I meet there. Every meal's a chance to learn something new, you know? </p>
              </div>
            </div>
          </div>
        </div>
        {/* End of Three Boxes */}
      </div>
      {/* What I've been up to */}
      <div className = "space1"></div>
      <div className="about-more">
        <div className="background-image-container2"></div>
        <h4 className={startTyping ? 'typing-effect1' : ''}>What I've been up <span className="highlight">to</span></h4>
        <div className ="music">
          <i class="bi bi-music-note-list my-music-icon"></i>
          <p>Listening to...</p>
        </div>
        <div className = "experiences"></div>
      </div> 
      <div className = "space2"></div>
    </div>
  );
};

export default RotatingWords;
