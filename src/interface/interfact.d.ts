interface ButtonProps {
  textScroll?: boolean;
  type: 'primary' | 'border' | 'secondary';
  title: string;
  disable?: boolean;
  Icons?: React.ReactNode;
  IconsSub?: React.ReactNode;
  className?: string;
  href?: string;
  to?: string;
  dowload?: boolean;
  disabled?: boolean;
  type?: string;
  onHandle?(): (value: string) => void;
}

interface TitleSectionProps {
  title: string;
  titlesub?: string;
  classNames?: string;
}

interface ItemServiceProps {
  title: string;
  subtitle: string;
  image: string;
}
interface ILink {
  sublink: string;
  link: string;
}
interface ItemContactProps {
  title: string;
  links: Object[ILink];
}

interface ItemLinkProps {
  href?: string;
  title: string;
  email?: boolean;
}

interface IDataWorks {
  title: string;
  href: string;
  type?: string;
  thumbNail: StaticImageData;
  isLastItem?: boolean;
  index?: number | null | undefined;
}

interface IContainerSlide {
  children: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>>;
  directionSlide: 'top' | 'left' | 'right' | 'bottom';
}
