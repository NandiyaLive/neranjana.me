import { getNowPlaying } from "@/lib/spotify";

export async function GET(request) {
  // Check origin
  const allowedOrigins = [
    "http://localhost:3000",
    "https://neranjana.me",
    "https://neranjana.me/",
  ];

  const origin = request.headers.get("origin");

  if (origin && !allowedOrigins.includes(origin)) {
    return new Response("Forbidden", { status: 403 });
  }

  const response = await getNowPlaying();

  if (!response) {
    return new Response(JSON.stringify({ error: "Unable to fetch data" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  const data = response.isPlaying
    ? {
        ...response,
        progress_ms: response.progress_ms || 0,
      }
    : response;

  const headers = {
    "Content-Type": "application/json",
    "Cache-Control": "public, s-maxage=60, stale-while-revalidate=30",
  };

  // Add CORS headers only for allowed origins
  if (origin && allowedOrigins.includes(origin)) {
    headers["Access-Control-Allow-Origin"] = origin;
    headers["Vary"] = "Origin";
  }

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: headers,
  });
}
