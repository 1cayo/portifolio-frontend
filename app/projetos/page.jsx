import { getRepos } from "@/lib/github";
import { profile, projects } from "@/lib/data";

export const metadata = { title: "Projetos Desenvolvidos" };

export default async function Projetos() {
  const repos = await getRepos(profile.github);

  return (
    <>
      <section className="page-head">
        <h1>Projetos desenvolvidos</h1>
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

      <section>
        <h2>Repositórios recentes no GitHub</h2>
        {repos.length === 0 ? (
          <p className="muted">
            Não foi possível carregar os repositórios agora. Tente novamente mais tarde.
          </p>
        ) : (
          <div className="grid">
            {repos.map((r) => (
              <article key={r.id} className="card">
                <h3><a href={r.url}>{r.name}</a></h3>
                <p>{r.description}</p>
                <ul className="chips">
                  {r.language && <li>{r.language}</li>}
                  <li>★ {r.stars}</li>
                </ul>
              </article>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
