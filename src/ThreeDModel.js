import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ThreeDModel = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        // Szene, Kamera und Renderer erstellen
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.set(0, 0, 6); // Setze die Kamera weiter weg, sodass das Modell sichtbar ist

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        mountRef.current.appendChild(renderer.domElement);
        renderer.setClearColor(0x0000ff); // Schwarz als Hintergrundfarbe

        // OrbitControls hinzufügen
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true; // Sanfte Bewegung
        controls.dampingFactor = 0.05;
        controls.minDistance = 3; // Minimaler Zoom-Abstand (Modell bleibt immer sichtbar)
        controls.maxDistance = 10; // Maximale Zoom-Distanz
        controls.target.set(0, 0, 0); // Fokus auf die Mitte des Modells
        controls.update();

        // Licht hinzufügen
        const ambientLight = new THREE.AmbientLight(0xffffff, 1); // Umgebungslicht
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(10, 10, 10);
        scene.add(directionalLight);

        // GLTFLoader verwenden, um ein 3D-Modell zu laden
        const loader = new GLTFLoader();
        loader.load(
            '/chemicals_opaque_test_v2.1.glb', // Pfad zu deinem 3D-Modell
            (gltf) => {
                const model = gltf.scene;
                model.scale.set(5, 5, 5); // Modell skalieren
                model.position.set(0, -2, 0); // Position des Modells
                scene.add(model);
            },
            (xhr) => {
                console.log((xhr.loaded / xhr.total) * 100 + '% geladen');
            },
            (error) => {
                console.error('Fehler beim Laden des 3D-Modells', error);
            }
        );

        // Animation
        const animate = () => {
            requestAnimationFrame(animate);
            controls.update(); // OrbitControls aktualisieren
            renderer.render(scene, camera);
        };
        animate();

        // Cleanup bei unmount
        return () => {
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={mountRef} style={{ width: '100vw', height: '100vh' }} />;
};

export default ThreeDModel;
