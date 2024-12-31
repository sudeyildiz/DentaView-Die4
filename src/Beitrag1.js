import React from 'react';

const Beitrag1 = () => {
    const content = {
        title: "Zahnanatomie leicht gemacht",
        description: "Lernen Sie alles über die Anatomie der menschlichen Zähne.",
    };

    return (
        <div>
            <h2>{content.title}</h2>
            <p>{content.description}</p>
        </div>
    );
};

export default Beitrag1;
