import { HTMLMotionProps } from 'framer-motion';

declare global {
    type TCustomMotionDivProps = HTMLDivElement & {
        initial: 'initial' | 'final' | 'spring';
        // any other thing
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
    type TInputIdCursor = 'hero' | 'link' | 'icon' | number | null;

    type TIdCursorHover = {
        idCursorHover: null;
        setIdCursorHover: (newId: TInputIdCursor) => TInputIdCursor;
    };
    type TMenuNav = {
        isOpenMenuHeader: false;
        setIsOpenMenuHeader: (isOpen: boolean) => boolean;
    };
}
