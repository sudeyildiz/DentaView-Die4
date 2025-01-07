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
        camera.position.set(0, 0, 6);

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setClearColor(0xfce1ff);  // Himmelblau
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

        // GLTFLoader verwenden
        const loader = new GLTFLoader();
        loader.load(
            '/chemicals_opaque_test_v2.1.glb',
            (gltf) => {
                const model = gltf.scene;
                model.scale.set(5, 5, 5);
                model.position.set(0, -2, 0);
                scene.add(model);
            },
            (xhr) => console.log((xhr.loaded / xhr.total) * 100 + '% geladen'),
            (error) => console.error('Fehler beim Laden des 3D-Modells', error)
        );

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

    return <div ref={mountRef} style={{ width: '100vw', height: '100vh' }} />;
};

export default ThreeDModel;