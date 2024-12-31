import React from 'react';

const Home = () => {
    const content = {
        title: "Willkommen bei DentaView",
        description: "Entdecken Sie die Welt der Zahnanatomie mit interaktiven Modellen.",
        quicklinks: [
            { text: "Impressum", href: "/impressum" },
            { text: "Tipps zur Zahnpflege", href: "/Beitrag2.html" }, // Updated link
        ],
    };

    return (
        <main>
            <section className="main-content">
                <h2>{content.title}</h2>
                <p>{content.description}</p>
                <div className="quicklinks">
                    {content.quicklinks.map((link, index) => (
                        <a key={index} href={link.href} className="button">{link.text}</a>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Home;