import React, { useState, useEffect } from 'react';
import './RotatingWords.css';

const RotatingWords = ({ words }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="outer-headings">
      <h1>
        Hi, I'm Robby, <br/> 
        welcome to <br/>
        my digital <div className="inner-headings">
          <span>
            playground :) <br/> 
            studio :) <br/>
            oasis :) <br/>
          </span>
        </div>
      </h1>
      <div className="image-container"></div> {/* Image container */}
    </div>
  );
};

export default RotatingWords;
