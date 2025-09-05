import React, { useContext } from "react";
import "./SongCard.css";
import { PlayerContext } from "../../context/PlayerContext";
import { FaPlay } from "react-icons/fa"; 

export default function SongCard({ song, songsArray }) {
  const { playTrack } = useContext(PlayerContext);

  const handlePlay = (e) => {
    e.stopPropagation(); // Prevent parent click if needed
    playTrack(song, songsArray);
  };

  return (
    <div className="song-card" onClick={handlePlay}>
      <div className="album-container">
        <img src={song.album.cover_medium} alt={song.title} />
        <div className="play-icon" onClick={handlePlay}>
          <FaPlay />
        </div>
      </div>
      <h3>{song.title}</h3>
      <p>{song.artist.name}</p>
    </div>
  );
}
