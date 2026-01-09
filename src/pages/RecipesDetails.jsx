import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addfav, removefav } from "../Redux/Slices/FavoriteSlice";

const RecipeDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const favourites = useSelector((state) => state.fav.favs || []);
  const theme = useSelector((state) => state.dark.theme);

  const isFav = favourites.some(
    (item) => item.id === Number(id)
  );

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `https://dummyjson.com/recipes/${id}`
        );
        setRecipe(res.data);
      } catch (err) {
        setError("Failed to load recipe");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) {
    return (
      <div
        className={`flex justify-center items-center h-screen text-xl
          ${theme === "dark" ? "text-slate-300" : "text-gray-700"}`}
      >
        Loading recipe...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        {error}
      </div>
    );
  }

  if (!recipe) return null;

  return (
    <div
      className={`min-h-screen transition-colors duration-300
        ${
          theme === "dark"
            ? "bg-slate-900 text-slate-100"
            : "bg-gray-50 text-gray-900"
        }`}
    >
      <div className="max-w-5xl mx-auto p-6">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-96 object-cover rounded-2xl shadow-md"
        />

        <div className="mt-6">
          <h1 className="text-3xl font-bold mb-2">
            {recipe.name}
          </h1>

          <p
            className={`mb-4 ${
              theme === "dark" ? "text-slate-400" : "text-gray-600"
            }`}
          >
            Cuisine:{" "}
            <span className="font-semibold">{recipe.cuisine}</span>
          </p>

          <div
            className={`flex gap-6 mb-6 text-sm
              ${
                theme === "dark" ? "text-slate-400" : "text-gray-600"
              }`}
          >
            <span>⭐ {recipe.rating}</span>
            <span>⏱ {recipe.prepTimeMinutes} mins</span>
            <span>🔥 {recipe.caloriesPerServing} cal</span>
          </div>

          <button
            onClick={() =>
              isFav
                ? dispatch(removefav(recipe.id))
                : dispatch(addfav(recipe))
            }
            className={`px-5 py-2 rounded-lg text-white font-medium transition
              ${
                isFav
                  ? "bg-red-500 hover:bg-red-600"
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
          >
            {isFav ? "Remove from Favourite" : "Add to Favourite"}
          </button>

          {/* INGREDIENTS */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-3">
              Ingredients
            </h2>
            <ul
              className={`list-disc list-inside space-y-1
                ${
                  theme === "dark"
                    ? "text-slate-300"
                    : "text-gray-700"
                }`}
            >
              {recipe.ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* INSTRUCTIONS */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-3">
              Instructions
            </h2>
            <ol
              className={`list-decimal list-inside space-y-2
                ${
                  theme === "dark"
                    ? "text-slate-300"
                    : "text-gray-700"
                }`}
            >
              {recipe.instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
