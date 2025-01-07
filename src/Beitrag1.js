import React from 'react';

const Beitrag1 = () => {
    const content = {
        title: "Zahnanatomie leicht gemacht",
        description: "Lernen Sie alles über die Anatomie der menschlichen Zähne.",
        sections: [
            {
                title: "Einführung",
                content: "Die menschliche Zahnanatomie ist faszinierend und komplex. Unsere Zähne sind weit mehr als nur Kauwerkzeuge – sie spielen eine entscheidende Rolle für die Sprache, das Aussehen und die allgemeine Gesundheit. In diesem Beitrag erfahren Sie alles über die Struktur, Funktion und Pflege unserer Zähne."
            },
            {
                title: "1. Die Grundstruktur eines Zahns",
                subsections: [
                    {
                        subtitle: "1.1 Die Hauptschichten eines Zahns:",
                        content: [
                            "Zahnschmelz (Enamel): Die äußere, sichtbare Schicht des Zahns. Härteste Substanz im menschlichen Körper, schützt den Zahn vor Abnutzung und Säure.",
                            "Dentin: Liegt unter dem Zahnschmelz. Etwas weicher und enthält winzige Kanäle, die Reize an den Zahnnerv weiterleiten.",
                            "Zahnmark (Pulpa): Das weiche Gewebe im Inneren des Zahns. Enthält Blutgefäße und Nerven, die den Zahn lebendig und empfindlich machen."
                        ]
                    },
                    {
                        subtitle: "1.2 Die Hauptteile eines Zahns:",
                        content: [
                            "Krone: Der sichtbare Teil des Zahns oberhalb des Zahnfleischs.",
                            "Zahnhals: Der Übergang zwischen Krone und Wurzel.",
                            "Wurzel: Verankert den Zahn im Kieferknochen."
                        ]
                    }
                ]
            },
            {
                title: "2. Die verschiedenen Zahnarten",
                content: "Der Mensch besitzt im Erwachsenenalter 32 Zähne, die in vier verschiedene Typen unterteilt sind:",
                items: [
                    "Schneidezähne (Incisivi): 8 Zähne (4 oben, 4 unten). Flach und scharf, perfekt zum Abbeißen von Nahrung.",
                    "Eckzähne (Canini): 4 Zähne (2 oben, 2 unten). Spitz und robust, ideal zum Reißen und Zerkleinern.",
                    "Vormahlzähne (Prämolaren): 8 Zähne (4 oben, 4 unten). Flach mit Höckern, helfen beim Zerkleinern von Nahrung.",
                    "Backenzähne (Molaren): 12 Zähne (6 oben, 6 unten, inklusive der Weisheitszähne). Große Kauflächen für effizientes Mahlen und Zerquetschen."
                ]
            },
            {
                title: "3. Die Funktion der Zähne",
                content: "Jede Zahnart hat eine spezifische Funktion, die zusammen ein optimales Kauen und Verdauen ermöglicht:",
                items: [
                    "Abbeißen: Schneidezähne schneiden Nahrung in handhabbare Stücke.",
                    "Reißen: Eckzähne zerkleinern härtere Nahrung wie Fleisch.",
                    "Zermahlen: Vormahl- und Backenzähne zermahlen die Nahrung zu feinen Partikeln."
                ]
            },
            {
                title: "4. Zahnbogen und Biss",
                content: "Die Zähne sind in einem harmonischen Zahnbogen angeordnet, der Ober- und Unterkiefer miteinander verbindet. Ein gesunder Biss (Okklusion) sorgt für optimale Kaukraft und verhindert Abnutzung oder Schmerzen im Kiefer."
            },
            {
                title: "5. Häufige Probleme und Krankheiten",
                items: [
                    "Karies: Entsteht durch Säureangriffe auf den Zahnschmelz. Vorbeugung: Regelmäßige Zahnpflege, fluoridhaltige Zahnpasta und gesunde Ernährung.",
                    "Zahnfleischentzündung (Gingivitis): Rötung, Schwellung und Blutung des Zahnfleischs. Ursache: Plaque-Bakterien.",
                    "Parodontitis: Fortschreitende Zahnfleischentzündung, die den Kieferknochen angreift. Kann zu Zahnverlust führen."
                ]
            },
            {
                title: "6. Tipps zur Zahnpflege",
                items: [
                    "Zweimal täglich Zähneputzen: Mindestens zwei Minuten mit einer fluoridhaltigen Zahnpasta.",
                    "Zahnseide oder Interdentalbürsten: Reinigung der Zahnzwischenräume.",
                    "Mundspülungen: Reduziert Bakterien im Mundraum.",
                    "Zahnarztbesuche: Regelmäßige Kontrolluntersuchungen, um Probleme frühzeitig zu erkennen."
                ]
            },
            {
                title: "7. Wussten Sie schon?",
                items: [
                    "Der Zahnschmelz ist härter als Knochen, aber nicht regenerierbar.",
                    "Ein Mensch verbringt im Durchschnitt 38 Tage seines Lebens mit Zähneputzen.",
                    "Karies gehört zu den häufigsten Erkrankungen weltweit."
                ]
            },
            {
                title: "8. Interaktive Zahnanatomie",
                content: "Nutzen Sie unser interaktives 3D-Modell, um:",
                items: [
                    "Die Schichten und Teile eines Zahns zu erkunden.",
                    "Den Aufbau verschiedener Zahnarten zu vergleichen.",
                    "Ihre Zahngesundheit besser zu verstehen."
                ]
            }
        ]
    };

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
