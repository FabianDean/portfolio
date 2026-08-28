type SectionHeaderProps = {
  index: string;
  title: string;
};

export default function SectionHeader({ index, title }: SectionHeaderProps) {
  return (
    <div className="section-header">
      <span className="section-index" aria-hidden="true">
        {index}
      </span>
      <h2>
        {title}
        <span className="dot" aria-hidden="true">
          .
        </span>
      </h2>
      <span className="section-rule" aria-hidden="true" />
    </div>
  );
}
