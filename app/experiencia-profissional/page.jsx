import Timeline from "@/components/Timeline";
import { professional } from "@/lib/data";

export const metadata = { title: "Experiência Profissional" };

export default function Profissional() {
  return (
    <section className="page-head">
      <h1>Experiência profissional</h1>
      <Timeline items={professional} />
    </section>
  );
}
