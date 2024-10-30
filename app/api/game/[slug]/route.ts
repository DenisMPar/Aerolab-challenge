import { NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const slug = (await params).slug;
  const res = await fetch("https://api.igdb.com/v4/games", {
    method: "POST",
    headers: {
      "Client-ID": process.env.DB_CLIENT_ID || "",
      Authorization: `Bearer ${process.env.DB_ACCESS_TOKEN}`,
      "Content-Type": "text/plain",
    },
    body: `fields name,cover.url,first_release_date,involved_companies.company.name,platforms.name,rating,screenshots.url,summary,genres.name,similar_games.cover.url; where slug = "${slug}";`,
  });
  const data = await res.json();

  return Response.json({ data });
}
