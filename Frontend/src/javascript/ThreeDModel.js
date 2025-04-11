import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Cache für das vorgeladene Modell
let cachedModel = null;

// Funktion zum Vorladen des Modells
const preloadModel = (url) => {
    const loader = new GLTFLoader();
    return new Promise((resolve, reject) => {
        loader.load(
            url,
            (gltf) => {
                cachedModel = gltf.scene; // Speichere das Modell im Cache
                resolve(cachedModel);
            },
            undefined,
            (error) => reject(error)
        );
    });
};

const ThreeDModel = () => {
    const mountRef = useRef(null);
    const [modelLoaded, setModelLoaded] = useState(false);

    useEffect(() => {
        // Szene, Kamera und Renderer erstellen
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.set(0, 0, 6);

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setClearColor(0xfce1ff); // Himmelblau
        mountRef.current.appendChild(renderer.domElement);

        // OrbitControls hinzufügen
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.minDistance = 3;
        controls.maxDistance = 10;
        controls.target.set(0, 0, 0);
        controls.update();

        // Licht hinzufügen
        const ambientLight = new THREE.AmbientLight(0xffffff, 1);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(10, 10, 10);
        scene.add(directionalLight);

        // Vorgeladenes Modell verwenden oder laden
        const loadModel = async () => {
            let model;
            if (cachedModel) {
                model = cachedModel.clone(); // Klone das vorgeladene Modell
            } else {
                model = await preloadModel('/chemicals_opaque_test_v2.1.glb');
            }
            model.scale.set(5, 5, 5);
            model.position.set(0, -2, 0);
            scene.add(model);
            setModelLoaded(true);
        };

        loadModel();

        // Animation
        const animate = () => {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        };
        animate();

        // Fenstergröße anpassen
        const onResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', onResize);

        // Cleanup bei unmount
        return () => {
            window.removeEventListener('resize', onResize);
            controls.dispose();
            renderer.dispose();

            if (mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            }
        };
    }, []);

    return (
        <div className="three-d-page">
            <main
                style={{
                    maxWidth: 'none',
                    margin: 0,
                    padding: 0,
                    background: 'none',
                    borderRadius: 0,
                    boxShadow: 'none',
                    textAlign: 'unset',
                }}
            >
                <div ref={mountRef} style={{ width: '100%', height: '100%' }} />
                {!modelLoaded && <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>Lädt 3D-Modell...</div>}
            </main>
        </div>
    );
};

export default ThreeDModel;
