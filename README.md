# Portfólio (Next.js)

## Como rodar
```bash
npm install
cp .env.example .env.local   # defina GITHUB_USER com o seu usuário
npm run dev
```
Abra http://localhost:3000

## Estrutura
- `app/` — páginas (Home, Sobre, Experiência Acadêmica, Experiência Profissional, Projetos)
- `components/` — Header e Timeline
- `lib/data.js` — dados mockados (edite com os seus)
- `lib/github.js` — integração com a API REST do GitHub
- `app/globals.css` — estilos
