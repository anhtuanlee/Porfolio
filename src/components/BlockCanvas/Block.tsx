import { config, listBlock } from '@/constant/data-block';
import { useRefs } from '@/hooks/useRefs';
import { Float, MeshTransmissionMaterial } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import gsap, { Circ, Power0, Power1, Power3, Power4 } from 'gsap';
import { CustomEase } from 'gsap/all';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Mesh } from 'three';

export default function Block({ props }: any) {
  const containerRef = useRef<any>();
  const handleCheckRef = useRef<any>();
  const [isStart, setIsStart] = useState<boolean>(false);
  // useFrame(() => (meshRef.current.rotation.x += 0.01));
  const { camera, gl } = useThree();
  const [isHover, setHover] = useState<boolean>(false);
  const { refsByKey, setRef } = useRefs();
  useLayoutEffect(() => {
    const listMesh = Object.values(refsByKey).filter(Boolean);
    const tl = gsap.timeline();

    if (isStart) {
      listMesh.forEach((item: any, index) => {
        const pos = listBlock[index];
        tl.to(
          item.position,
          {
            x: pos.x,
            y: pos.y,
            z: pos.z,
            duration: pos.class === 1 ? 3 : 4,
            ease: Power4.easeInOut,
          },
          0,
        );
      });
      tl.to(
        containerRef.current.scale,
        1,
        {
          x: 1.5,
          y: 1.5,
          z: 1.5,
          duration: 6,
        },
        0,
      );
      // tl.set(
      //   camera.position,
      //   {
      //     x: () => 0,
      //     y: () => 0,
      //   },
      //   0,
      // );
      // tl.to(
      //   camera.position,
      //   {
      //     x: () => 100,
      //     y: () => 100,
      //     duration: 2,
      //   },
      //   0,
      // );
    }
  }, [isStart]);
  useFrame(state => {
    const time = state.clock.getElapsedTime();
    // containerRef.current.rotation.x = Math.sin(time / 2);
    // containerRef.current.rotation.y = Math.sin(time / 2);
  });

  // handle hover item
  useEffect(() => {
    const listMesh = Object.values(refsByKey).filter(Boolean);
    const tl = gsap.timeline();
    if (isStart) {
      listMesh.forEach((item: any, index: number) => {
        const pos = listBlock[index];
        tl.to(
          item.position,

          {
            x: isHover ? pos.positionDefault.x / 15 : pos.x,
            y: isHover ? pos.positionDefault.y / 15 : pos.y,
            z: isHover ? pos.positionDefault.z / 15 : pos.z,
            duration: 0.8,
            ease: Power4.easeOut,
            delay: isHover ? 1 : 4,
          },
          0,
        );
      });
      // tl.to(
      //   camera.position,
      //   {
      //     x: isHover ? 100 : 20,
      //     y: isHover ? 100 : 20,
      //     z: isHover ? 100 : 20,
      //   },
      //   0,
      // );
    }
  }, [isHover]);

  const handleTest = () => {
    setIsStart(true);
  };
  return (
    <Float speed={0.5} rotationIntensity={1} floatIntensity={0.6}>
      <group float={0} {...props} ref={containerRef}>
        {listBlock.map((item: any, index: number) => {
          return (
            <mesh
              key={index}
              ref={element => setRef(element, `${index}`)}
              scale={0.95}
              onClick={index === 0 ? handleTest : undefined}
              onPointerOver={index === 0 ? () => setHover(true) : undefined}
              onPointerOut={index === 0 ? () => setHover(false) : undefined}
              position={[
                item.positionDefault.x,
                item.positionDefault.y,
                item.positionDefault.z,
              ]}
            >
              <boxGeometry args={[item.size_x, item.size_y, item.size_z]} />
              <MeshTransmissionMaterial
                {...config}
                color={'#000'}
                distortionScale={0}
                temporalDistortion={0}
              />
            </mesh>
          );
        })}
      </group>
    </Float>
  );
}
