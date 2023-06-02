import React from 'react';
import styles from './FinishLine.module.css';
import fireworks from '../../../public/fireworks.gif';

function FinishLine() {
  return (
    <div className={styles.track}>
      <img src={fireworks} alt="fireworks" className={styles.fireworks} />
      <img src={fireworks} alt="fireworks" className={styles.fireworks2} />
      <img src={fireworks} alt="fireworks" className={styles.fireworks3} />
      <img src={fireworks} alt="fireworks" className={styles.fireworks4} />
      <img src={fireworks} alt="fireworks" className={styles.fireworks5} />
      <img src={fireworks} alt="fireworks" className={styles.fireworks6} />
      <img src={fireworks} alt="fireworks" className={styles.fireworks7} />
      <img src={fireworks} alt="fireworks" className={styles.fireworks8} />
      <img src={fireworks} alt="fireworks" className={styles.fireworks9} />
      <img src={fireworks} alt="fireworks" className={styles.fireworks10} />
      <img src={fireworks} alt="fireworks" className={styles.fireworks11} />
      <img src={fireworks} alt="fireworks" className={styles.fireworks12} />
      <img src={fireworks} alt="fireworks" className={styles.fireworks13} />
      <img src={fireworks} alt="fireworks" className={styles.fireworks14} />
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
