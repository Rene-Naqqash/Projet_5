/** @format */

import React from 'react';
import { useParams } from 'react-router-dom';
import logement from '../assets/logements.json';
import Banner from '../components/Banner';
import { Navigate } from 'react-router-dom';
import '../styles/logement.scss';

function Logement() {
  const { id } = useParams(); // Récupère l'ID de l'URL

  // Chercher le logement correspondant à l'ID
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
      <p>{logementFilter.description}</p>
    </div>
  );
}

export default Logement;
