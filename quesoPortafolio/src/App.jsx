import React from 'react';
import styles from './App.css';
import RaceTrack from './components/RaceTrack/RaceTrack';
import Car from './components/Car/Car';
import Start from './components/Start/Start';
import EmptyRaceTrack from './components/EmptyRaceTrack/EmptyRaceTrack';
import SwitchLane from './components/SwitchLane/SwitchLane';
import FinishLine from './components/FinishLine/FinishLine';
import skills from '../public/skills2.png';
import project1 from '../public/project1.png';

function App() {
  return (
    <div className={styles.container}>
      <Start />
      <Car />
      <EmptyRaceTrack />
      <RaceTrack
        title={'Hello! My name is Andres Quezada. I\'m a passionate Computer Science student. Welcome to my race track, where I will show you my skills, projects, and experiences in the world of technology.'}
      />
      <SwitchLane direction />
      <RaceTrack title="Here are some of my skills" image={skills} alignRight />
      <SwitchLane />
      <RaceTrack title="I've worked on these projects:" image={project1} />
      <SwitchLane direction />
      <RaceTrack title="Education Education Education Education Education Education Education Education Education Education Education Education Education Education Education Education Education Education Education Education " alignRight />
      <SwitchLane />
      <RaceTrack title="Achievements Achievements Achievements Achievements Achievements Achievements Achievements Achievements Achievements Achievements Achievements Achievements Achievements Achievements Achievements Achievements Achievements Achievements " />
      <SwitchLane direction />
      <RaceTrack title="Contact info Contact info Contact info Contact info Contact info Contact info Contact info Contact info Contact info Contact info Contact info Contact info Contact info Contact info Contact info Contact info Contact info Contact info Contact info Contact info " alignRight />
      <FinishLine />
    </div>
  );
}

export default App;
