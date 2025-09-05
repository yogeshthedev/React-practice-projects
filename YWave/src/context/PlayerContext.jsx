import React, { createContext, useState, useRef, useEffect } from "react";

// Create the context
export const PlayerContext = createContext();

// Provider component
export const PlayerProvider = ({ children }) => {
  const audioRef = useRef(new Audio()); // Single audio element
  const [currentTrack, setCurrentTrack] = useState(null);
  const [queue, setQueue] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [progress, setProgress] = useState(0);

  // Sync audio volume with state
  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);

  // Update progress as the song plays
  useEffect(() => {
    const audio = audioRef.current;
    const updateProgress = () => setProgress(audio.currentTime);

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("ended", handleNext);

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("ended", handleNext);
    };
  }, [queue]);

  const playTrack = (track, trackQueue = []) => {
    setCurrentTrack(track);
    setQueue(trackQueue);
    audioRef.current.src = track.preview; // Deezer's 30-sec preview
    audioRef.current.play();
    setIsPlaying(true);
  };

  const pauseTrack = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const resumeTrack = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const handleNext = () => {
    if (!queue.length) return;
    const currentIndex = queue.findIndex((t) => t.id === currentTrack.id);
    const nextTrack = queue[currentIndex + 1];
    if (nextTrack) {
      playTrack(nextTrack, queue);
    } else {
      setIsPlaying(false); // No more songs
    }
  };

  const handlePrev = () => {
    if (!queue.length) return;
    const currentIndex = queue.findIndex((t) => t.id === currentTrack.id);
    const prevTrack = queue[currentIndex - 1];
    if (prevTrack) {
      playTrack(prevTrack, queue);
    }
  };

  const seekTo = (seconds) => {
    audioRef.current.currentTime = seconds;
    setProgress(seconds);
  };

  return (
    <PlayerContext.Provider
      value={{
        currentTrack,
        queue,
        isPlaying,
        volume,
        progress,
        playTrack,
        pauseTrack,
        resumeTrack,
        handleNext,
        handlePrev,
        setVolume,
        seekTo,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};
