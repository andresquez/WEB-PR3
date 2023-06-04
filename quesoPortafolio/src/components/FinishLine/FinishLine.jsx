import React from 'react';
import styles from './FinishLine.module.css';

function FinishLine() {
  const fireworkClasses = Array.from({ length: 14 }, (_, index) => `fireworks${index + 1}`);

  return (
    <div className={styles.track}>
      {fireworkClasses.map((fireworkClass, index) => {
        const uniqueKey = `firework-${index}`;
        return (
          <img
            key={uniqueKey}
            src="./fireworks.gif"
            alt="fireworks"
            className={`${styles[fireworkClass]} ${styles.fireworks}`}
          />
        );
      })}
      <div className={styles.message}>
        <div className={styles.title}>
          You made it!
          <br />
          Thanks for visiting my website! Hope you enjoyed the race!
        </div>
      </div>
    </div>
  );
}

export default FinishLine;
