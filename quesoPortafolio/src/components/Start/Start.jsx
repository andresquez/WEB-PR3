import React, { useEffect } from 'react';
import styles from './Start.module.css';

function Start() {
  useEffect(() => {
    window.addEventListener('load', () => {
      window.scrollTo(0, 200);
    });
  }, []);

  return (
    <div className={styles.track}>
      <div className={styles.message}>
        <div className={styles.title}>
          Hello!
          <br />
          Go to your start position
        </div>
      </div>
      <img src="./arrow.png" alt="arrow" className={styles.arrow} />
      <div className={styles.message}>
        <div className={styles.title}>
          ↑ ↓ to move
          <br />
          ← → to switch lanes
        </div>
      </div>
      <div className={styles.semaphore}>
        <div className={styles.light_red} />
        <div className={styles.light_yellow} />
        <div className={styles.light_green} />
      </div>
      <div className={styles.message}>
        <div className={styles.title}>
          Ready?
          <br />
          Go at Green!
        </div>
      </div>
    </div>
  );
}

export default Start;
