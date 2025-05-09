import SpotifyWebApi from "spotify-web-api-node";

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  refreshToken: process.env.SPOTIFY_REFRESH_TOKEN,
});

async function refreshAccessToken() {
  try {
    const data = await spotifyApi.refreshAccessToken();
    spotifyApi.setAccessToken(data.body["access_token"]);
    return data.body["access_token"];
  } catch (err) {
    console.error("Could not refresh access token", err);
    throw err;
  }
}

export async function getNowPlaying() {
  await refreshAccessToken();

  try {
    const response = await spotifyApi.getMyCurrentPlayingTrack();

    if (response.statusCode === 204 || !response.body.item) {
      const lastPlayed = await spotifyApi.getMyRecentlyPlayedTracks({
        limit: 1,
      });
      return {
        isPlaying: false,
        item: lastPlayed.body.items[0].track,
      };
    }

    return {
      isPlaying: response.body.is_playing,
      item: response.body.item,
      progress_ms: response.body.progress_ms,
    };
  } catch (err) {
    console.error("Error fetching now playing", err);
    return null;
  }
}
