import { NextResponse } from "next/server";

export const revalidate = 900; // Cache de 15 minutos

export async function GET() {
  const apiKey = process.env.WEATHER_API_KEY;
  const city = process.env.WEATHER_CITY || "Recife";

  // Se a chave não estiver configurada, responde com fallback elegante sem quebrar a UI
  if (!apiKey) {
    return NextResponse.json({
      configured: false,
      temp: 28,
      city,
      condition: "Ensolarado",
      icon: null,
    });
  }

  try {
    const encodedCity = encodeURIComponent(city.trim());
    const res = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodedCity}&lang=pt`,
      { next: { revalidate: 900 } }
    );

    if (!res.ok) {
      return NextResponse.json(
        { error: "Falha ao consultar a API de clima" },
        { status: res.status }
      );
    }

    const data = await res.json();

    // Expõe apenas os dados estritamente necessários ao cliente
    const payload = {
      configured: true,
      temp: Math.round(data.current?.temp_c ?? 0),
      city: data.location?.name || city,
      condition: data.current?.condition?.text || "",
      icon: data.current?.condition?.icon
        ? (data.current.condition.icon.startsWith("//")
            ? `https:${data.current.condition.icon}`
            : data.current.condition.icon)
        : null,
    };

    return NextResponse.json(payload, {
      headers: {
        "Cache-Control": "public, s-maxage=900, stale-while-revalidate=300",
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Não foi possível carregar as informações do tempo." },
      { status: 500 }
    );
  }
}
