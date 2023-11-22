'use client';
import { useStore } from '@/context/stores';
import styles from './Button.module.scss';
import classNames from 'classnames/bind';
import Link from 'next/link';

const cx = classNames.bind(styles);
export default function Button({
  title,
  textScroll,
  disable,
  Icons,
  IconsSub,
  className,
  href,
  dowload,
  to,
  type,
  onHandle,
}: ButtonProps) {
  const props: {
    href?: string;
    dowload?: string;
    to?: string;
    target?: string;
    type?: string;
  } = {};

  let Comp: any = 'button';
  if (href || dowload) {
    props.href = href;
    props.target = '_blank';
    props.dowload = 'cv.pdf';
    Comp = 'a';
  } else if (to) {
    Comp = Link;
    props.href = to;
  }
  const { setIdCursorHover } = useStore();
  return (
    <Comp
      {...props}
      onClick={onHandle}
      type={type}
      className={cx('btn', `btn-${type}`)}
      onMouseEnter={() => setIdCursorHover('icon')}
      onMouseLeave={() => setIdCursorHover(null)}
    >
      {title}
    </Comp>
  );
}
