import React, { useState } from 'react';
import './ImageCarousel.css';
import imagem1 from '../assets/car01.jpeg'; 
import imagem2 from '../assets/car02.jpg';
import imagem3 from '../assets/car03.jpeg';
import imagem4 from '../assets/car04.jpeg';
import imagem5 from '../assets/car05.jpeg';
import imagem6 from '../assets/car06.jpeg';

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: imagem1, caption: 'Líder do ministério pastoral - Thiago Pires - Guia espiritual, cuida e supervisiona nossa igreja. ' },
    { src: imagem2, caption: 'Teen Impacto - Missão de formar uma geração firmada na Palavra!' },
    { src: imagem3, caption: 'Louvor e Adoração - Conduzir a igreja a expressar, de forma coletiva e intensa, amor, gratidão e reverência a Deus por meio da música.' },
    { src: imagem4, caption: 'Departamento infantil - As crianças também estão sendo edificadas e aprendendo princípios da fé.' },
    { src: imagem5, caption: 'Nossa família de fé está de braços abertos para te receber. Você é importante para Deus e para nós.' },
    { src: imagem6, caption: 'Ação social - Servindo com amor, cuidando de vidas, transformando histórias.' },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="image-carousel-container">
      <img
        src={images[currentIndex].src}
        alt={images[currentIndex].caption}
        className="carousel-image"
      />
      <div className="carousel-caption">
        <p>{images[currentIndex].caption}</p>
      </div>
      <button onClick={handlePrev} className="carousel-button prev">{"<"}</button>
      <button onClick={handleNext} className="carousel-button next">{">"}</button>
    </div>
  );
};

export default ImageCarousel;