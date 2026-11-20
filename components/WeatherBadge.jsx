"use client";

import { useEffect, useState } from "react";

export default function WeatherBadge() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function fetchWeather() {
      try {
        const res = await fetch("/api/weather");
        if (!res.ok) throw new Error("Erro na requisição");
        const data = await res.json();
        if (isMounted) {
          setWeather(data);
        }
      } catch {
        if (isMounted) {
          setWeather(null);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchWeather();

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return <span className="weather-skeleton" aria-label="Carregando clima..." />;
  }

  if (!weather || weather.error) {
    return null;
  }

  return (
    <div
      className="weather-badge"
      title={`${weather.city}: ${weather.condition || "Temperatura atual"}`}
      aria-label={`Temperatura em ${weather.city}: ${weather.temp}°C, ${weather.condition}`}
    >
      {weather.icon ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={weather.icon}
          alt={weather.condition || "Clima"}
          width={20}
          height={20}
          className="weather-icon"
        />
      ) : (
        <span aria-hidden="true" className="weather-emoji">🌤️</span>
      )}
      <span className="weather-temp">{weather.temp}°C</span>
      <span className="weather-city muted">{weather.city}</span>
    </div>
  );
}
