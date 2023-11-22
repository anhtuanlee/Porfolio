'use client';
import {
  useContext,
  createContext,
  SetStateAction,
  useState,
  Dispatch,
} from 'react';

interface ContextProps {
  isForm: boolean;
  setIsForm: Dispatch<SetStateAction<boolean>>;
  isHoverImg: boolean;
  setIsHoverImg: Dispatch<SetStateAction<boolean>>;
  pathImgHover: string;
  setPathImgHover: Dispatch<SetStateAction<string>>;
  isOpenMenuHeader: boolean;
  setIsOpenMenuHeader: Dispatch<SetStateAction<boolean>>;
  idMenuHover: null | number;
  setIdMenuHover: Dispatch<SetStateAction<null | number>>;
}

const GlobalContext = createContext<ContextProps>({
  isForm: false,
  setIsForm: (): boolean => false,
  isHoverImg: false,
  setIsHoverImg: (): boolean => false,
  pathImgHover: '',
  setPathImgHover: (): string => '',
  isOpenMenuHeader: false,
  setIsOpenMenuHeader: (): boolean => false,
  idMenuHover: null,
  setIdMenuHover: (): number | null => null,
});

export const GlobalContextProvider = ({ children }: any) => {
  const [isForm, setIsForm] = useState<boolean>(false);
  const [isHoverImg, setIsHoverImg] = useState<boolean>(false);
  const [pathImgHover, setPathImgHover] = useState<string>('');
  const [isOpenMenuHeader, setIsOpenMenuHeader] = useState<boolean>(false);
  const [idMenuHover, setIdMenuHover] = useState<null | number>(null);
  return (
    <GlobalContext.Provider
      value={{
        isForm,
        setIsForm,
        isHoverImg,
        setIsHoverImg,
        pathImgHover,
        setPathImgHover,
        isOpenMenuHeader,
        setIsOpenMenuHeader,
        idMenuHover,
        setIdMenuHover,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
