import { config, listBlock } from '@/constant/data-block';
import { useStore } from '@/context/stores';
import { useRefs } from '@/hooks/useRefs';
import useWindowResize from '@/hooks/useWindowResize';
import { Float, MeshTransmissionMaterial, RoundedBox } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import gsap, { Power4 } from 'gsap';
import { useEffect, useLayoutEffect, useRef } from 'react';

export default function Block({ props }: any) {
  const containerRef = useRef<any>();
  const { isOpenMenuHeader, idCursorHover } = useStore();
  const { isMobile } = useWindowResize();
  const { camera, gl } = useThree();
  const { refsByKey, setRef } = useRefs();

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
    tl.to(
      containerRef.current.scale,
      1,
      {
        x: isOpenMenuHeader ? 2 : 1.5,
        y: isOpenMenuHeader ? 2 : 1.5,
        z: isOpenMenuHeader ? 2 : 1.5,
        duration: 6,
      },
      0,
    );
  }, [isOpenMenuHeader, idCursorHover]);

  useLayoutEffect(() => {
    if (!isMobile) {
      gsap.to(containerRef.current.rotation, {
        y:
          idCursorHover === 1
            ? (containerRef.current.rotation.y -= 2)
            : idCursorHover === 2
            ? (containerRef.current.rotation.y -= 2)
            : idCursorHover === 3
            ? (containerRef.current.rotation.y += 2)
            : idCursorHover === 4
            ? (containerRef.current.rotation.y += 2)
            : 0,
        z:
          idCursorHover === 1
            ? (containerRef.current.rotation.z -= 4)
            : idCursorHover === 2
            ? (containerRef.current.rotation.z += 4)
            : idCursorHover === 3
            ? (containerRef.current.rotation.z -= 2)
            : idCursorHover === 4
            ? (containerRef.current.rotation.z += 2)
            : 0,
        x:
          idCursorHover === 1
            ? (containerRef.current.rotation.x -= 4)
            : idCursorHover === 2
            ? (containerRef.current.rotation.x += 4)
            : idCursorHover === 3
            ? (containerRef.current.rotation.x -= 2)
            : idCursorHover === 4
            ? (containerRef.current.rotation.x += 2)
            : 0,
        delay: 0.1,
        duration: 1,
        ease: Power4.easeOut,
      });

      gsap.to(camera.position, {
        duration: 1,
        x:
          idCursorHover === 1 ||
          idCursorHover === 2 ||
          idCursorHover === 3 ||
          idCursorHover === 4
            ? 5
            : 10,
        z:
          idCursorHover === 1 ||
          idCursorHover === 2 ||
          idCursorHover === 3 ||
          idCursorHover === 4
            ? 5
            : 10,
        y:
          idCursorHover === 1 ||
          idCursorHover === 2 ||
          idCursorHover === 3 ||
          idCursorHover === 4
            ? 5
            : 10,
      });
    }
  }, [idCursorHover, isMobile]);
  return (
    <Float speed={1} rotationIntensity={1} floatIntensity={10}>
      <group float={2} {...props} ref={containerRef}>
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
              <RoundedBox
                radius={0.14}
                args={[item.size_x, item.size_y, item.size_z]}
              >
                <MeshTransmissionMaterial
                  {...config}
                  iridescenceThicknessRange={[0, 1400]}
                  distortionScale={0}
                  temporalDistortion={0}
                />
              </RoundedBox>
            </mesh>
          );
        })}
      </group>
    </Float>
  );
}
