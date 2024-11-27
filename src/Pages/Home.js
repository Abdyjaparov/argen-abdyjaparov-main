import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faJs, faHtml5, faCss3Alt, faReact } from '@fortawesome/free-brands-svg-icons';
import '../Style/Home.css';

const Home = () => {
  const images = [
    '/Images/example.png',
    '/Images/myphoto.png',
    '/Images/myphoto2.png',
    '/Images/myphoto3.png',
    '/Images/myphoto4.png',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Меняем изображение каждые 3 секунды
    return () => clearInterval(interval); // Очистка интервала
  }, [images.length]);

  // Определение классов для изображений в зависимости от их позиции
  const getSlideClass = (index) => {
    if (index === currentIndex) return 'slide active';
    if (index === (currentIndex - 1 + images.length) % images.length) return 'slide left';
    if (index === (currentIndex + 1) % images.length) return 'slide right';
    return 'slide hidden';
  };

  return (
    <div className="container about-page">
      <div className="carousel">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index}`}
            className={getSlideClass(index)}
          />
        ))}
      </div>
      <div className="skills">
            <p className="intro">
                My name is <strong>Argen</strong>. I'm 17 years old, and I'm a student at <strong>Salymbekov University</strong>. Athlete and excellent
            </p>
            <p className="intro"> I know and I am studying:</p>
            <div className="skill">
                <a href="https://github.com/Abdyjaparov/CarArgen" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faPython} size="3x" className="icon python" />
                </a>
                <p className="skill-name">Python</p>
            </div>
            <div className="skill">
                <a href="https://www.javascript.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faJs} size="3x" className="icon javascript" />
                </a>
                <p className="skill-name">JavaScript</p>
            </div>
            <div className="skill">
                <a href="https://github.com/Abdyjaparov/vlad-project" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faHtml5} size="3x" className="icon html" />
                </a>
                <p className="skill-name">HTML</p>
            </div>
            <div className="skill">
                <a href="https://github.com/Abdyjaparov/vlad-project" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faCss3Alt} size="3x" className="icon css" />
                </a>
                <p className="skill-name">CSS</p>
            </div>
            <div className="skill">
                <a href="https://reactnative.dev" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faReact} size="3x" className="icon react" />
                </a>
                <p className="skill-name">React Native</p>
            </div>
        </div>
    </div>

  );
};

export default Home;