"use client";

import { useSpotifyData } from "@/hooks/use-spotify-data";

export default function NowPlaying() {
  const { data, isLoading, error } = useSpotifyData();

  if (isLoading) {
    return (
      <div className="flex items-center gap-2">
        <div className="w-12 h-12 bg-gray-200 rounded animate-pulse" />
        <div className="space-y-2">
          <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
          <div className="h-3 w-24 bg-gray-200 rounded animate-pulse" />
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500">Failed to load Spotify data</div>;
  }

  if (!data?.item) {
    return <div className="text-gray-500">No recent Spotify activity</div>;
  }

  return (
    <div className="now-playing">
      {data.isPlaying ? (
        <p className="text-sm text-green-500 mb-1">Currently playing</p>
      ) : (
        <p className="text-sm text-gray-500 mb-1">Last played</p>
      )}
      <a
        href={data.item.external_urls.spotify}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 group"
      >
        <img
          src={data.item.album.images[0].url}
          alt={data.item.name}
          width={48}
          height={48}
          className="rounded shadow-md group-hover:shadow-lg transition-shadow"
        />
        <span className="max-w-xs">
          <strong className="block font-medium text-gray-900 group-hover:text-green-600 transition-colors truncate">
            {data.item.name}
          </strong>
          <span className="text-gray-600 text-sm">
            {data.item.artists.map((artist) => artist.name).join(", ")}
          </span>
        </span>
      </a>
    </div>
  );
}
