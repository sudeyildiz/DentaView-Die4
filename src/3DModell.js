import React from 'react';

const ThreeDModel = () => {
    return (
        <div className="3dmodell">
            <h1>3D-Modell der Zahnanatomie</h1>
            <p>Hier ist das interaktive 3D-Modell:</p>
            {/* Beispiel für ein 3D-Modell, du kannst hier deinen 3D-Viewer oder eine Bibliothek wie Three.js verwenden */}
            <main>
                <div className="model-container">
                    <!-- 3D-Modell -->
                    <model-viewer src="3d-model.glb" auto-rotate camera-controls></model-viewer>
                </div>
            </main>
        </div>
    );
};

export default ThreeDModel;
