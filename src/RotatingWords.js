import React, { useState, useEffect } from 'react';
import './RotatingWords.css';

const RotatingWords = ({ words }) => {
  const [currentIndex, setCurrentIndex] = useState(0);


  return (
    <div className="outer-headings">
    <h1>
    Welcome to <br/> 
    my digital
    <div className="inner-headings">
      <span>
        playground :) <br/> 
        oasis :) <br/>
        studio :) <br/>
      </span>
    </div>
    </h1>
    </div>

  );
};

export default RotatingWords;