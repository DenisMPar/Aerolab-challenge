import { AccessDataType, getAccessData, setAccessData } from "@/lib/igdb-token";
import { NextResponse } from "next/server";

export async function middleware() {
  let accessData = getAccessData();
  const isExpired =
    accessData &&
    Date.now() > accessData.timestamp + accessData.expires_in * 1000;
  if (!accessData || isExpired) {
    const newAccessData = await fetchNewAccessToken();
    if (newAccessData) {
      setAccessData(newAccessData);
      accessData = newAccessData;
    } else {
      return NextResponse.error();
    }
  }

  const response = NextResponse.next();
  response.headers.set("Authorization", `Bearer ${accessData.access_token}`);

  return response;
}

async function fetchNewAccessToken(): Promise<AccessDataType | null> {
  const res = await fetch("https://id.twitch.tv/oauth2/token", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      client_id: process.env.API_CLIENT_ID,
      client_secret: process.env.API_CLIENT_SECRET,
      grant_type: "client_credentials",
    }),
  });

  if (res.ok) {
    const data = await res.json();
    return {
      ...data,
      timestamp: Date.now(),
    };
  }

  console.error("Error al obtener un nuevo token de acceso:", res.statusText);
  return null;
}
export const config = {
  matcher: ["/api/game", "/api/game/:slug*"],
};
