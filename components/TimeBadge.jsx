"use client";

import { useEffect, useState } from "react";

export default function TimeBadge() {
  const [timeZoneId, setTimeZoneId] = useState("America/Recife");
  const [timeString, setTimeString] = useState("");
  const [timeZoneName, setTimeZoneName] = useState("");
  const [loading, setLoading] = useState(true);

  // Busca o fuso horário oficial da API da Google Maps no backend
  useEffect(() => {
    let isMounted = true;

    async function fetchTimeZone() {
      try {
        const res = await fetch("/api/timezone");
        if (!res.ok) throw new Error("Falha ao buscar fuso");
        const data = await res.json();
        if (isMounted) {
          if (data.timeZoneId) {
            setTimeZoneId(data.timeZoneId);
          }
          if (data.timeZoneName) {
            setTimeZoneName(data.timeZoneName);
          }
          if (data.time) {
            setTimeString(data.time);
          }
        }
      } catch {
        // Mantém o fuso padrão silenciosamente em caso de indisponibilidade
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchTimeZone();

    return () => {
      isMounted = false;
    };
  }, []);

  // Mantém o relógio sincronizado localmente a cada segundo/minuto
  useEffect(() => {
    function updateClock() {
      try {
        const now = new Date();
        const formatted = new Intl.DateTimeFormat("pt-BR", {
          timeZone: timeZoneId,
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }).format(now);
        setTimeString(formatted);
      } catch {
        // Fallback para formatação local
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, "0");
        const minutes = String(now.getMinutes()).padStart(2, "0");
        setTimeString(`${hours}:${minutes}`);
      }
    }

    updateClock();
    const interval = setInterval(updateClock, 10000); // Checa a cada 10s

    return () => clearInterval(interval);
  }, [timeZoneId]);

  if (loading && !timeString) {
    return <span className="time-skeleton" aria-label="Carregando horário..." />;
  }

  return (
    <div
      className="time-badge"
      title={timeZoneName ? `${timeZoneName} (${timeZoneId})` : `Horário local (${timeZoneId})`}
      aria-label={`Horário local: ${timeString}`}
    >
      <span aria-hidden="true" className="time-icon">🕒</span>
      <span className="time-value">{timeString}</span>
    </div>
  );
}
