type Props = { eyebrow: string; title: string; children?: React.ReactNode };

export function SectionHeading({ eyebrow, title, children }: Props) {
  return <div className="section-heading reveal"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{children}</div>;
}
