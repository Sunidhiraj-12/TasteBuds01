import React from "react";
import { useSelector } from "react-redux";
import RecipeCard from "../components/RecipeCard";

const Favorites = () => {
  const favs = useSelector((state) => state.fav.favs);
  const theme = useSelector((state) => state.dark.theme);

  return (
    <div
      className={`min-h-screen p-6 transition-colors duration-300
        ${
          theme === "dark"
            ? "bg-slate-900 text-slate-100"
            : "bg-gray-50 text-gray-900"
        }`}
    >
      <h1 className="text-3xl font-bold text-center mb-8">
        ❤️ Favourite Recipes
      </h1>

      {favs.length === 0 ? (
        <p
          className={`text-center mt-10 text-lg
            ${
              theme === "dark"
                ? "text-slate-400"
                : "text-gray-600"
            }`}
        >
          No favourite recipes added yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {favs.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
