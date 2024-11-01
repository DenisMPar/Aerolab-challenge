import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const queryParam = searchParams.get("query");
  const headers = req.headers;
  const authHeader = headers.get("authorization");
  const config = {
    method: "POST",
    headers: {
      "Client-ID": process.env.API_CLIENT_ID || "",
      Authorization: authHeader || "",
      "Content-Type": "text/plain",
    },
    body: `fields name,cover.url,slug; search "${queryParam}"; limit 10;`,
  };
  const res = await fetch("https://api.igdb.com/v4/games", config);
  const data = await res.json();

  return Response.json(data);
}
