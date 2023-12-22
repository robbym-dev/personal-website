import React from 'react';
import TopBar from './TopBar'; 
import RotatingWords from './RotatingWords';
import AboutMeSection from './AboutMeSection';
import './Home.css';

const App = () => {

  return (
    <div className="app">
      <TopBar />
      <RotatingWords/>
      <AboutMeSection />
    </div>
  );
};

export default App;