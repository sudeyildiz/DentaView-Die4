import React from 'react';
import './styles.css'; // CSS-Import für Styling

const Home = () => {
    const content = {
        title: "Willkommen bei DentaView",
        subtitle: "Ihre interaktive Plattform für Zahnanatomie und Zahngesundheit",
        description: "Tauchen Sie ein in die faszinierende Welt der Zahnanatomie. Entdecken Sie interaktive 3D-Modelle, wertvolle Tipps zur Zahnpflege und spannende Artikel rund um die Zahngesundheit.",
        features: [
            { title: "Interaktive 3D-Modelle", text: "Erforschen Sie Zähne in 3D und lernen Sie die Anatomie auf neue Weise kennen." },
            { title: "Tipps zur Zahnpflege", text: "Praktische Tipps für gesunde Zähne und ein strahlendes Lächeln." },
            { title: "Expertenwissen", text: "Lesen Sie Artikel von Experten über Zahngesundheit." },
        ],
        quicklinks: [
            { text: "Zahnanatomie", href: "/Beitrag1" },
            { text: "Tipps zur Zahnpflege", href: "/Beitrag2" },
            { text: "3D-Modell", href: "/model" },
        ],
    };

    return (
        <main>
            <section className="hero">
                <h1>{content.title}</h1>
                <p>{content.subtitle}</p>
            </section>
            <section className="main-content">
                <h2>Warum DentaView?</h2>
                <p>{content.description}</p>
                <div className="features">
                    {content.features.map((feature, index) => (
                        <div key={index} className="feature">
                            <h3>{feature.title}</h3>
                            <p>{feature.text}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section className="quicklinks">
                <h2>Schnellzugriff</h2>
                <div className="quicklinks-buttons">
                    {content.quicklinks.map((link, index) => (
                        <a key={index} href={link.href} className="button">{link.text}</a>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Home;
