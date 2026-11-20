import Link from "next/link";
import { profile, projects } from "@/lib/data";

export default function Home() {
  return (
    <>
      <section className="hero">
        <p className="muted">{profile.location}</p>
        <h1>
          Olá, eu sou Cayo.<br />
          {profile.role}.
        </h1>
        <p className="lead">{profile.intro}</p>
        <div className="actions">
          <Link href="/projetos" className="btn">Ver projetos</Link>
          <a href={`mailto:${profile.email}`} className="btn btn-ghost">Enviar e-mail</a>
        </div>
      </section>

      <section>
        <h2>Em destaque</h2>
        <div className="grid">
          {projects.map((p) => (
            <article key={p.name} className="card">
              <h3>{p.name}</h3>
              <p>{p.description}</p>
              <ul className="chips">
                {p.stack.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
