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
import useWindowResize from '@/hooks/useWindowResize';
const cx = classNames.bind(style);

export default function BlockCanvas() {
  const { isMobile } = useWindowResize();

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
          position: [
            isMobile ? 15 : 10,
            isMobile ? 15 : 10,
            isMobile ? 15 : 10,
          ],
          fov: 50,
          // aspect: window.innerWidth / window.innerHeight,
          near: 0.1,
          far: 2000,
        }}
      >
        <ambientLight intensity={0.5} />
        <spotLight castShadow position={[1, 1, 1]} angle={0.15} penumbra={1} />
        <pointLight castShadow position={[-10, -10, -10]} />
        <directionalLight position={[10, 10, 10]} />

        <Environment resolution={24}>
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
        </Environment>
        <Block />
      </Canvas>
    </div>
  );
}
