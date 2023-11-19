export default function TitleSection({ title, titlesub }: TitleSectionProps) {
  return (
    <h3 className="  text- pb-4 pt-8   font-semibold uppercase text-white">
      {title}
      <span className="text-primary">{titlesub}</span>
    </h3>
  );
}
