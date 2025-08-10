import React from 'react';
import ServiceCard from './ServiceCard';
import './Services.css';
import domingoImage from '../assets/CultoDeDomingo.jpg'; // Import your domingo image
import quintaImage from '../assets/CultoDeQuinta.jpg';   // Import your quinta image

const Services = () => {
return (
<div className="services-container">
<ServiceCard
day="DOMINGO"
title="Culto de Celebração"
time="19:00h"
description="Venha adorar conosco e ouvir uma mensagem transformadora da Palavra de Deus."
imageSrc={domingoImage}
altText="Foto do culto de domingo"
/>
<ServiceCard
day="QUINTA-FEIRA"
title="Culto de Ensino"
time="19:30h"
description="Um momento para aprofundar seu conhecimento na Bíblia e crescer na fé."
imageSrc={quintaImage}
altText="Foto do culto de quinta-feira"
/>
</div>
);
};

export default Services;