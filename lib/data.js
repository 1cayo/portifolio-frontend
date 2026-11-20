// Dados mockados — troque pelos seus quando quiser.

export const profile = {
  name: "CAYO",
  role: "Desenvolvedor Front-end",
  location: "Recife, PE",
  email: "seu@email.com",
  github: process.env.GITHUB_USER || "octocat",
  linkedin: "https://linkedin.com/in/seu-perfil",
  intro:
    "Construo interfaces simples, acessíveis e rápidas. Gosto de transformar ideias em produtos que as pessoas realmente usam.",
  bio: [
    "Sou desenvolvedor com foco em front-end e experiência em React e Next.js. Curto trabalhar perto de design e de quem usa o produto.",
    "Fora do código, gosto de estudar acessibilidade, contribuir com projetos abertos e compartilhar o que aprendo.",
  ],
};

export const academic = [
  {
    period: "2025.2 – 2027.2",
    title: "Sistemas para Internet | UNICAP",
    place: "Universidade Católica de Pernambuco",
    description: "",
  },
];

export const professional = [
  {
    period: "",
    title: "Desenvolvedor Frontend",
    place: "Construtora Baptista Leal",
    description: "Tipo de contrato: Freelancer",
  },
];

export const projects = [
  {
    name: "Agenda Simples",
    description: "App de agendamentos com calendário, lembretes e login.",
    stack: ["React", "Node.js", "PostgreSQL"],
    url: "#",
  },
  {
    name: "Painel de Finanças",
    description: "Dashboard com gráficos de receitas e despesas por categoria.",
    stack: ["Next.js", "Chart.js"],
    url: "#",
  },
  {
    name: "Loja Leve",
    description: "E-commerce de demonstração com carrinho e checkout simulado.",
    stack: ["Next.js", "CSS Modules"],
    url: "#",
  },
];

// Tecnologias e módulos usados neste app.
export const techUsed = [
  {
    group: "Framework", items: [
      { name: "Next.js 14", note: "App Router, rotas por pastas e Server Components" },
      { name: "React 18", note: "Componentes e hooks" },
      { name: "react-dom", note: "Renderização no navegador" },
    ]
  },
  {
    group: "Módulos do Next.js", items: [
      { name: "next/link", note: "Navegação entre páginas sem recarregar" },
      { name: "next/navigation", note: "usePathname para destacar o menu ativo" },
      { name: "next/font/google", note: "Carregamento otimizado da fonte Manrope" },
    ]
  },
  {
    group: "Dados e API", items: [
      { name: "fetch (nativo)", note: "Chamada à API REST do GitHub com revalidate de 1 hora" },
      { name: "GitHub REST API", note: "Lista os repositórios públicos mais recentes" },
    ]
  },
  {
    group: "Estilo e qualidade", items: [
      { name: "CSS puro", note: "Variáveis CSS e grid, sem bibliotecas extras" },
      { name: "ESLint", note: "eslint-config-next para manter o código consistente" },
    ]
  },
];
