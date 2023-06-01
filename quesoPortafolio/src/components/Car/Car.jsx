import React, { useEffect, useState } from 'react';
import styles from './Car.module.css';

function Car() {
  // eslint-disable-next-line no-unused-vars
  const [direction, setDirection] = useState('down');
  const [isMoving, setIsMoving] = useState(false);
  const [currentX, setCurrentX] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [currentY, setCurrentY] = useState(0);

  useEffect(() => {
    function handleKeyDown(event) {
      const carElement = document.querySelector(`.${styles.car}`);
      const scrollAmount = 30;

      if (event.key === 'ArrowDown') {
        carElement.style.transform = `translateX(${currentX}px) translateY(0px) rotate(0deg)`;
        setDirection('down');
        setCurrentY(0);
        window.scrollBy(0, scrollAmount); // Desplazar hacia abajo
      } else if (event.key === 'ArrowLeft') {
        setCurrentX(900);
        carElement.style.transform = `translateX(900px) translateY(0px) rotate(${currentY}deg)`;
        setDirection('left');
      } else if (event.key === 'ArrowRight') {
        setCurrentX(0);
        carElement.style.transform = `translateX(0px) translateY(0px) rotate(${currentY}deg)`;
        setDirection('right');
      } else if (event.key === 'ArrowUp') {
        window.scrollBy(0, -scrollAmount); // Desplazar hacia arriba
        carElement.style.transform = `translateX(${currentX}px) translateY(0px) rotate(180deg)`;
        setDirection('up');
        setCurrentY(180);
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
  }, [currentX, currentY]);

  return <div className={`${styles.car} ${isMoving && styles.active}`} />;
}

export default Car;
