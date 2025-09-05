import axios from "axios";

// First create the axios instance
const API = axios.create({
  baseURL: "https://deezerdevs-deezer.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": "d1fdf68981mshdb97463609de156p1dc3d5jsnfa7024c0d788", 
    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
  },
});

// Then export the API helper function
export const searchSongs = async (query) => {
  try {
    const response = await API.get(`/search?q=${query}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching songs:", error);
    return null;
  }
};

export default API;
