import React, { useEffect, useState } from "react";
import { searchSongs } from "../../services/musicAPI";
import SongCard from "../../components/SongCard/SongCard";
import "./Home.css";

export default function Home() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      const data = await searchSongs("All"); // You can change query
      if (data && data.data) {
        setSongs(data.data);
      }
    };
    fetchSongs();
  }, []);

  return (
    <div className="home-container">
      <h1 className="home-title">Top Tracks</h1>
      <div className="songs-grid">
        {songs.map((song) => (
          <SongCard key={song.id} song={song} songsArray={songs} />
        ))}
      </div>
    </div>
  );
}
