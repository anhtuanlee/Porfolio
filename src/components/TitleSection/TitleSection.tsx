export default function TitleSection({
  title,
  titlesub,
  classNames,
}: TitleSectionProps) {
  return (
    <h3
      className={`${classNames} hover:font-reset pb-4 pt-8  font-semibold uppercase text-white transition-all duration-300`}
    >
      {title}
      <span className="text-primary">{titlesub}</span>
    </h3>
  );
}
