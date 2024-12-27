import React, { useEffect, useState } from 'react';

const Beitrag1 = () => {
    const [content, setContent] = useState({});

    useEffect(() => {
        let isMounted = true;

        fetch('/content.json')
            .then(response => response.json())
            .then(data => {
                if (isMounted) {
                    setContent(data.impressum);
                }
            });

        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <div>
            <h2>{content.title}</h2>
            <p>{content.description}</p>
        </div>
    );
};

export default Beitrag1;