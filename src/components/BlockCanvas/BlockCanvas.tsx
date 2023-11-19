import {
  Environment,
  Lightformer,
  AccumulativeShadows,
  RandomizedLight,
  Dodecahedron,
  OrbitControls,
  Outlines,
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import Block from './Block';
import style from './BlockCanvas.module.scss';
import classNames from 'classnames';
import * as THREE from 'three';
const cx = classNames.bind(style);

export default function BlockCanvas() {
  return (
    <div className={'fixed inset-0'}>
      <Canvas
        flat
        // linear
        shadows
        gl={{ antialias: false }}
        // onCreated={state => {
        //   state.gl.toneMapping = THREE.NoToneMapping;
        // }}

        camera={{
          position: [10, 10, 10],
          fov: 50,
          // aspect: window.innerWidth / window.innerHeight,
          near: 0.1,
          far: 2000,
        }}
      >
        <color attach="background" args={['#33333C']} />

        <ambientLight intensity={0.5} />
        <spotLight castShadow position={[1, 1, 1]} angle={0.15} penumbra={1} />
        <pointLight castShadow position={[-10, -10, -10]} />
        <directionalLight position={[10, 10, 10]} />
        <Environment
          files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/blue_photo_studio_1k.hdr"
          resolution={512}
        >
          <group rotation={[0, 0, 1]}>
            <Lightformer
              form="circle"
              intensity={10}
              position={[0, 10, -10]}
              scale={20}
              onUpdate={self => self.lookAt(0, 0, 0)}
            />
            <Lightformer
              intensity={0.1}
              onUpdate={self => self.lookAt(0, 0, 0)}
              position={[-5, 1, -1]}
              rotation-y={Math.PI / 2}
              scale={[50, 10, 1]}
            />
            <Lightformer
              intensity={0.1}
              onUpdate={self => self.lookAt(0, 0, 0)}
              position={[10, 1, 0]}
              rotation-y={-Math.PI / 2}
              scale={[50, 10, 1]}
            />
            <Lightformer
              color="white"
              intensity={0.2}
              onUpdate={self => self.lookAt(0, 0, 0)}
              position={[0, 1, 0]}
              scale={[10, 100, 1]}
            />
          </group>
        </Environment>

        {/* <Environment resolution={64}>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <Lightformer
              intensity={4}
              rotation-x={Math.PI / 2}
              position={[0, 5, -9]}
              scale={[10, 10, 1]}
            />
            {[2, 0, 2, 0, 2, 0, 2, 0].map((x, i) => (
              <Lightformer
                key={i}
                form="circle"
                intensity={4}
                rotation={[Math.PI / 2, 0, 0]}
                position={[x, 4, i * 4]}
                scale={[4, 1, 1]}
              />
            ))}
            <Lightformer
              intensity={2}
              rotation-y={Math.PI / 2}
              position={[-5, 1, -1]}
              scale={[50, 2, 1]}
            />
            <Lightformer
              intensity={2}
              rotation-y={Math.PI / 2}
              position={[-5, -1, -1]}
              scale={[50, 2, 1]}
            />
            <Lightformer
              intensity={2}
              rotation-y={-Math.PI / 2}
              position={[10, 1, 0]}
              scale={[50, 2, 1]}
            />
          </group>
        </Environment> */}
        {/* <AccumulativeShadows
          temporal
          frames={200}
          color="purple"
          colorBlend={0.5}
          opacity={1}
          scale={10}
          alphaTest={0.85}
        >
          <RandomizedLight
            amount={8}
            radius={5}
            ambient={0.5}
            position={[5, 3, 2]}
            bias={0.001}
          />
        </AccumulativeShadows> */}
        {/* <InstancedBoxes2 /> */}
        {/* <Cube /> */}
        <Block />

        <OrbitControls
        // autoRotate
        // enableDamping={false}
        // enablePan={false}
        // enableRotate={false}
        // enableZoom={false}
        />
        {/* <axesHelper args={[4]} /> */}
      </Canvas>
    </div>
  );
}
