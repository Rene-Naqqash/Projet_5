import React, { useState } from 'react';
import '../styles/collapse.scss';

function Collapse({ description, equipements, text, title }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={toggleCollapse}>
        <h3>{title}</h3>
        <span className={`collapse-arrow ${isOpen ? 'open' : ''}`}>▼</span>
      </div>
      <div className={`collapse-content ${isOpen ? 'open' : ''}`}>
        {description && <p>{description}</p>}
        {equipements && (
          <ul>
            {equipements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
        {text && <p>{text}</p>}
      </div>
    </div>
  );
}

export default Collapse;
