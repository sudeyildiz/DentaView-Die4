import React from 'react';
import './styles.css'; // Globale CSS-Datei importieren
import { Link } from 'react-router-dom';
import ThreeDModel from './ThreeDModel';

const Layout = ({ children }) => {
    return (
        <div>
            <header>
                <img src="/DentaView-LOGO.png" alt="DentaView Logo" className="logo" />
                <h1>DentaView</h1>
                <nav>
                    <ul>
                        <li><Link to="/">Startseite</Link></li>
                        <li><Link to="/Beitrag1">Zahnanatomie</Link></li>
                        <li><Link to="/Beitrag2">Tipps</Link></li>
                        <li><Link to="/impressum">Impressum</Link></li>
                        <li><Link to="/model">3D-Modell</Link></li>
                    </ul>
                </nav>
            </header>
            <main>{children}</main>
            <footer>
                <p>&copy; 2024 DentaView. Alle Rechte vorbehalten.</p>
            </footer>
        </div>
    );
};

export default Layout;
