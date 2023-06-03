import React from 'react';
import PropTypes from 'prop-types';
import styles from './RaceTrack.module.css';

function RaceTrack({
  title, alignRight, image, link,
}) {
  const messageClass = alignRight ? styles.messageRight : styles.message;

  return (
    <div className={styles.track}>
      <div className={messageClass}>
        <div className={styles.title}>
          {title && (
            <div dangerouslySetInnerHTML={{ __html: title }} />
          )}
          {image && link !== '' && (
            <a href={link} target="_blank" rel="noopener noreferrer">
              <img src={image} alt="Pic" className={styles.pic} />
            </a>
          )}
          {image && link === '' && (
            <img src={image} alt="Pic" className={styles.pic} />
          )}
        </div>
      </div>
    </div>
  );
}

RaceTrack.defaultProps = {
  title: '',
  alignRight: false,
  image: null,
  link: '',
};

RaceTrack.propTypes = {
  title: PropTypes.string,
  alignRight: PropTypes.bool,
  image: PropTypes.string,
  link: PropTypes.string,
};

export default RaceTrack;
