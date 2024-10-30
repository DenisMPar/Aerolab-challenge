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
