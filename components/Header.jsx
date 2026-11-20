"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import WeatherBadge from "@/components/WeatherBadge";

const links = [
  { href: "/", label: "Home" },
  { href: "/sobre", label: "Sobre" },
  { href: "/experiencia-academica", label: "Acadêmica" },
  { href: "/experiencia-profissional", label: "Profissional" },
  { href: "/projetos", label: "Projetos" },
];

export default function Header({ name }) {
  const pathname = usePathname();
  return (
    <header className="header">
      <div className="container header-inner">
        <Link href="/" className="brand">{name}</Link>
        <div className="header-nav-wrap">
          <nav aria-label="Principal">
            <ul className="nav">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    aria-current={pathname === l.href ? "page" : undefined}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <WeatherBadge />
        </div>
      </div>
    </header>
  );
}
