import React from 'react';
import './App.css';
import RaceTrack from './components/RaceTrack/RaceTrack';
import Car from './components/Car/Car';

function App() {
  return (
    <div className="container">
      <RaceTrack />
      <Car />
      <RaceTrack />
      <RaceTrack />
      <RaceTrack />
    </div>

  );
}

export default App;
