import React from 'react';
import '../styles/footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>À propos</h3>
          <p>
            Cette application a été développée pour fournir des informations utiles à nos utilisateurs. 
            &copy; 2024 Kasa.com | Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
