import React, { useState } from "react";
import { useForm } from "react-hook-form";
import MovieCard from "./MovieCard";

const SearchBar = () => {
  const { register, handleSubmit, reset } = useForm();
  const [movename, setmovename] = useState("");

  const clickHandler = (e) => {
    setmovename(e.movie);
    reset();
  };

  return (
    <div>
      <div className="w-full max-w-xl mx-auto p-4">
        <form
          onSubmit={handleSubmit(clickHandler)}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <input
            type="text"
            placeholder="Search movies..."
            {...register("movie")}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Search
          </button>
        </form>
      </div>

      <div>
        <MovieCard movie={movename} />
      </div>
    </div>
  );
};

export default SearchBar;
