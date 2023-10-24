import { ROUTE_PATH } from '@/constant/rout-path';
import Link from 'next/link';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import { useGlobalContext } from '@/context/store';
import gsap from 'gsap';
import { Power2 } from 'gsap';
import { DATA_SOCIAL } from '@/data/data';
import ItemLink from '@/components/ItemLink/ItemLink';

const cx = classNames.bind(styles);

export default function Menu() {
  const { isOpenMenuHeader, setIsOpenMenuHeader } = useGlobalContext();
  const [isTextHover, setIsTextHover] = useState<number | null>(null);
  const menuRef = useRef<any>();
  const socialItemRef = DATA_SOCIAL.map(() => useRef<any>(null));
  const itemHeaderRef = Array.from({ length: 4 }, (_, index) => index).map(() =>
    useRef<any>(null),
  );
  const itemBgRef = DATA_SOCIAL.map(() => useRef<any>(null));
  const containerMenu = useRef<any>();
  const handleMouseOver = (id: number) => {
    setIsTextHover(id);
  };
  const handleMouseLeave = (id: number) => {
    setIsTextHover(null);
  };
  const handleCloseMenu = () => {
    setIsOpenMenuHeader(false);
  };
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ paused: true });
      menuRef.current = tl
        .set(containerMenu.current, {
          display: 'none',
        })
        .reverse();
      tl.to(containerMenu.current, {
        duration: 0,
        display: 'flex',
        ease: 'Expo.easeInOut',
      });
      // .reverse();

      itemBgRef.forEach(item => {
        tl.from(item.current, {
          duration: 0.3,
          x: '100%',
          stagger: 0.1,
          ease: 'Expo.easeInOut',
        });
      });
      itemHeaderRef.forEach(item => {
        tl.from(
          item.current,
          {
            duration: 0.8,
            y: '100%',
            stagger: 0.2,
            ease: 'Expo.easeInOut',
          },
          '-=0.5',
        );
      });

      socialItemRef.forEach(item => {
        tl.from(
          item.current,
          {
            duration: 0.6,
            y: '-100%',
            opacity: 0,
            stagger: 0.1,
            ease: 'Expo.easeInOut',
          },
          '-=0.5',
        );
      });
    }, [menuRef, itemBgRef, itemHeaderRef, socialItemRef]);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    menuRef.current && menuRef.current.reversed(!isOpenMenuHeader);
  }, [isOpenMenuHeader]);

  return (
    <div ref={containerMenu} className={cx('fullpage-menu')}>
      <div className={cx('menu-bg')}>
        {Array.from({ length: 3 }, (_, index) => index + 1).map(
          (item: any, index: number) => {
            return (
              <span
                className={cx('menu_item')}
                ref={itemBgRef[index]}
                key={index}
              ></span>
            );
          },
        )}
      </div>
      <div className="flex items-center justify-center">
        <nav className={cx('nav_container')}>
          <ul className="main-menu flex w-10/12 flex-col items-start justify-center gap-8 px-8">
            {Object.entries(ROUTE_PATH).map((item, index: number) => {
              return (
                <li className={cx('inline-block flex-shrink-0', 'nav_item')}>
                  <Link
                    className={cx('nav_item_a')}
                    href={item[1]}
                    ref={itemHeaderRef[index]}
                  >
                    <h1
                      onMouseOver={() => handleMouseOver(index)}
                      onMouseLeave={() => handleMouseLeave(index)}
                      onClick={handleCloseMenu}
                      className={`text-[3rem]  transition-all duration-300 md:text-[3rem]   ${
                        isTextHover === index ? 'font-reset' : ''
                      }`}
                    >
                      {item[0]}
                    </h1>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className={cx('header-nav-footer')}>
          <ul className={cx('social-links flex flex-row gap-4 ')}>
            {DATA_SOCIAL.map((item: any, index: number) => {
              return (
                <span ref={socialItemRef[index]} key={index}>
                  <ItemLink key={index} title={item.title} href={item.href} />
                </span>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
