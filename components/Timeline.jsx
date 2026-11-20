export default function Timeline({ items }) {
  return (
    <ol className="timeline">
      {items.map((i) => (
        <li key={i.title} className="timeline-item">
          <span className="timeline-period">{i.period}</span>
          <h3>{i.title}</h3>
          <p className="muted">{i.place}</p>
          <p>{i.description}</p>
        </li>
      ))}
    </ol>
  );
}
