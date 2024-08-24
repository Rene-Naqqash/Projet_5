import React, { useState } from 'react';
import '../styles/collapse.scss';
import downArrow from '../assets/svg/angle-down-solid.svg';

function Collapse({ text, title, equipements = [], logementCollapse = false}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse ${logementCollapse ? 'logementCollapse' : ''}`}>
      <div className="collapse-header" onClick={toggleCollapse}>
        <h3>{title}</h3>
        <span className={`collapse-arrow ${isOpen ? 'open' : ''}`}>
          
          <img src={downArrow} alt="Toggle collapse" />

        </span>
      </div>
      <div className={`collapse-content ${isOpen ? 'open' : ''}`}>
        {text && <p>{text}</p>}
        {equipements && (
          <ul>
            {equipements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Collapse;
