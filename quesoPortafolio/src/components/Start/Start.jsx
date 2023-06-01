import React, { useEffect } from 'react';
import styles from './Start.module.css';

function Start() {
  useEffect(() => {
    window.addEventListener('load', () => {
      window.scrollTo(0, 200); // Cambia el valor "500" según tus necesidades
    });
  }, []);

  return (
    <div className={styles.track}>
      <div className={styles.message}>
        <div className={styles.title}>
          Hello! Go to your start position
        </div>
        <div className={styles.subtitle}>
          Use the arrow keys to move
        </div>
      </div>
    </div>
  );
}

export default Start;