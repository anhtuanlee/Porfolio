'use client';

import Image from 'next/image';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { useStore } from '@/context/stores';

const cx = classNames.bind(styles);
export default function ImageSlide({ href, alt }: TImageSlide) {
  const refImg = useRef<HTMLDivElement>(null);
  const { isHoverImg } = useStore();

  useLayoutEffect(() => {
    if (refImg.current) {
      const tl = gsap.timeline();

      tl.to(
        refImg.current as HTMLDivElement,
        0.5,
        {
          duration: 1,
          clipPath: isHoverImg
            ? 'polygon(0% 0%,100% 0%, 100% 100%, 0% 100%)'
            : 'polygon(0% 0%,0% 0%, 0% 100%, 0% 100%)',
          ease: 'expo.out',
        },
        '-= 1',
      );

      tl.to(
        refImg?.current.children[0] as HTMLElement,
        1.5,
        {
          duration: 1,
          clipPath: isHoverImg
            ? 'polygon(0% 0%,100% 0%, 100% 100%, 0% 100%)'
            : 'polygon(0% 0%,0% 0%, 0% 100%, 0% 100%)',
          ease: 'expo.out',
        },
        '-= 0.5',
      );
    }
  }, [isHoverImg, refImg]);

  return (
    <div
      ref={refImg}
      className={cx(
        'wrapper_img',
        'relative mb-20 aspect-3/2 w-full  overflow-hidden  rounded-xl',
      )}
    >
      <figure
        className={cx(
          ' relative mb-20 aspect-3/2 w-full  overflow-hidden  rounded-xl',
          'wrapper_img_inner',
        )}
      >
        <Image
          fill
          layout="fill"
          loading="lazy"
          objectFit="cover"
          className={cx('item_img', 'absolute w-auto')}
          alt={alt}
          src={href ?? '/access/images/default-image.jpg'}
        />
      </figure>
    </div>
  );
}
