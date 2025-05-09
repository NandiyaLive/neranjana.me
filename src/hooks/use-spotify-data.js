import { useQuery } from "@tanstack/react-query";

async function fetchSpotifyData() {
  const response = await fetch("/api/spotify");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}

export function useSpotifyData() {
  return useQuery({
    queryKey: ["spotify"],
    queryFn: fetchSpotifyData,
    retry: 2,
    refetchOnWindowFocus: true,
  });
}
