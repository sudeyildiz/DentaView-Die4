import React from 'react';
import './styles.css'; // Importiere das CSS

const Impressum = () => {
    return (
        <div>
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
                        <a href="https://www.spengergasse.at/?page_id=2029" target="_blank" rel="noopener noreferrer">
                            Datenschutzerklärung der HTL Spengergasse
                        </a>
                        <br />
                        <a href="https://www.spengergasse.at/?page_id=2030" target="_blank" rel="noopener noreferrer">
                            Impressum der HTL Spengergasse
                        </a>
                </ul>
            </main>
        </div>
    );
};

export default Impressum;
