/** @format */

import React from 'react';
import { useParams } from 'react-router-dom';
import logement from '../assets/logements.json';
import Banner from '../components/Banner';
import { Navigate } from 'react-router-dom';
import '../styles/logement.scss';
import Collapse from '../components/Collapse';
import starEmpty from '../assets/svg/star-gray.svg';
import starfilled from '../assets/svg/star-colored.svg';

function Logement() {
  const { id } = useParams(); // récupère l'ID de l'URL

  // chercher le logement correspondant à l'ID
  const logementFilter = logement.find((logement) => logement.id === id);

  // Si aucun logement n'est trouvé
  if (!logementFilter) {
    return <Navigate to="/error" replace={true} />;
  }

  // pour les etoiles du rating
  const Star = ({ filled }) => (
    <img src={filled ? starfilled : starEmpty} alt={filled ? 'Filled star' : 'Empty star'}/>
  );

  const rating = logementFilter.rating;

  //  pour les tags 
  const tags = logementFilter.tags;

  return (
    <div className="logement">
      <Banner images={logementFilter.pictures} />
      <div className='container-logement'>
        <div className='infoLogement'>
          <h1>{logementFilter.title}</h1>
          <p>{logementFilter.location}</p>
          {tags && (<div>
            {tags.map((tagItem, index) => (<span key={index}>{tagItem}</span>))}
          </div>)}
        </div>
        <div className='host-rating-div'>
            <div className='hostInfo'>
              <h3>{logementFilter.host.name}</h3>
              <img src={logementFilter.host.picture} alt="hebergeur de logement" />
            </div>
           
            <div className='ratingInfo'>
                {Array.from({ length: 5 }, (_, index) => (
                    <Star key={index} filled={index < rating} />
                ))}
            </div>
        </div>
      </div>
      
      <div className='info-collapse-container'>
        <Collapse title="Description" text={logementFilter.description} logementCollapse = {true}/>
        <Collapse title="Equipement" equipements={logementFilter.equipments} logementCollapse = {true}/>
      </div>
    </div>
  );
}

export default Logement;
