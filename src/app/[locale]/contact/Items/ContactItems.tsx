'use client';

import ItemLink from '../../../../components/ItemLink/ItemLink';

export default function ContactItems({ title, links }: ItemContactProps) {
  return (
    <div className="flex w-full flex-row lg:gap-10 ">
      <h3
        className="w-1/2 flex-shrink-0 whitespace-normal pr-[25%] text-xl uppercase sm:pr-0 md:w-1/2 md:whitespace-nowrap 
      lg:w-auto  "
      >
        {title}
      </h3>
      <ul className="flex flex-col overflow-hidden lg:w-full">
        {links.length === 1 ? (
          <li className="inline-flex flex-row text-xs ">
            <ItemLink email={links[0].link} title={links[0].link} />
          </li>
        ) : (
          links.map((l: ILink, i: number) => {
            return (
              <li className="inline-flex flex-row gap-2 pb-4 text-xs" key={i}>
                <ItemLink href={l.link} title={l.sublink} />
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
}
