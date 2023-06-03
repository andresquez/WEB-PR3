import React from 'react';
import PropTypes from 'prop-types';
import styles from './RaceTrack.module.css';

function RaceTrack({ title, alignRight, image }) {
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
          {image && <img src={image} alt="Pic" className={styles.pic} />}
        </div>
      </div>
    </div>
  );
}

RaceTrack.defaultProps = {
  title: '',
  alignRight: false,
  image: null,
};

RaceTrack.propTypes = {
  title: PropTypes.string,
  alignRight: PropTypes.bool,
  image: PropTypes.string,
};

export default RaceTrack;
