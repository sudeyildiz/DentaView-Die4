import React, { useEffect, useState } from 'react';

const Impressum = () => {
    const [content, setContent] = useState({
        title: "Lade Titel...",
        description: "Lade Beschreibung...",
        address: "",
        contact: {
            phone: "",
            email: ""
        },
        responsible: ""
    });

    useEffect(() => {
        fetch('/content.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error("Fehler beim Laden der Inhalte");
                }
                return response.json();
            })
            .then(data => setContent(data.impressum))
            .catch(error => console.error("Fehler:", error));
    }, []);

    return (
        <div>
            <h2>{content.title}</h2>
            <p>{content.description}</p>
            <p><strong>Adresse:</strong> {content.address}</p>
            <p><strong>Kontakt:</strong> {content.contact.phone}, <a href={`mailto:${content.contact.email}`}>{content.contact.email}</a></p>
            <p><strong>Verantwortlich:</strong> {content.responsible}</p>
        </div>
    );
};

export default Impressum;
