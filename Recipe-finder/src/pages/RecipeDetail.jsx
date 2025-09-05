import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams();
  const [meal, setmeal] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const json = await res.json();
      setmeal(json);
    } catch (err) {
      console.error("Fetch error", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const hh = meal.meals;

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <>
      {hh?.map((meal) => {
        return (
          <div
            key={meal.idMeal}
            className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-2xl mt-8"
          >
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold mb-4 text-gray-800">
                {meal.strMeal}
              </h1>
              <button
                className=" px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
                onClick={handleBackClick}
              >
                Back
              </button>
            </div>

            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full h-72 object-cover rounded-xl mb-6"
            />

            <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                Category: {meal.strCategory}
              </span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
                Cuisine: {meal.strArea}
              </span>
            </div>

            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Ingredients:
            </h2>
            <ul className="list-disc list-inside space-y-1 mb-6 text-gray-700">
              {Object.keys(meal)
                .filter((key) => key.startsWith("strIngredient") && meal[key])
                .map((key, index) => {
                  const ingredient = meal[key];
                  const measure = meal[`strMeasure${index + 1}`];
                  return (
                    <li key={key}>
                      {measure} {ingredient}
                    </li>
                  );
                })}
            </ul>

            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Instructions:
            </h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line mb-6">
              {meal.strInstructions}
            </p>

            {meal.strYoutube && (
              <a
                href={meal.strYoutube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-blue-600 font-medium hover:underline"
              >
                📺 Watch on YouTube
              </a>
            )}
          </div>
        );
      })}
    </>
  );
};

export default RecipeDetail;
