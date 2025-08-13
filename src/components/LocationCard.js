import React from 'react';
import './LocationCard.css';

const LocationCard = () => {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.5014828994686!2d-43.6987405!3d-22.9685797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bf100602dbb25%3A0x58b529f5c9b004e2!2sIgreja%20Verbo%20da%20Vida%20-%20Sepetiba!5e0!3m2!1spt-BR!2sbr!4v1755101297590!5m2!1spt-BR!2sbr";
  
  const address = "Avenida cristina, 8 - Sepetiba, RJ";
  const reference = "Próximo a padaria do triunfo";

  return (
    <div className="location-card">
      <h3 className="location-title">Verbo da vida - Sepetiba</h3>
      <div className="map-container">
        <iframe
          src={mapUrl}
          allowfullscreen=""
          loading="lazy"
          title="Localização da Igreja"
          referrerpolicy="no-referrer-when-downgrade"
          className="location-map"
        ></iframe>
      </div>
      <div className="location-info">
        <p className="location-address">Endereço: {address}</p>
        <p className="location-reference">Ponto de Referência: {reference}</p>
        <a 
          href={`https://www.google.com/maps/place/${address}`} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="location-button"
        >
          Ver no Google Maps
        </a>
      </div>
    </div>
  );
};

export default LocationCard;