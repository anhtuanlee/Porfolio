'use client';
import { useTranslations } from 'next-intl';
import {
  IconClose,
  IconInbox,
  IconMail,
  IconUser,
} from '../../../public/access/icons';
import Button from '../Button/Button';
import { useGlobalContext } from '@/context/store';
export default function Form() {
  const { setIsForm } = useGlobalContext();
  const t = useTranslations('Form');
  return (
    <div
      className="container  fixed left-1/2 top-1/2 z-[999999999] m-auto flex h-[90vh] -translate-x-1/2 -translate-y-1/2 
      items-center"
      id="nav"
    >
      <div className="w-full p-4 ">
        <div className="mx-auto md:w-2/3 md:p-6 lg:w-1/2">
          <div className="relative rounded bg-black bg-opacity-30 px-8 pb-8 pt-6 drop-shadow-2xl backdrop-blur-sm">
            <span
              className="absolute right-2 top-2"
              onClick={() => setIsForm(false)}
            >
              <IconClose />
            </span>
            <form
              method="POST"
              action="https://formsubmit.co/anhtuan.devfe@gmail.com"
            >
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="mb-2 block font-bold text-white"
                >
                  <span className="text-white">&nbsp;*</span>
                  {t('label_name')}
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <IconUser />
                  </div>
                  <input
                    id="username"
                    type="text"
                    name="Name"
                    required
                    className="mb-3 block w-full appearance-none rounded border-2 border-[#e2e7dc] px-4 py-2 pr-10 leading-tight text-white shadow transition duration-500 ease-in-out focus:border-bghover focus:bg-white focus:outline-none"
                    placeholder="Mr.A..."
                  />
                </div>
                {/* <strong className="text-xs italic text-white">
                  Name is require
                </strong> */}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="mb-2 block font-bold text-white"
                >
                  <span className="text-white">&nbsp;*</span>
                  {t('label_email')}
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <IconMail />
                  </div>
                  <input
                    id="email"
                    type="email"
                    name="Email"
                    required
                    className="mb-3 block w-full appearance-none rounded border-2 border-[#e2e7dc] px-4 py-2 pr-10 leading-tight text-white shadow transition duration-500 ease-in-out focus:border-bghover focus:bg-white focus:outline-none"
                    placeholder="you@example.com"
                  />
                </div>
                {/* <strong className="text-xs italic text-white">
                  Email is require
                </strong> */}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="messenger"
                  className="mb-2 block font-bold text-white"
                >
                  <span className="text-white">&nbsp;*</span>
                  {t('label_messenger')}
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <IconInbox />
                  </div>
                  <textarea
                    required
                    rows={5}
                    placeholder={t('button_title')}
                    name="Messenger"
                    id="messenger"
                    typeof="text"
                    className="mb-3 block w-full appearance-none rounded border-2 border-[#e2e7dc] px-4 py-2 pr-10 leading-tight text-white shadow transition duration-500 ease-in-out focus:border-bghover focus:bg-white focus:outline-none"
                  />
                </div>
              </div>
              <div className="text-center ">
                <Button type="submit" primary title={t('button_title')} />
              </div>

              {/* 
              Fomr submit 
              */}
              <input
                type="hidden"
                name="_subject"
                value="Messenger from Portfolio"
              />
              <input type="hidden" name="_next" value={window.location.href} />
              <input type="hidden" name="_captcha" value="false" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
