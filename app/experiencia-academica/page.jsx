import Timeline from "@/components/Timeline";
import { academic } from "@/lib/data";

export const metadata = { title: "Experiência Acadêmica" };

export default function Academica() {
  return (
    <section className="page-head">
      <h1>Experiência acadêmica</h1>
      <Timeline items={academic} />
    </section>
  );
}
