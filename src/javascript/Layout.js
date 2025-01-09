import React, { useState } from 'react';
import '../design/styles.css'; // Globale CSS-Datei importieren
import { Link, useLocation } from 'react-router-dom';
import ThreeDModel from './ThreeDModel'; // Importiere die 3D-Modell-Komponente

const Layout = ({ children }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const location = useLocation(); // Aktuellen Pfad abfragen

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div>
            <header>
                <div className="header-container">
                    <img src="/logo3.png" alt="DentaView Logo" className="logo" />
                    <h1>DentaView</h1>
                    <div className="menu">
                        <button
                            className="dropdown-button"
                            onClick={toggleDropdown}
                        >
                            Menü
                        </button>
                        {dropdownOpen && (
                            <ul className="dropdown-menu">
                                <li><Link to="/">Startseite</Link></li>
                                <li><Link to="/Beitrag1">Zahnanatomie</Link></li>
                                <li><Link to="/Beitrag2">Tipps</Link></li>
                                <li><Link to="/model">3D-Modell</Link></li>
                                <li><Link to="/Quiz">Zahn-Quiz</Link></li>
                                <li><Link to="/impressum">Impressum</Link></li>
                            </ul>
                        )}
                    </div>
                </div>
            </header>

            {/* Zeige das 3D-Modell nur auf der Seite mit dem Pfad '/model' */}
            {location.pathname === '/model' && (
                <div id="three-d-container">
                    <ThreeDModel />
                </div>
            )}

            <main>{children}</main>

            <footer>
                <p>&copy; 2024 DentaView. Alle Rechte vorbehalten.</p>
            </footer>
        </div>
    );
};

export default Layout;
