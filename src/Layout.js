import React, { useState } from 'react';
import './styles.css'; // Globale CSS-Datei importieren
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

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
            <main>{children}</main>
            <footer>
                <p>&copy; 2024 DentaView. Alle Rechte vorbehalten.</p>
            </footer>
        </div>
    );
};

export default Layout;
