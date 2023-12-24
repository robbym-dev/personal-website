import React from 'react';
import TopBar from './TopBar'; 
import RotatingWords from './RotatingWords';
import './Home.css';

const App = () => {

  return (
    <div className="app">
      <TopBar />
      <RotatingWords/>
    </div>
  );
};

export default App;