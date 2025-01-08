import React from 'react';


const Beitrag2 = () => {
    const content = {
        title: "Verwaltung Ihrer Zahngesundheit: 5 Experten-Tipps für ein strahlendes Lächeln",
        description: "Eine konsequente Zahnpflege ist der Schlüssel zu gesunden Zähnen und einem selbstbewussten Lächeln. Hier finden Sie fünf fundierte Tipps, die nicht jeder kennt – für eine optimale Mundgesundheit und einen langfristigen Schutz vor Zahnerkrankungen.",
        sections: [
            {
                title: "1. Die richtige Putztechnik: Bass-Methode anwenden",
                subsections: [
                    {
                        subtitle: "Wie funktioniert die Bass-Methode?",
                        content: [
                            "Halten Sie die Zahnbürste in einem Winkel von 45 Grad zum Zahnfleisch.",
                            "Führen Sie kleine, vibrierende Bewegungen aus, ohne zu stark zu drücken.",
                            "Putzen Sie in kurzen Abschnitten, um alle Bereiche gründlich zu erreichen.",
                            "💡 Tipp: Elektrische Zahnbürsten mit „Gum Care“-Modus unterstützen die korrekte Technik."
                        ]
                    }
                ]
            },
            {
                title: "2. Remineralisierende Zahnpasta wählen",
                subsections: [
                    {
                        subtitle: "Empfohlene Inhaltsstoffe:",
                        content: [
                            "Fluorid: Schützt vor Säureangriffen und fördert die Remineralisation.",
                            "Hydroxylapatit: Eine biokompatible Alternative zu Fluorid, die den Zahnschmelz aufbaut.",
                            "🌟 Wussten Sie schon? Hydroxylapatit ähnelt dem natürlichen Aufbau Ihrer Zähne und eignet sich besonders für empfindliche Zahnhälse."
                        ]
                    }
                ]
            },
            {
                title: "3. Interdentalreinigung: Mehr als nur Zähneputzen",
                content: "70 % der Zahnoberflächen werden mit der Zahnbürste erreicht – aber was ist mit den Zwischenräumen?",
                items: [
                    "Zahnseide: Ideal für enge Zahnzwischenräume.",
                    "Interdentalbürsten: Besonders effektiv für größere Lücken und bei Zahnfleischerkrankungen.",
                    "🔍 Profi-Tipp: Nutzen Sie Interdentalbürsten mit einer Kunststoffbeschichtung, um das Zahnfleisch zu schonen."
                ]
            },
            {
                title: "4. Ernährung für starke Zähne",
                content: "Was Sie essen, beeinflusst Ihre Zahngesundheit erheblich.",
                subsections: [
                    {
                        subtitle: "Förderliche Lebensmittel:",
                        content: [
                            "Käse und Milchprodukte: Neutralisieren Säuren und stärken den Zahnschmelz durch Kasein.",
                            "Ballaststoffreiche Lebensmittel: Rohes Gemüse und Obst reinigen die Zähne mechanisch.",
                            "Xylit-Kaugummi: Reduziert Kariesbakterien und fördert den Speichelfluss."
                        ]
                    },
                    {
                        subtitle: "🚫 Vermeiden Sie:",
                        content: [
                            "Zuckerhaltige Snacks und Getränke, da diese den pH-Wert im Mund senken und Karies begünstigen."
                        ]
                    }
                ]
            },
            {
                title: "5. Regelmäßige professionelle Zahnreinigung (PZR)",
                subsections: [
                    {
                        subtitle: "Warum ist die PZR so wichtig?",
                        content: [
                            "Vorbeugung: Reduziert das Risiko von Zahnfleischerkrankungen und Karies.",
                            "Früherkennung: Zahnärzte erkennen Probleme wie Schmelzerosion oder Zahnfleischrückgang rechtzeitig.",
                            "📅 Empfehlung: Planen Sie Ihre PZR alle 6 Monate – je nach individueller Situation kann auch ein kürzerer oder längerer Abstand sinnvoll sein."
                        ]
                    }
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

export default Beitrag2;
