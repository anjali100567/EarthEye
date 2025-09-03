// src/components/EarthScene.jsx
import { useNavigate } from 'react-router-dom';
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const EarthScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    const scene = new THREE.Scene();

    // Space background
    const loader = new THREE.TextureLoader();
    const spaceTexture = loader.load('/textures/starsp.jpg', undefined,
      undefined,
      (err) => {
       console.error('Failed to load space texture:', err); }
    ); 
     
    scene.background = spaceTexture;

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 3;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    // Earth
    const earthGeometry = new THREE.SphereGeometry(1, 64, 64);
    const earthTexture = loader.load('/textures/earth.jpg');
    const earthMaterial = new THREE.MeshStandardMaterial({ map: earthTexture });
    const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
    scene.add(earthMesh);

    // Rotate Earth to center India (~78°E)
    earthMesh.rotation.y = -THREE.MathUtils.degToRad(78);

    // Satellite
    const satelliteGeometry = new THREE.BoxGeometry(0.1, 0.1, 0.2);
    const satelliteTexture = new THREE.TextureLoader().load('/textures/satellite.jpg');
    const satelliteMaterial = new THREE.MeshBasicMaterial({ map: satelliteTexture });
    const satellite = new THREE.Mesh(satelliteGeometry, satelliteMaterial);
    scene.add(satellite);

    // Lighting
    scene.add(new THREE.AmbientLight(0xffffff, 0.6));
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);

    // Animate
    const animate = () => {
      requestAnimationFrame(animate);
      earthMesh.rotation.y += 0.0005; // Slow spin

      const time = Date.now() * 0.001;
      const radius = 1.5;
      satellite.position.x = radius * Math.cos(time);
      satellite.position.z = radius * Math.sin(time);
      satellite.position.y = 0.2;

      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
         if (mountRef.current && renderer) {
           mountRef.current.removeChild(renderer.domElement);
         }
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '100vh' }} />;
};

export default EarthScene;