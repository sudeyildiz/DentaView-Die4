import React, { useState, useEffect } from 'react';

const Beitrag1 = () => {
    const [content, setContent] = useState(null);

    useEffect(() => {
        // Lade die JSON-Datei
        fetch('/json/Beitrag2.json')
            .then(response => response.json())
            .then(data => setContent(data))
            .catch(error => console.error('Fehler beim Laden der JSON-Datei:', error));
    }, []);

    // Warte darauf, dass die Daten geladen sind
    if (!content) {
        return <div>Lade Inhalte...</div>;
    }

    return (
        <div>
            <h1>{content.title}</h1>
            <p>{content.description}</p>
            {content.sections.map((section, index) => (
                <div key={index}>
                    <h2>{section.title}</h2>
                    {section.content && <p>{section.content}</p>}
                    {section.items && (
                        <div>
                            {section.items.map((item, idx) => (
                                <p key={idx}>{item}</p>
                            ))}
                        </div>
                    )}
                    {section.subsections &&
                        section.subsections.map((subsection, subIndex) => (
                            <div key={subIndex}>
                                <h3>{subsection.subtitle}</h3>
                                {Array.isArray(subsection.content) ? (
                                    <div>
                                        {subsection.content.map((contentItem, contentIndex) => (
                                            <p key={contentIndex}>{contentItem}</p>
                                        ))}
                                    </div>
                                ) : (
                                    <p>{subsection.content}</p>
                                )}
                            </div>
                        ))}
                </div>
            ))}
        </div>
    );
};

export default Beitrag1;
