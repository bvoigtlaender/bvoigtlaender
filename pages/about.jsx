import Head from 'next/head';
import { useEffect, useRef } from 'react';
import { HemisphereLight, MeshPhongMaterial, PerspectiveCamera, Scene, WebGLRenderer } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import Header from '../components/header';

export default function About() {
  const threeRef = useRef(null);

  useEffect(() => {
    const ref = threeRef.current;
    const scene = new Scene();

    const camera = new PerspectiveCamera(30, ref.clientWidth / ref.clientHeight, 0.1, 1000);
    camera.position.set(0, 5, 50);
    //camera.rotation.x = -.5;
    //camera.rotation.y = 1;

    const renderer = new WebGLRenderer({ alpha: true });
    renderer.setSize(ref.clientWidth, ref.clientHeight);
    ref.appendChild(renderer.domElement);

    const skyColor = 0xB1E1FF;  // light blue
    const groundColor = 0xeeffee;  // brownish orange
    const intensity = 1;
    const light = new HemisphereLight(skyColor, groundColor, intensity);
    scene.add(light);
    const loader = new GLTFLoader();
    loader.load('scene.gltf', async(gltf) => {
      gltf.scene.children[0].children[0].children[0].children[0].children[0].material = new MeshPhongMaterial({ color: '#b3deb0' });
      gltf.scene.children[0].children[0].children[0].children[0].children[1].material = new MeshPhongMaterial({ color: '#b3deb0' });
      scene.add(gltf.scene);
      const animate = () => {
      requestAnimationFrame(animate);
        gltf.scene.rotation.y += .001;
        gltf.scene.rotation.x += .001;
        camera.aspect = ref.clientWidth / ref.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(ref.clientWidth, ref.clientHeight);
        renderer.render(scene, camera);
      };
      animate();
    }, undefined, (error) => {
      console.error(error);
    });
  
    return () => ref.removeChild(renderer.domElement);
  }, []);
 
  return (
    <>
      <Head>
        <title>about bjarne</title>
      </Head>
      <Header />
      <div className='flex flex-col relative text-9xl'>
        <svg className='place-self-end absolute h-[300px] w-[300px]' xmlns="http://www.w3.org/2000/svg">
          <polygon id="star" width="300" height="300" fill="green" points='150,0 170,130 300,140 180,170 200,300 150,200 100,300 120,170 0,140 130,130 150,0' />
        </svg>
        <h1 className='font-abril text-center mix-blend-color from-teal-100 to-teal-600 bg-gradient-to-b bg-clip-text fill-transparent text-transparent'>hello and welcome</h1>
        <h1 className='font-abril text-center mix-blend-color from-teal-100 to-teal-600 bg-gradient-to-b bg-clip-text fill-transparent text-transparent'>hello and welcome</h1>
        <h1 className='font-abril text-center mix-blend-color from-teal-100 to-teal-600 bg-gradient-to-b bg-clip-text fill-transparent text-transparent'>hello and welcome</h1>
        <h1 className='font-abril text-center mix-blend-color from-teal-100 to-teal-600 bg-gradient-to-b bg-clip-text fill-transparent text-transparent'>hello and welcome</h1>
        <h1 className='font-abril text-center mix-blend-color from-teal-100 to-teal-600 bg-gradient-to-b bg-clip-text fill-transparent text-transparent'>hello and welcome</h1>
        <div className='place-self-end w-[50rem] h-[40rem] absolute' ref={threeRef}></div>
        <svg className='absolute h-[300px] w-[300px] top-10 left-10 -rotate-12' xmlns="http://www.w3.org/2000/svg">
          <polygon id="star" width="300" height="300" fill="green" points='150,0 170,130 300,140 180,170 200,300 150,200 100,300 120,170 0,140 130,130 150,0' />
        </svg>
      </div>
    </>
  );
}
