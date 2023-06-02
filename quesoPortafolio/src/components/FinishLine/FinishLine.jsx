import React from 'react';
import styles from './FinishLine.module.css';
import fireworks from '../../../public/fireworks.gif';

function FinishLine() {
  const fireworkClasses = Array.from({ length: 14 }, (_, index) => `fireworks${index + 1}`);

  return (
    <div className={styles.track}>
      {fireworkClasses.map((fireworkClass, index) => {
        const uniqueKey = `firework-${index}`;
        return (
          <img
            key={uniqueKey}
            src={fireworks}
            alt="fireworks"
            className={`${styles[fireworkClass]} ${styles.fireworks}`}
          />
        );
      })}
      <div className={styles.message}>
        <div className={styles.title}>
          Hello!
          <br />
          Go to your start position
        </div>
      </div>
    </div>
  );
}

export default FinishLine;
