import React from 'react';
import './App.css';
import RaceTrack from './components/RaceTrack/RaceTrack';
import Car from './components/Car/Car';
import Start from './components/Start/Start';

function App() {
  return (
    <div className="container">
      <Start />
      <Car />
      <RaceTrack />
      <RaceTrack />
      <RaceTrack />
    </div>

  );
}

export default App;
