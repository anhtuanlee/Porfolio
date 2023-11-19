'use client';
import { useGlobalContext } from '@/context/store';
import Link from 'next/link';
import { useState } from 'react';

export default function ItemSelects({
  title,
  href,
  type,
  thumbNail,
  listImgDetails,
  isLastItem,
  index,
}: IDataWorks) {
  const { isHoverImg, setIsHoverImg, pathImgHover, setPathImgHover } =
    useGlobalContext();
  const [isHover, setIsHover] = useState<number | null>(null);
  const handleHover = (e: MouseEvent, index: number) => {
    setIsHoverImg(true);
    console.log(thumbNail);
    setPathImgHover(thumbNail);
    setIsHover(index);
  };
  const handleLeave = (e: any) => {
    setIsHoverImg(false);
    setPathImgHover('');
    setIsHover(null);
  };
  return (
    <Link href={href} target="_blank">
      <div
        onMouseMove={(e: any) => handleHover(e, index!)}
        onMouseLeave={handleLeave}
        className={`w-full ${
          !isLastItem && 'border-b-2'
        } flex  flex-row items-center justify-between border-solid border-white py-8 md:py-6 lg:py-4`}
      >
        <div className="flex flex-row items-center ">
          <div
            className={`${
              isHover === index && isHoverImg ? 'block' : 'hidden'
            } mr-4  `}
          >
            <h4 className="inline-block">→</h4>
          </div>
          <h5 className="cursor-pointer ">{title} </h5>
        </div>
        <p className="text-right ">{type}</p>
      </div>
    </Link>
  );
}
