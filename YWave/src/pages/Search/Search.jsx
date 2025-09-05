import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import API from "../../services/musicAPI";
import SongCard from "../../components/SongCard/SongCard";
import "./Search.css";

const Search = () => {
  const [searchParams] = useSearchParams();
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const query = searchParams.get("q");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await API.get(`/search?q=${query}`);
        setSongs(res.data.data);
      } catch (err) {
        setError("Something went wrong while fetching songs.");
      } finally {
        setLoading(false);
      }
    };

    if (!query) {
      setSongs([]);
      setLoading(false);
      setError(null);
      return;
    }

    fetchData();
  }, [query]);

  if (!query) {
    return (
      <p className="search-message">
        Type something in the search bar to find songs.
      </p>
    );
  }
  if (loading) {
    return <p className="search-message">Loading songs...</p>;
  }
  if (error) {
    return <p className="search-message">{error}</p>;
  }
  if (songs.length === 0) {
    return <p className="search-message">No songs found.</p>;
  }

  return (
    <div className="search-container">
      <h1 className="search-title">Search Results for "{query}"</h1>
      <div className="songs-grid">
        {songs.map((song) => (
          <SongCard key={song.id} song={song} songsArray={songs} />
        ))}
      </div>
    </div>
  );
};

export default Search;
