import React, { useEffect, useState } from 'react';
import styles from './Car.module.css';

function Car() {
  // eslint-disable-next-line no-unused-vars
  const [direction, setDirection] = useState('down');
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    function handleKeyDown(event) {
      const carElement = document.querySelector(`.${styles.car}`);
      const scrollAmount = 30;

      if (event.key === 'ArrowDown') {
        carElement.style.transform = 'translateX(0px) rotate(0deg)';
        setDirection('down');
        window.scrollBy(0, scrollAmount); // Desplazar hacia abajo
      } else if (event.key === 'ArrowLeft') {
        carElement.style.transform = 'translateX(200px) rotate(35deg)';
        setDirection('left');
      } else if (event.key === 'ArrowRight') {
        carElement.style.transform = 'translateX(-200px) rotate(-35deg)';
        setDirection('right');
      } else if (event.key === 'ArrowUp') {
        window.scrollBy(0, -scrollAmount); // Desplazar hacia arriba
        carElement.style.transform = 'translateX(0px) rotate(180deg)';
        setDirection('up');
      }

      setIsMoving(true);
    }

    // eslint-disable-next-line no-unused-vars
    function handleKeyUp(event) {
      setIsMoving(false);
    }

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return <div className={`${styles.car} ${isMoving && styles.active}`} />;
}

export default Car;