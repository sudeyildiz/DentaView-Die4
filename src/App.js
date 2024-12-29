import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Impressum from './Impressum';
import Beitrag1 from './Beitrag1';
import Beitrag2 from './Beitrag2';
import ThreeDModel from './ThreeDModel';

const App = () => {
    return (
        <Router>
            <div className="App">
                <header className="header">
                    <img src="/DentaView-LOGO.png" className="logo" alt="DentaView Logo"/>
                    <h1>DentaView</h1>
                    <nav>
                        <ul className="nav-links">
                            <li><Link to="/">Startseite</Link></li>
                            <li><Link to="/impressum">Impressum</Link></li>
                            <li><Link to="/beitrag1">Zahnanatomie leicht gemacht</Link></li>
                            <li><Link to="/beitrag2">5 Tipps zur gesunden Zahnpflege</Link></li>
                            <li><Link to="/model">3D-Modell</Link></li>
                        </ul>
                    </nav>
                </header>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/impressum" element={<Impressum />} />
                    <Route path="/beitrag1" element={<Beitrag1 />} />
                    <Route path="/beitrag2" element={<Beitrag2 />} />
                    <Route path="/model" element={<ThreeDModel />} />
                </Routes>
                <footer className="footer">
                    <p>&copy; 2024 DentaView. Alle Rechte vorbehalten.</p>
                </footer>
            </div>
        </Router>
    );
};

export default App;