import React, { useState, useEffect } from 'react';

const Impressum = () => {
    const [content, setContent] = useState(null);

    useEffect(() => {
        fetch('/json/Impressum.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Netzwerkantwort war nicht ok');
                }
                return response.json();
            })
            .then(data => setContent(data))
            .catch(error => {
                console.error('Fehler beim Laden der JSON-Datei:', error);
            });
    }, []);

    if (!content) {
        return <div>Lade Inhalte...</div>;
    }

    return (
        <div>
            <h1>{content.projektteam}</h1>
            <p>{content.address}</p>
            <h2>{content.kontaktTitle}</h2>
            {content.contacts && content.contacts.map((contact, index) => (
                <p key={index}>{contact.email}</p>
            ))}
            <h2>{content.dsgvoTitle}</h2>
            <p>{content.dsgvoText}</p>
            {content.links && content.links.map((link, index) => (
                <div key={index}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                        {link.text}
                    </a>
                </div>
            ))}
        </div>
    );
};

export default Impressum;
