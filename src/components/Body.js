import React from 'react';
import './Body.css';
import ImageCarousel from './ImageCarousel';
import Services from './Services';
import Missions from './Missions';

function Body() {
  return (
    <div className="body-content">
      {/* Aqui é onde a margem superior é aplicada */}
      <div className="guest-card">
        <h2 className="card-title">Você é Nosso Convidado Especial!</h2>
        <p className="card-text">
          "Venham a mim, todos os que estão cansados e sobrecarregados, e eu lhes darei descanso." (Mateus 11:28)
        </p>
        <p className="card-text">
          Você está procurando um lugar para encontrar paz, esperança e um propósito maior? Deseja se conectar com uma comunidade que se importa e cresce na fé juntos?
        </p>
        <p className="card-text">
          Nós, do VERBO SEPETIBA, acreditamos que a igreja é um porto seguro, um lugar de acolhimento e aprendizado. Inspirados pelas palavras de Jesus, abrimos nossas portas e nossos corações para todos que buscam descanso para a alma e aprofundamento em sua jornada espiritual.
        </p>
        <p className="card-text">
          Seja você alguém que já conhece a Bíblia ou que nunca pisou em uma igreja, não importa. Você é bem-vindo aqui! Venha experimentar um ambiente de amor, onde a Palavra de Deus é ensinada de forma relevante para os desafios da vida moderna e onde você pode encontrar apoio e amizades verdadeiras.
        </p>
        <p className="card-text">
          Junte-se a nós em nossos cultos e eventos. Venha como você está e descubra a alegria de pertencer a uma família de fé.
        </p>
        <p className="card-text">
          Estamos ansiosos para recebê-lo!
        </p>
      </div>

      <ImageCarousel />
      <Services />
      <Missions />

    </div>
  );
}

export default Body;