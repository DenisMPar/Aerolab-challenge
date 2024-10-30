import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const queryParam = searchParams.get("query");
  const res = await fetch("https://api.igdb.com/v4/games", {
    method: "POST",
    headers: {
      "Client-ID": process.env.DB_CLIENT_ID || "",
      Authorization: `Bearer ${process.env.DB_ACCESS_TOKEN}`,
      "Content-Type": "text/plain",
    },
    body: `fields name,cover.url,slug; search "${queryParam}"; limit 10;`,
  });
  const data = await res.json();

  return Response.json(data);
}
