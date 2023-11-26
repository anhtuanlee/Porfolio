import { HTMLMotionProps } from 'framer-motion';

declare global {
    type TCustomMotionDivProps = HTMLDivElement & {
        initial: 'initial' | 'final' | 'spring';
        // any other thing
    };
    type TContainerLayout = {
        children: ReactNode;
        classNames?: string;
    };
    type TFramer = {
        children: React.ReactNode;
        isActive?: boolean;
    };
    type TDataFooter = {
        title: string;
        href: string;
        icon: () => JSX.Element;
        id: number;
    }[];
    type TInputIdCursor =
        | 'hero'
        | 'link'
        | 'icon'
        | number
        | null
        | `text${number}`;

    type TIdCursorHover = {
        idCursorHover: null;
        setIdCursorHover: (newId: TInputIdCursor) => TInputIdCursor;
    };
    type TMenuNav = {
        isOpenMenuHeader: false;
        setIsOpenMenuHeader: (isOpen: boolean) => boolean;
    };
    type TDataHoverImg = {
        path: string;
        title: string;
    };
    type TImgHoverStore = {
        data: TDataHoverImg | undefined;
        isHoverImg: boolean;
        setIsHover: (hover: boolean) => boolean;
        setPathImgHover: (data: TDataHoverImg | undefined) => TDataHoverImg;
    };
    type TImageSlide = {
        href: string | undefined;
        alt: string;
    };
}
