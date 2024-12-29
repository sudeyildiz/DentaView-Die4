import React, { useEffect, useState } from 'react';

const Home = () => {
    const [content, setContent] = useState({});

    useEffect(() => {
        let isMounted = true; // Track if the component is mounted

        fetch('/content.json')
            .then(response => response.json())
            .then(data => {
                if (isMounted) {
                    setContent(data.home);
                }
            })
            .catch(error => console.error('Error fetching content:', error));

        return () => {
            isMounted = false; // Cleanup function to set isMounted to false
        };
    }, []);

    return (
        <main>
            <section className="main-content">
                <h2>{content.title}</h2>
                <p>{content.description}</p>
                <div className="quicklinks">
                    {content.quicklinks && content.quicklinks.map((link, index) => (
                        <a key={index} href={link.href} className="button">{link.text}</a>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Home;