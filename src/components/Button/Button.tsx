'use client';
import styles from './Button.module.scss';
import classNames from 'classnames/bind';
import Link from 'next/link';

const cx = classNames.bind(styles);
export default function Button({
  primary,
  secondary,
  title,
  border,
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

  return (
    <Comp
      {...props}
      onClick={onHandle}
      type={type}
      className={cx(
        `btn ${
          (primary && 'btn-primary') ||
          (secondary && 'btn-secondary') ||
          (border && 'btn-border') ||
          (textScroll && 'btn-textScroll') ||
          (disable && 'disabled')
        } ${className} `,
      )}
    >
      {!textScroll ? (
        <div className={cx('flex w-full flex-row justify-center gap-4')}>
          {Icons && <span className={cx('fill-white')}>{Icons}</span>}
          {title}
        </div>
      ) : (
        <div
          className={cx(
            'btn_icon_text',
            'transform[-50%,-50%] fter:rounded-full absolute bottom-[5%] h-10 w-10     ',
          )}
        >
          {Icons}
        </div>
      )}
      {textScroll && <span className="flex h-[40%] w-[40%]">{IconsSub}</span>}
    </Comp>
  );
}
