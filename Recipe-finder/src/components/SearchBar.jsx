import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import RecipeCard from "./RecipeCard";

const SearchBar = () => {
  const { register, handleSubmit, reset } = useForm();
  const [name, setname] = useState("");
  const HanderlForm = (e) => {
    setname(e.recipe);
    reset()
  };

  return (
    <>
      <div>
        <form
          onSubmit={handleSubmit(HanderlForm)}
          className="max-w-md mx-auto flex items-center gap-2 mt-6"
        >
          <input
            type="text"
            placeholder="Search a recipe..."
            {...register("recipe", { required: "Please enter a recipe name" })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Search
          </button>
        </form>
      </div>
      <div className="mt-[2rem]">
        {" "}
        <RecipeCard recipe={name} />
      </div>
    </>
  );
};

export default SearchBar;
