'use client';
import Link from 'next/link';
import { IconsArrowRightUp } from '../../../public/access/icons';
import { useGlobalContext } from '@/context/store';

export default function ItemLink({ href, title, email }: ItemLinkProps) {
  const { isForm, setIsForm } = useGlobalContext();
  const handleOpenForm = () => {
    console.log(isForm);
    setIsForm(!isForm);
  };

  let Comp: any = Link;
  if (email) {
    Comp = 'span';
  }
  return (
    <Comp
      onClick={email && handleOpenForm}
      className="font-custom link_custom relative  inline-flex  w-full cursor-pointer  flex-row items-center justify-start whitespace-nowrap   text-[1rem] lg:w-auto  "
      href={href}
    >
      <IconsArrowRightUp className="mr-[0.5rem] h-3 w-3 flex-shrink-0" />
      <span className="inline w-full overflow-hidden text-ellipsis">
        {title}
      </span>
    </Comp>
  );
}
