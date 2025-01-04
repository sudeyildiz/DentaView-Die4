import React from 'react';
import './styles.css'; // Importiere das CSS

const Impressum = () => {
    return (
        <div>
            <header>
                <img src="/logo.svg" alt="DentaView Logo" className="logo" />
                <h1>Impressum</h1>
                <nav>
                    <ul>
                        <li><a href="/">Startseite</a></li>
                        <li><a href="/beitrag1">Zahnanatomie</a></li>
                        <li><a href="/beitrag2">Tipps</a></li>
                        <li><a href="/impressum">Impressum</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                <h2>Projektteam DentaView</h2>
                <p>
                    HTBLuVA Spengergasse<br />
                    1050 Wien, Österreich
                </p>
                <h2>Kontakt</h2>
                <p>
                    <a href="mailto:lea210449@spengergasse.at">lea210449@spengergasse.at</a><br />
                    <a href="mailto:hri210451@spengergasse.at">hri210451@spengergasse.at</a><br />
                    <a href="mailto:yil210453@spengergasse.at">yil210453@spengergasse.at</a><br />
                    <a href="mailto:yil210487@spengergasse.at">yil210487@spengergasse.at</a>
                </p>
                <h2>DSGVO Hinweise</h2>
                <p>Wir halten uns strikt an die Datenschutzgrundverordnung (DSGVO). Weitere Informationen finden Sie in den offiziellen Dokumenten:</p>
                <ul>
                    <li>
                        <a href="https://www.spengergasse.at/?page_id=2029" target="_blank" rel="noopener noreferrer">
                            Datenschutzerklärung der HTL Spengergasse
                        </a>
                    </li>
                    <li>
                        <a href="https://www.spengergasse.at/?page_id=2030" target="_blank" rel="noopener noreferrer">
                            Impressum der HTL Spengergasse
                        </a>
                    </li>
                </ul>
            </main>
            <footer>
                <p>&copy; 2024 DentaView. Alle Rechte vorbehalten.</p>
            </footer>
        </div>
    );
};

export default Impressum;
