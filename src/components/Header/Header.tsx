'use client';
import Link from 'next/link';
import { IconsLogo } from '../../../public/access/icons';
import Nav from './components/Nav/Nav';
import { useEffect, useRef, useState } from 'react';
import NavRight from './components/Nav/NavRight';
import gsap from 'gsap';
export default function Header() {
  const [isScrolHeader, setIsScrollHeader] = useState<boolean>(false);
  const logoRef = useRef<SVGAElement | null>(null);
  const listPaths = Array.from({ length: 6 }, item => item).map(() =>
    useRef<SVGClipPathElement | null>(null),
  );
  const handleWindowScroll = (e: Event) => {
    if (window.scrollY > 133) {
      setIsScrollHeader(true);
    } else {
      setIsScrollHeader(false);
    }
  };

  useEffect(() => {
    // if (logoRef.current) {
    //   const listPaths = logoRef.current.childNodes as NodeListOf<ChildNode>;

    //   listPaths.forEach((item, index: number) => {
    //     if (item instanceof SVGPathElement) {
    //       gsap.fromTo(
    //         item,
    //         {
    //           x: 0,
    //         },
    //         {},
    //       );
    //     }
    //   });
    // }
    window.addEventListener('scroll', e => handleWindowScroll(e));
  }, []);

  return (
    <header
      className={`font-custom fixed top-0 z-10 mx-auto flex w-full flex-row  justify-between px-[1rem] py-8  
      md:px-section ${isScrolHeader ? 'backdrop-blur-sm' : ''}`}
    >
      <Link
        href="/"
        className="flex flex-row items-center justify-center gap-2 "
      >
        <span className="h-10 w-10 ">
          <IconsLogo ref={logoRef} />
        </span>
        <h4 className="text-3xl font-semibold text-white">Venn</h4>
      </Link>
      <NavRight />
    </header>
  );
}
