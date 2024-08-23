/** @format */

import React from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';
import bannerImg from '../assets/images/banner-optimized.jpg';
import logement from '../assets/logements.json';

function Home() {
  const bannerText = 'Chez vous, partout et ailleurs';

  return (
    <div>
      <Banner image={bannerImg} text={bannerText} darken={true} />
      <div className='flex-container-cards-div'>
      <div className="card-container">
        {logement.map((card, index) => (
          <Card key={index} id={card.id} img={card.cover} title={card.title} />
        ))}
      </div>
      </div>
    </div>
  );
}

export default Home;
