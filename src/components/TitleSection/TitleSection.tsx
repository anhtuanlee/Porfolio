export default function TitleSection({ title, titlesub }: TitleSectionProps) {
  return (
    <h3 className="  text- pb-4 pt-8 text-4xl font-semibold uppercase text-white">
      <span>{title} </span>
      <span className="text-primary">{titlesub}</span>
    </h3>
  );
}
