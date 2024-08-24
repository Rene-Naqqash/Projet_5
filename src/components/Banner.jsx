/** @format */

import React, { useState } from 'react';
import '../styles/banner.scss';
import chevronLeft from '../assets/svg/chevron-left-solid.svg'
import chevronRight from '../assets/svg/chevron-right-solid.svg'

function Banner({ image, images = [], text, darken = false }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  console.log(images);

  return (
    <div
      className={`banner ${darken ? 'darken' : ''}`}
      style={{
        backgroundImage: `url(${
          images.length > 0 ? images[currentIndex] : image
        })`,
      }}
    >
      {images.length > 0 && (
        <div className="banner-controls">

          <img src={chevronLeft} alt="" className="banner-control prev" onClick={handlePrevClick}/>
        
          <img src={chevronRight} alt="" className="banner-control next" onClick={handleNextClick}/>
          
        </div>
      )}
      <div className="banner-text">{text}</div>
    </div>
  );
}

export default Banner;
