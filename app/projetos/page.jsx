import { projects } from "@/lib/data";

export const metadata = { title: "Projetos Desenvolvidos" };

export default function Projetos() {

  return (
    <>
      <section className="page-head">
        <h1>Projetos desenvolvidos</h1>
        <div className="grid">
          {projects.map((p) => (
            <article key={p.name} className="card">
              <h3>
                {p.url ? (
                  <a href={p.url} target="_blank" rel="noopener noreferrer">
                    {p.name}
                  </a>
                ) : (
                  p.name
                )}
              </h3>
              <p>{p.description}</p>
              {p.stack && p.stack.length > 0 && (
                <ul className="chips">
                  {p.stack.map((s) => <li key={s}>{s}</li>)}
                </ul>
              )}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
