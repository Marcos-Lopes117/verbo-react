import React from 'react';
import './Services.css';

const ServiceCard = ({ day, title, time, description, imageSrc, altText }) => {
return (
<div className="service-card">
<img src={imageSrc} alt={altText} className="service-image" />
<h3 className="card-day">{day}</h3>
<p className="card-title">{title}</p>
<p className="card-time">{time}</p>
<p className="card-description">{description}</p>
</div>
);
};

export default ServiceCard;