import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo-kasa.png';
import '../styles/navbar.scss';

function Navbar() {
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo Kasa" />
            <ul>
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>
                    <Link to="/about">À propos</Link> {/* Lien vers la page À propos */}
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;