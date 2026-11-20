import { Manrope } from "next/font/google";
import Header from "@/components/Header";
import { profile } from "@/lib/data";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: `${profile.name} — Portfólio`,
  description: profile.intro,
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={manrope.className}>
        <Header name={profile.name} />
        <main className="container">{children}</main>
        <footer className="footer">
          <div className="container">
            © {new Date().getFullYear()} {profile.name}. Feito com Next.js.
          </div>
        </footer>
      </body>
    </html>
  );
}
