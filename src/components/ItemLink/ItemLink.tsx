'use client';
import { useStore } from '@/context/stores';
import classNames from 'classnames/bind';
import Link from 'next/link';
import { IconsArrowRightUp } from '../../../public/access/icons';
import s from './styles.module.scss';

const cx = classNames.bind(s);

export default function ItemLink({ href = '', title, email }: ItemLinkProps) {
  const setIdLinkHover = useStore(state => state.setIdCursorHover);

  return (
    <Link
      className={cx(
        ` relative  inline-flex w-full cursor-pointer  flex-row items-center justify-start whitespace-nowrap lg:w-auto`,
        'item_link',
        'item_wrap',
      )}
      href={href}
      onMouseEnter={() => setIdLinkHover('link')}
      onMouseLeave={() => setIdLinkHover(null)}
    >
      <IconsArrowRightUp
        className={cx('mr-[1rem] h-8 w-8 flex-shrink-0', 'icon_arrow')}
      />
      <span
        className={cx(
          'item_link',
          'item_link_text',
          'overflow-hidden text-ellipsis',
        )}
      >
        {title}
      </span>
    </Link>
  );
}
