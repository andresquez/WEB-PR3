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
      <RaceTrack title="Here are some of my skills" image="./skills2.png" alignRight />
      <SwitchLane />
      <RaceTrack title="Now, let's see some of my projects: (click the images)" />
      <RaceTrack image="./healthhub.svg" link="https://www.youtube.com/watch?v=R3h87I-mjqo" />
      <SwitchLane direction />
      <RaceTrack image="./pogoyorkie.png" link="https://www.youtube.com/watch?v=n_nq23H-VBE" alignRight />
      <SwitchLane />
      <RaceTrack image="./condoadmin.png" link="https://youtu.be/PcuAKg5ObKg" />
      <SwitchLane direction />
      <RaceTrack image="./PETinder.png" link="https://www.figma.com/proto/abmhIlzXFiqhWT95YLos8l/PETinder?page-id=34%3A0&type=design&node-id=461-847&viewport=1413%2C446%2C0.34&scaling=scale-down&starting-point-node-id=461%3A847" alignRight />
      <SwitchLane />
      <RaceTrack image="./Payminds.png" link="https://www.figma.com/proto/C4XeYZxR4150sUcZ90U6Cl/WhatsApp-Pay%26Remind-Features?page-id=0%3A8102&type=design&node-id=130-14&viewport=294%2C619%2C0.12&scaling=scale-down&starting-point-node-id=130%3A14" />
      <SwitchLane direction />
      <RaceTrack title="You can check the rest over at:" image="./github.png" link="https://github.com/andresquez" alignRight />
      <SwitchLane />
      <RaceTrack title="I graduated with honors from:" image="./montessori.png" />
      <SwitchLane direction />
      <RaceTrack title="I'm currently pursuing a Computer Science Engineering degree at:" image="./uvg.png" alignRight />
      <SwitchLane />
      <RaceTrack title="Personal goals:<br/><br/>- Personal Development<br/><br/>- Continuous Learning<br/><br/>- Contribute to Society<br/><br/>- Embrace Creativity<br/><br/>- Strive for greatness" />
      <SwitchLane direction />
      <RaceTrack title="And finally, find out how to contact me:" alignRight />
      <SwitchLane />
      <RaceTrack image="./linkedin.png" link="linkedin.com/in/andres-eduardo-quezada-bendaña-41372b204" />
      <SwitchLane direction />
      <RaceTrack image="./gmail.png" link="mailto:andresequez@gmail.com?subject=Hello&body=I%20wanted%20to%20reach%20out%20to%20you" alignRight />
      <SwitchLane />
      <RaceTrack image="./whatsapp.png" link="https://wa.me/50231021287" />
      <FinishLine />
    </div>
  );
}

export default App;
