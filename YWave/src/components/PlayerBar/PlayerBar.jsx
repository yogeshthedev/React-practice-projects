import React, { useContext, useState, useRef, useEffect } from "react";
import { PlayerContext } from "../../context/PlayerContext";
import "./PlayerBar.css";

export default function PlayerBar() {
  const {
    currentTrack,
    isPlaying,
    progress,
    pauseTrack,
    resumeTrack,
    handleNext,
    handlePrev,
    seekTo,
    volume,
    setVolume,
  } = useContext(PlayerContext);

  const progressRef = useRef();

  if (!currentTrack) return null;

  // Handle click on progress bar
  const handleProgressClick = (e) => {
    const rect = progressRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newTime = (clickX / rect.width) * currentTrack.duration; // Deezer preview is 30s
    seekTo(newTime);
  };

  const handleVolumeChange = (e) => {
    setVolume(parseFloat(e.target.value));
  };

  return (
    <div className="player-bar">
      <div className="track-info">
        <img src={currentTrack.album.cover_small} alt={currentTrack.title} />
        <div>
          <h4>{currentTrack.title}</h4>
          <p>{currentTrack.artist.name}</p>
        </div>
      </div>

      <div className="controls">
        <button onClick={handlePrev}>⏮️</button>
        {isPlaying ? (
          <button onClick={pauseTrack}>⏸️</button>
        ) : (
          <button onClick={resumeTrack}>▶️</button>
        )}
        <button onClick={handleNext}>⏭️</button>
      </div>

      <div className="progress-container">
        <div
          className="progress-bar"
          ref={progressRef}
          onClick={handleProgressClick}
        >
          <div
            className="progress-filled"
            style={{ width: `${(progress / 30) * 100}%` }}
          ></div>
        </div>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="volume-slider"
        />
      </div>
    </div>
  );
}
