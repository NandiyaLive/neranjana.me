// Source : https://leerob.io/snippets/spotify

import { getLastPlayed, getNowPlaying } from "../../components/Spotify";

export default async function handler(_, res) {
  const response = await getNowPlaying();
  let item;
  let isPlaying = false;

  if (response.status == 200) {
    const song = await response.json();

    isPlaying = song?.is_playing;
    item = song?.item;
  } else {
    const response = await getLastPlayed();
    const data = await response.json();

    item = data.items[0].track;
  }

  const title = item?.name;
  const artist = item?.artists.map((_artist) => _artist.name).join(", ");
  const album = item?.album.name;
  const albumImageUrl = item?.album.images[0].url;
  const songUrl = item?.external_urls.spotify;

  res.setHeader("Cache-Control", "public, s-maxage=60, stale-while-revalidate=30");

  return res.status(200).json({
    album,
    albumImageUrl,
    artist,
    isPlaying,
    songUrl,
    title,
  });
}
