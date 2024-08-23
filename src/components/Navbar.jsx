import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo-kasa.png';
import '../styles/navbar.scss';

function Navbar() {
    return (
        <nav className="navbar">
            <a href="/"><img src={logo} alt="Logo Kasa" /></a>
            <ul>
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>
                    <Link to="/about">À Propos</Link> 
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;