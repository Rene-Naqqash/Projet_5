/** @format */

import React from 'react';
import '../styles/notFound.scss'

function NotFound() {
  return (
    <div className='notFoundPage'>
      <h1 className='notFound-h1'>404</h1>
      <p className='notFound-p'>Oups! La page que vous demandez n'existe pas.</p>
      <a href="/"><div>Retourner sur la page d'accueil</div></a>
    </div>
  );
}

export default NotFound;
