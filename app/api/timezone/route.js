import { NextResponse } from "next/server";

export const revalidate = 3600; // Cache de 1 hora

function getFormattedTime(timeZoneId) {
  try {
    return new Intl.DateTimeFormat("pt-BR", {
      timeZone: timeZoneId,
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(new Date());
  } catch {
    return new Intl.DateTimeFormat("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(new Date());
  }
}

export async function GET() {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const lat = process.env.LOCATION_LAT || "-8.0476";
  const lng = process.env.LOCATION_LNG || "-34.8770";
  const defaultTimeZone = "America/Recife";

  // Se a chave não foi configurada, responde com fuso padrão de forma resiliente
  if (!apiKey) {
    return NextResponse.json({
      configured: false,
      timeZoneId: defaultTimeZone,
      timeZoneName: "Horário Padrão de Brasília",
      time: getFormattedTime(defaultTimeZone),
    });
  }

  try {
    const timestamp = Math.floor(Date.now() / 1000);
    const locationParam = encodeURIComponent(`${lat},${lng}`);
    const url = `https://maps.googleapis.com/maps/api/timezone/json?location=${locationParam}&timestamp=${timestamp}&key=${encodeURIComponent(apiKey)}`;

    const res = await fetch(url, { next: { revalidate: 3600 } });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Falha na comunicação com a API de fuso horário" },
        { status: res.status }
      );
    }

    const data = await res.json();

    if (data.status !== "OK") {
      // Fallback seguro caso a cota ou chave apresente inconsistência
      return NextResponse.json({
        configured: true,
        timeZoneId: defaultTimeZone,
        timeZoneName: "Horário Padrão de Brasília",
        time: getFormattedTime(defaultTimeZone),
        apiStatus: data.status,
      });
    }

    const timeZoneId = data.timeZoneId || defaultTimeZone;

    return NextResponse.json(
      {
        configured: true,
        timeZoneId,
        timeZoneName: data.timeZoneName || "",
        time: getFormattedTime(timeZoneId),
        rawOffset: data.rawOffset,
        dstOffset: data.dstOffset,
      },
      {
        headers: {
          "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=600",
        },
      }
    );
  } catch {
    return NextResponse.json(
      { error: "Não foi possível obter o horário da localização." },
      { status: 500 }
    );
  }
}
