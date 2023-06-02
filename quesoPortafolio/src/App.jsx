import React from 'react';
import styles from './App.css';
import RaceTrack from './components/RaceTrack/RaceTrack';
import Car from './components/Car/Car';
import Start from './components/Start/Start';
import EmptyRaceTrack from './components/EmptyRaceTrack/EmptyRaceTrack';
import SwitchLane from './components/SwitchLane/SwitchLane';
import FinishLine from './components/FinishLine/FinishLine';

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
      <RaceTrack title=" Skills SkillsSkillsSkills SkillsSkillsSkil lsSkillsSkill sSkills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills Skills" alignRight />
      <SwitchLane />
      <RaceTrack title="Projects Projects Projects Projects Projects Projects Projects Projects Projects Projects Projects Projects Projects Projects Projects Projects Projects Projects Projects Projects Projects" />
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
