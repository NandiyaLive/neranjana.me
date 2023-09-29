import axios from "axios";
import { URLSearchParams } from "url";

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const NOW_PLAYING_ENDPOINT = "https://api.spotify.com/v1/me/player/currently-playing";
const LAST_PLAYED_ENDPOINT = "https://api.spotify.com/v1/me/player/recently-played?limit=1";
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  try {
    const response = await axios({
      url: TOKEN_ENDPOINT,
      method: "POST",
      data: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token,
      }).toString(),
      headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    return response.data.access_token;
  } catch (error) {
    console.log(error);
  }
};

export const getNowPlaying = async (accessToken) => {
  const { data } = await axios.get(NOW_PLAYING_ENDPOINT, {
    headers: {
      "Cache-Control": "max-age=300",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  console.log("[SPOTIFY] Now Playing", data.item.name);

  return data;
};

export const getLastPlayed = async (accessToken) => {
  const { data } = await axios.get(LAST_PLAYED_ENDPOINT, {
    headers: {
      "Cache-Control": "max-age=300",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  console.log("[SPOTIFY] Last Played", data.items[0].track.name);

  return data;
};

const getSongData = async () => {
  const accessToken = await getAccessToken();

  const response = await getNowPlaying(accessToken);
  let item;
  let isPlaying = false;

  if (response.status == 200) {
    if (response.is_playing === false) {
      const response = await getLastPlayed(accessToken);

      item = response.items[0].track;
    }
  } else {
    isPlaying = response.is_playing;
    item = response.item;
  }

  return {
    isPlaying,
    title: item.name,
    album: item.album.name,
    artist: item.album.artists[0].name,
    albumImageUrl: item.album.images[0].url,
    songUrl: item.external_urls.spotify,
  };
};

export default getSongData;
