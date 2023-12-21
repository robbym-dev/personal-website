import React from 'react';
import './Atom.css';

const Atom = () => {
  return (
    <div className="atom">
      <div className="nucleus"></div>
      <div className="orbit">
        <div className="electron"></div>
      </div>
      {/* You can add more orbits and electrons as needed */}
    </div>
  );
};

export default Atom;