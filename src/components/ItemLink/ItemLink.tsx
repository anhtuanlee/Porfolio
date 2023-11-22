'use client';
import Link from 'next/link';
import { IconsArrowRightUp } from '../../../public/access/icons';
import { useGlobalContext } from '@/context/store';
import s from './styles.module.scss';
import classNames from 'classnames/bind';
import { useStore } from '@/context/stores';

const cx = classNames.bind(s);

export default function ItemLink({ href = '', title, email }: ItemLinkProps) {
  const setIdLinkHover = useStore(state => state.setIdCursorHover);

  return (
    <Link
      className={cx(
        ` relative  inline-flex w-full cursor-pointer  flex-row items-center justify-start whitespace-nowrap lg:w-auto`,
        'item_link',
      )}
      href={href}
      onMouseEnter={() => setIdLinkHover('link')}
      onMouseLeave={() => setIdLinkHover(null)}
    >
      <IconsArrowRightUp className="mr-[1rem] h-8 w-8 flex-shrink-0" />
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
