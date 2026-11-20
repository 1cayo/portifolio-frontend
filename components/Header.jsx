"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import WeatherBadge from "@/components/WeatherBadge";
import TimeBadge from "@/components/TimeBadge";

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
        <Link href="/" className="brand" aria-label={`Página inicial de ${name || "Portfólio"}`}>
          <Image
            src="/profile.jpg"
            alt={name ? `Foto de perfil de ${name}` : "Foto de perfil"}
            width={42}
            height={42}
            priority
            className="brand-avatar"
          />
        </Link>
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
          <div className="header-widgets">
            <WeatherBadge />
            <TimeBadge />
          </div>
        </div>
      </div>
    </header>
  );
}
