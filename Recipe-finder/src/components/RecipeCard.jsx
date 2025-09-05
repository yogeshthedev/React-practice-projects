import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const RecipeCard = ({ recipe }) => {
  const [data, setdata] = useState([]);
  const navigate = useNavigate();
  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${recipe}`
      );
      const json = await res.json();
      setdata(json);
      toast.success("Recipe Show..")
    } catch (err) {
      console.error("Fetch error", err);
    }
  };
  useEffect(() => {
    if (recipe) fetchData();
  }, [recipe]);

  const hh = data.meals;
  if (!data.meals) {
    return <p className="text-center text-red-500 mt-4">No recipes found.</p>;
  }

  return (
    <>
      {hh.map((meal) => {
        return (
          <div
            key={meal.idMeal}
            className="bg-white dark:bg-gray-800 shadow-md rounded-xl overflow-hidden transition hover:shadow-xl max-w-md mx-auto"
          >
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 space-y-2">
              <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                {meal.strMeal}
              </h2>
              <p className="text-sm text-gray-500">
                {meal.strCategory} • {meal.strArea}
              </p>
              <a
                href={meal.strYoutube}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline text-sm"
              >
                Watch on YouTube
              </a>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {meal.strInstructions.slice(0, 100)}...
              </p>
              <button
                className="mt-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
                onClick={() => navigate(`/recipe/${meal.idMeal}`)}
              >
                View More
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default RecipeCard;
