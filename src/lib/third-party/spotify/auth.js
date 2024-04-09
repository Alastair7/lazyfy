import axios from "axios";
import { env } from "$lib/env";

const baseURL = "https://api.spotify.com";

const spotifyClientSecret = env.SPOTIFY_CLIENT_SECRET;
const spotifyClientId = env.SPOTIFY_CLIENT_ID;
