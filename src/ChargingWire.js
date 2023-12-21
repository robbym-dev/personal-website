import React, { useState, useEffect } from 'react';
import './ChargingWire.css';

const ChargingWire = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setAnimate(true);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <svg className={`charging-wire ${animate ? 'start-animation' : ''}`} viewBox="0 0 100 200">
      <path 
        d="M75,100 Q60,100 50,150" // Single path: Adjust this path to match your design
        fill="none"
        stroke="yellow"
        strokeWidth="3.5"
      />
    </svg>
  );
};

export default ChargingWire;
