// Integração com a API REST do GitHub.
// Se a chamada falhar (limite de requisições, sem internet), retorna lista vazia
// e a página usa os projetos mockados.

export async function getRepos(user, limit = 6) {
  try {
    const res = await fetch(
      `https://api.github.com/users/${user}/repos?sort=updated&per_page=${limit}`,
      {
        headers: { Accept: "application/vnd.github+json" },
        next: { revalidate: 3600 }, // cache de 1 hora
      }
    );
    if (!res.ok) return [];
    const data = await res.json();
    return data
      .filter((r) => !r.fork)
      .map((r) => ({
        id: r.id,
        name: r.name,
        description: r.description || "Sem descrição.",
        language: r.language,
        stars: r.stargazers_count,
        url: r.html_url,
      }));
  } catch {
    return [];
  }
}
