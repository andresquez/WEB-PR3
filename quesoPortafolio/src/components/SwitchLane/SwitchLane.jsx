import React from 'react';
import PropTypes from 'prop-types';
import styles from './SwitchLane.module.css';

function SwitchLane({ direction }) {
  const switchLaneClass = direction ? styles.switchlaneRL : styles.switchlaneLR;

  return (
    <div className={styles.track}>
      <img src="./changelane.png" alt="arrow" className={switchLaneClass} />
    </div>
  );
}

SwitchLane.propTypes = {
  direction: PropTypes.bool.isRequired,
};

export default SwitchLane;
