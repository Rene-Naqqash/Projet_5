/** @format */

import React from 'react';
import { useParams } from 'react-router-dom';
import logement from '../assets/logements.json';
import Banner from '../components/Banner';
import { Navigate } from 'react-router-dom';
import '../styles/logement.scss';
import Collapse from '../components/Collapse';

function Logement() {
  const { id } = useParams(); // récupère l'ID de l'URL

  // chercher le logement correspondant à l'ID
  const logementFilter = logement.find((logement) => logement.id === id);
  console.log(logementFilter);

  // Si aucun logement n'est trouvé
  if (!logementFilter) {
    return <Navigate to="/error" replace={true} />;
  }

  return (
    <div className="logement">
      <Banner images={logementFilter.pictures} />
      <h1>{logementFilter.title}</h1>
      
      <div className='info-collapse-container'>
        <Collapse title="Description" text={logementFilter.description} logementCollapse = {true}/>
        <Collapse title="Equipement" equipements={logementFilter.equipments} logementCollapse = {true}/>
      </div>
    </div>
  );
}

export default Logement;
