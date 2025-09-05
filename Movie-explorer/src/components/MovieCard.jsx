import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const [card, setCard] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      let api = await fetch(
        `https://www.omdbapi.com/?apikey=90f092ba&s=${movie}`
      );
      let res = await api.json();
      setCard(res);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (movie) fetchData();
  }, [movie]);

  const getMovies = card.Search;

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {getMovies?.map((item) => (
        <div
          key={item.imdbID}
          className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden group cursor-pointer"
          onClick={() => navigate(`/movie/${item.imdbID}`)}
        >
          {/* Poster */}
          <div className="relative">
            <img
              src={
                item.Poster !== "N/A"
                  ? item.Poster
                  : "https://via.placeholder.com/300x450?text=No+Image"
              }
              alt={item.Title}
              className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-lg">
              {item.Year}
            </span>
          </div>

          {/* Info */}
          <div className="p-4">
            <h2 className="text-lg font-bold text-gray-900 truncate">
              {item.Title}
            </h2>
            <p className="text-sm text-gray-600 capitalize">Type: {item.Type}</p>

            <div className="mt-4">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/movie/${item.imdbID}`);
                }}
                className="w-full px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-xl hover:bg-blue-700 transition"
              >
                View More
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieCard;
