import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const GlassesModel: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f0);
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mountRef.current.appendChild(renderer.domElement);

    // Create a simple table geometry
    const tableGeometry = new THREE.BoxGeometry(2, 0.1, 1);
    const tableMaterial = new THREE.MeshStandardMaterial({ color: 0x8B4513 });
    const table = new THREE.Mesh(tableGeometry, tableMaterial);
    table.position.set(0, -0.5, 0);
    table.castShadow = true;
    table.receiveShadow = true;
    scene.add(table);

    // Create a simple glasses geometry
    const frameGeometry = new THREE.TorusGeometry(0.2, 0.02, 16, 100);
    const frameMaterial = new THREE.MeshStandardMaterial({ color: 0x000000 });
    const leftLens = new THREE.Mesh(frameGeometry, frameMaterial);
    const rightLens = new THREE.Mesh(frameGeometry, frameMaterial);
    leftLens.position.set(-0.2, 0.5, 0);
    rightLens.position.set(0.2, 0.5, 0);
    const bridge = new THREE.Mesh(
      new THREE.CylinderGeometry(0.01, 0.01, 0.4, 32),
      frameMaterial
    );
    bridge.rotation.z = Math.PI / 2;
    bridge.position.set(0, 0.5, 0);
    const glasses = new THREE.Group();
    glasses.add(leftLens, rightLens, bridge);
    glasses.castShadow = true;
    scene.add(glasses);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 10, 7);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 1024;
    directionalLight.shadow.mapSize.height = 1024;
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0xffffff, 0.5, 10);
    pointLight.position.set(-2, 3, 2);
    scene.add(pointLight);

    camera.position.set(2, 2, 2);

    // Add OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = true;
    controls.minDistance = 2;
    controls.maxDistance = 10;

    // Floor
    const floorGeometry = new THREE.PlaneGeometry(10, 10);
    const floorMaterial = new THREE.MeshStandardMaterial({ color: 0xcccccc });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    scene.add(floor);

    // Animation
    let scrollY = window.scrollY;
    const animate = () => {
      requestAnimationFrame(animate);

      // Scroll animation
      const newScrollY = window.scrollY;
      const scrollDelta = newScrollY - scrollY;
      scrollY = newScrollY;

      // Rotate the glasses based on scroll
      glasses.rotateY(scrollDelta * 0.002);

      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
      controls.dispose();
    };
  }, []);

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <div ref={mountRef} style={{ width: '100%', height: '100vh' }} />
      <div style={{position: "absolute", top: "0", left: "0", width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)"}}></div>
    </div>
  );
};

export default GlassesModel;