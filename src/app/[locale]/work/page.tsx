'use client';

import { dataWork } from '@/data/data';
import ItemSelects from '../../../components/ItemSelects/ItemSelect';
import TitleSection from '../../../components/TitleSection/TitleSection';
import { useGlobalContext } from '../../../context/store';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Container from '@/components/Container/Container';

export default function Work() {
  const t = useTranslations('Work');
  const { pathImgHover, isHoverImg } = useGlobalContext();
  return (
    <Container>
      <div className="mx-[1rem] mt-[30vh] sm:mx-[section]  ">
        <div className="lg:flex lg:h-[65vh] lg:flex-row lg:justify-between lg:gap-10">
          <section className="hidden lg:flex lg:h-full lg:w-1/2 lg:items-center lg:justify-center">
            <figure className="overflow-hidden lg:w-1/2 lg:rounded-tr-[3rem]">
              {isHoverImg && (
                <Image fill loading="lazy" alt="img-demo" src={pathImgHover} />
              )}
            </figure>
          </section>
          <div className="w-full flex-shrink-0 lg:w-1/2">
            <div className="py-2">
              <TitleSection title={t('title_section')} />
            </div>
            <div
              className="no-scrollbar flex w-full flex-col border-t-2 border-solid border-white sm:max-h-[50vh] sm:overflow-scroll lg:pb-4
            "
            >
              {dataWork.map((data: IDataWorks, index: number) => {
                let id = 200 + index;
                return (
                  <ItemSelects
                    key={index}
                    title={data.title}
                    href={data.href}
                    type={data.type}
                    thumbNail={data.thumbNail}
                    isLastItem={index === dataWork.length - 1}
                    index={index}
                    listImgDetails={data.listImgDetails}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
