export default function Timeline({ items }) {
  return (
    <ol className="timeline">
      {items.map((i, index) => (
        <li key={i.title || index} className="timeline-item">
          {i.period && <span className="timeline-period">{i.period}</span>}
          <h3>{i.title}</h3>
          {i.place && <p className="muted">{i.place}</p>}
          {i.description && <p>{i.description}</p>}
        </li>
      ))}
    </ol>
  );
}
