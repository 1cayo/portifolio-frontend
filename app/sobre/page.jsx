import { profile, techUsed } from "@/lib/data";

export const metadata = { title: "Sobre" };

export default function Sobre() {
  return (
    <>
      <section className="page-head">
        <h1>Sobre</h1>
        {profile.bio.map((p) => <p key={p} className="lead">{p}</p>)}
        <p>
          <a href={profile.linkedin}>LinkedIn</a> ·{" "}
          <a href={`https://github.com/${profile.github}`}>GitHub</a>
        </p>
      </section>

      <section>
        <h2>Tecnologias e módulos deste app</h2>
        <div className="grid">
          {techUsed.map((g) => (
            <article key={g.group} className="card">
              <h3>{g.group}</h3>
              <ul className="tech-list">
                {g.items.map((i) => (
                  <li key={i.name}>
                    <strong>{i.name}</strong>
                    <span className="muted">{i.note}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
