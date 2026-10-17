export function SectionHeading({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return <div className="section-head">{eyebrow && <div className="eyebrow">{eyebrow}</div>}<h2 style={{marginTop: eyebrow ? 12 : 0}}>{title}</h2>{description && <p>{description}</p>}</div>;
}
