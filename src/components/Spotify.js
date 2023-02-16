// Source : https://leerob.io/snippets/spotify

import fetch from "isomorphic-unfetch";
import querystring from "querystring";

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const NOW_PLAYING_ENDPOINT = "https://api.spotify.com/v1/me/player/currently-playing";
const LAST_PLAYED_ENDPOINT = "https://api.spotify.com/v1/me/player/recently-played?limit=1";
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Cache-Control": "max-age=3600",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: querystring.stringify({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });

  return response.json();
};

export const getNowPlaying = async () => {
  const { access_token } = await getAccessToken();

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      "Cache-Control": "max-age=3600",
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const getLastPlayed = async () => {
  const { access_token } = await getAccessToken();

  return fetch(LAST_PLAYED_ENDPOINT, {
    headers: {
      "Cache-Control": "max-age=3600",
      Authorization: `Bearer ${access_token}`,
    },
  });
};