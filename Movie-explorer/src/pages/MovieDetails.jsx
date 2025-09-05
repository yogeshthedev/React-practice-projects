import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      let api = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=90f092ba`);
      let res = await api.json();
      setMovie(res);
    } catch (error) {
      console.error("Error fetching movie:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <div className="max-w-6xl mx-auto p-6 mt-10">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition"
      >
        ← Back
      </button>

      {/* Main Content */}
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Poster */}
        <div className="relative">
          <img
            src={
              movie.Poster !== "N/A"
                ? movie.Poster
                : "https://via.placeholder.com/400x600?text=No+Image"
            }
            alt={movie.Title}
            className="w-full h-full object-cover md:rounded-l-2xl"
          />
          <span className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 text-xs rounded-full">
            {movie.Rated}
          </span>
        </div>

        {/* Info */}
        <div className="md:col-span-2 p-6 flex flex-col justify-between">
          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {movie.Title}{" "}
            <span className="text-gray-500 font-medium">({movie.Year})</span>
          </h1>
          <p className="text-sm text-gray-600 mb-4">{movie.Plot}</p>

          {/* Details */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-700 mb-6">
            <p><span className="font-medium">Released:</span> {movie.Released}</p>
            <p><span className="font-medium">Runtime:</span> {movie.Runtime}</p>
            <p><span className="font-medium">Genre:</span> {movie.Genre}</p>
            <p><span className="font-medium">Language:</span> {movie.Language}</p>
            <p><span className="font-medium">Director:</span> {movie.Director}</p>
            <p><span className="font-medium">Writer:</span> {movie.Writer}</p>
            <p className="col-span-2"><span className="font-medium">Stars:</span> {movie.Actors}</p>
          </div>

          {/* Ratings */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Ratings</h2>
            <div className="space-y-1">
              {movie.Ratings?.map((rate, idx) => (
                <p key={idx} className="text-sm text-gray-700">
                  {rate.Source}:{" "}
                  <span className="font-medium">{rate.Value}</span>
                </p>
              ))}
            </div>
          </div>

          {/* Extra Info */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-700">
            <p>
              <span className="font-medium">IMDB:</span> {movie.imdbRating} ⭐ (
              {movie.imdbVotes} votes)
            </p>
            <p><span className="font-medium">Box Office:</span> {movie.BoxOffice}</p>
            <p><span className="font-medium">Awards:</span> {movie.Awards}</p>
            <p><span className="font-medium">Country:</span> {movie.Country}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
