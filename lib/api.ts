export async function fetchApiGet(path: RequestInfo) {
  const BASE_API_URL = "http://localhost:3000/api";
  const url = BASE_API_URL + path;

  const res = await fetch(url, {
    method: "GET",
  });
  const status = res.status;
  const resJson = await res.json();
  if (status >= 400) throw new Error(resJson.message);
  if (status >= 200 && status < 300) return resJson;
}

export interface GameDetail {
  id: number;
  name: string;
  rating?: number;
  first_release_date: number;
  slug: string;
  cover?: {
    id: number;
    url: string;
  };
  genres: {
    id: number;
    name: string;
  }[];
  involved_companies: {
    id: number;
    company: {
      id: number;
      name: string;
    };
  }[];
  platforms: {
    id: number;
    name: string;
  }[];
  screenshots: {
    id: number;
    url: string;
  }[];
  similar_games: {
    id: number;
    slug: string;
    name: string;
    cover: {
      id: number;
      url: string;
    };
  }[];
  summary: string;
}

export async function getGameDetails(slug: string): Promise<GameDetail | null> {
  try {
    const res = await fetchApiGet(`/game/${slug}`);
    return res.data[0];
  } catch (error) {
    console.log("error on fetch :(", error);
    return null;
  }
}
