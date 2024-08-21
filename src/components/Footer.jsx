/** @format */

import React from 'react';
import '../styles/footer.scss';
import kasaLogo from '../assets/images/footer-logo.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <img src={kasaLogo} alt="Logo Kasa" />
          <p>&copy; 2024 Kasa. | All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
