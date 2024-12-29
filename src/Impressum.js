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
        console.log("Starte Fetch...");
        fetch('/content.json')
            .then(response => {
                console.log("Antwortstatus:", response.status);
                if (!response.ok) {
                    throw new Error("Fehler beim Laden der Inhalte");
                }
                return response.json();
            })
            .then(data => {
                console.log("Geladene Daten:", data);
                setContent(data.impressum);
            })
            .catch(error => console.error("Fehler:", error));
    }, []);



    return (
        <div>
            <h2>{content.title || "Titel nicht verfügbar"}</h2>
            <p>{content.description || "Beschreibung nicht verfügbar"}</p>
            <p><strong>Adresse:</strong> {content.address || "Adresse nicht verfügbar"}</p>
            <p><strong>Kontakt:</strong> {content.contact.phone || "Telefon nicht verfügbar"}, <a href={`mailto:${content.contact.email}`}>{content.contact.email || "E-Mail nicht verfügbar"}</a></p>
            <p><strong>Verantwortlich:</strong> {content.responsible || "Verantwortlicher nicht verfügbar"}</p>
        </div>
    );
};

export default Impressum;
