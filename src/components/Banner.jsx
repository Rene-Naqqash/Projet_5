import React, { useState } from 'react';
import '../styles/banner.scss';

function Banner({ image, images = [], text }) {
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

  console.log(images)

  return (
    <div className="banner" style={{ backgroundImage: `url(${images.length > 0 ? images[currentIndex] : image})` }}>
      {images.length > 0 && (
        <div className="banner-controls">
          <button className="banner-control prev" onClick={handlePrevClick}>❮</button>
          <button className="banner-control next" onClick={handleNextClick}>❯</button>
        </div>
      )}
      <div className="banner-text">{text}</div>
    </div>
  );
}

export default Banner;