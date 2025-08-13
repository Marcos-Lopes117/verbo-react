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
    { src: imagem1, caption: 'Nosso ministério pastoral cuida e guia vidas em Cristo.' },
    { src: imagem2, caption: 'Despertando jovens para um propósito em Deus.' },
    { src: imagem3, caption: 'Louvor e Adoração: exaltando a Deus com todo o coração.' },
    { src: imagem4, caption: 'Departamento Infantil: semeando a fé nos corações das crianças.' },
    { src: imagem5, caption: 'Seja bem-vindo! Aqui você é amado e fazemos juntos a caminhada com Cristo.' },
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