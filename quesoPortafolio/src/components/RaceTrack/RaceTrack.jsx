import React from 'react';
import PropTypes from 'prop-types';
import styles from './RaceTrack.module.css';

function RaceTrack({ title, alignRight }) {
  const messageClass = alignRight ? styles.messageRight : styles.message;

  return (
    <div className={styles.track}>
      <div className={messageClass}>
        <div className={styles.title}>
          {title && (
            <>
              {title}
              <br />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

RaceTrack.defaultProps = {
  title: '',
  alignRight: false,
};

RaceTrack.propTypes = {
  title: PropTypes.string,
  alignRight: PropTypes.bool,
};

export default RaceTrack;
