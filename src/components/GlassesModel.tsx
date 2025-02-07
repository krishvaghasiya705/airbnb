import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GlassesModel: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const logoGroupRef = useRef<THREE.Group | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0xf0f0f0);
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    cameraRef.current = camera;
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    rendererRef.current = renderer;
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mountRef.current.appendChild(renderer.domElement);

    // Create Toyota logo using basic shapes
    const logoGroup = new THREE.Group();
    logoGroupRef.current = logoGroup;

    // Outer ellipse
    const outerEllipse = new THREE.Mesh(
      new THREE.TorusGeometry(1, 0.1, 16, 100),
      new THREE.MeshPhongMaterial({ color: 0xFF0000 })
    );
    logoGroup.add(outerEllipse);

    // Inner ellipses
    const innerEllipse1 = new THREE.Mesh(
      new THREE.TorusGeometry(0.7, 0.08, 16, 100),
      new THREE.MeshPhongMaterial({ color: 0xFF0000 })
    );
    innerEllipse1.rotation.x = Math.PI / 4;
    logoGroup.add(innerEllipse1);

    const innerEllipse2 = new THREE.Mesh(
      new THREE.TorusGeometry(0.7, 0.08, 16, 100),
      new THREE.MeshPhongMaterial({ color: 0xFF0000 })
    );
    innerEllipse2.rotation.x = -Math.PI / 4;
    logoGroup.add(innerEllipse2);

    logoGroup.scale.set(0.5, 0.5, 0.5);
    scene.add(logoGroup);

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

    camera.position.set(0, 0, 3);

    // Add OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = true;
    controls.minDistance = 1;
    controls.maxDistance = 10;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // Scroll-based animations
    gsap.to(logoGroup.rotation, {
      y: Math.PI * 2,
      scrollTrigger: {
        trigger: mountRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
      },
    });

    gsap.to(camera.position, {
      z: 1.5,
      scrollTrigger: {
        trigger: mountRef.current,
        start: 'top top',
        end: '50% 50%',
        scrub: 1,
      },
    });

    gsap.to(camera.position, {
      z: 5,
      scrollTrigger: {
        trigger: mountRef.current,
        start: '50% 50%',
        end: 'bottom bottom',
        scrub: 1,
      },
    });

    gsap.to(logoGroup.position, {
      x: 1,
      scrollTrigger: {
        trigger: mountRef.current,
        start: '25% 25%',
        end: '75% 75%',
        scrub: 1,
      },
    });

    // Handle window resize
    const handleResize = () => {
      if (cameraRef.current && rendererRef.current) {
        cameraRef.current.aspect = window.innerWidth / window.innerHeight;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(window.innerWidth, window.innerHeight);
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      if (mountRef.current && rendererRef.current) {
        mountRef.current.removeChild(rendererRef.current.domElement);
      }
      window.removeEventListener('resize', handleResize);
      controls.dispose();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div style={{ width: '100%', height: '300vh', position: 'relative' }}>
      <div ref={mountRef} style={{ width: '100%', height: '100vh', position: 'sticky', top: 0 }} />
    </div>
  );
};

export default GlassesModel;