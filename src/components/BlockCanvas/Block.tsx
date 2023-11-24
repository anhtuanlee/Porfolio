import { config, listBlock } from '@/constant/data-block';
import { useStore } from '@/context/stores';
import { useRefs } from '@/hooks/useRefs';
import { Float, MeshTransmissionMaterial } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import gsap, { Power4 } from 'gsap';
import { useEffect, useLayoutEffect, useRef } from 'react';

export default function Block({ props }: any) {
  const containerRef = useRef<any>();
  const isOpenMenuHeader = useStore(state => state.isOpenMenuHeader);
  const idCursorHover = useStore(state => state.idCursorHover);

  const { camera, gl } = useThree();
  const { refsByKey, setRef } = useRefs();

  useLayoutEffect(() => {
    const listMesh = Object.values(refsByKey).filter(Boolean);
    const tl = gsap.timeline();

    listMesh.forEach((item: any, index) => {
      const pos = listBlock[index];
      tl.to(
        item.position,
        {
          x: pos.x,
          y: pos.y,
          z: pos.z,
          duration: 3,
          delay: 6,
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
  }, []);
  // useFrame(state => {
  //   containerRef.current.rotation.z += 0.1;
  // });
  // handle hover item
  useEffect(() => {
    const listMesh = Object.values(refsByKey).filter(Boolean);
    const tl = gsap.timeline();

    listMesh.forEach((item: any, index: number) => {
      const pos = listBlock[index];
      tl.to(
        item.position,
        {
          x: isOpenMenuHeader ? pos.positionDefault.x : pos.x,
          y: isOpenMenuHeader ? pos.positionDefault.y : pos.y,
          z: isOpenMenuHeader ? pos.positionDefault.z : pos.z,

          duration: 3,
          ease: Power4.easeOut,
          delay: isOpenMenuHeader ? 1 : 0,
        },
        0,
      );
    });
  }, [isOpenMenuHeader, idCursorHover]);

  useLayoutEffect(() => {
    // gsap.to(camera.position, {
    //   x: idCursorHover === 1 ? 0 : 15,
    //   // x: idCursorHover === 1 ? 0 : 15,
    //   duration: 1,
    //   ease: Power4.easeIn,
    //   onUpdate: () => {
    //     camera.lookAt(0, 0, 0);
    //     camera.updateProjectionMatrix();
    //   },
    // });
    gsap.to(containerRef.current.rotation, {
      y: idCursorHover === 1 ? (containerRef.current.rotation.y -= 2) : 0,
      // x: idCursorHover === 1 ? (containerRef.current.rotation.x += 1) : 0,
      // z: idCursorHover === 1 ? (containerRef.current.rotation.z += 0.3) : 0,
      delay: 0.1,
      duration: 2,
      ease: Power4.easeOut,
    });
    // gsap.to(containerRef.current, {
    //   y: idCursorHover === 1 ? (containerRef.current.rotation.y -= 2) : 0,
    //   // x: idCursorHover === 1 ? (containerRef.current.rotation.x += 1) : 0,
    //   // z: idCursorHover === 1 ? (containerRef.current.rotation.z += 0.3) : 0,
    //   delay: 0.1,
    //   duration: 2,
    //   ease: Power4.easeOut,
    //   scale:
    // });
  }, [idCursorHover]);
  return (
    <Float speed={0.5} rotationIntensity={1} floatIntensity={1}>
      <group float={0} {...props} ref={containerRef}>
        {listBlock.map((item: any, index: number) => {
          return (
            <mesh
              key={index}
              ref={element => setRef(element, `${index}`)}
              scale={0.95}
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
