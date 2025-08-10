import React from 'react';
import './Missions.css';
import missionsImage from '../assets/missoes.jpg'; // Importe sua imagem aqui

const Missions = () => {
return (
<div className="missions-card">
<img src={missionsImage} alt="Foto da Secretaria de Missões" className="missions-image" />
<h2 className="missions-title">Secretaria de Missões</h2>
<p className="missions-scripture">
"Ide por todo o mundo e pregai o evangelho a toda criatura." (Marcos 16:15)
</p>
<p className="missions-text">
A Secretaria de Missões do VERBO SEPETIBA tem o propósito de mobilizar, equipar e enviar pessoas para levar a Palavra de Deus a todos os lugares. Acreditamos no poder transformador do evangelho e em nosso papel de ser as mãos e os pés de Jesus na Terra.
</p>
<p className="missions-text">
Seja através de evangelismo local, apoio a missionários em outras nações ou projetos sociais, nosso objetivo é cumprir o mandamento de Cristo. Junte-se a nós nesta grande comissão! Sua oração, doação e tempo são inestimáveis para o avanço do Reino.
</p>
<p className="missions-text">
Para saber mais sobre nossos projetos e como você pode participar, entre em contato conosco.
</p>
</div>
);
};

export default Missions;