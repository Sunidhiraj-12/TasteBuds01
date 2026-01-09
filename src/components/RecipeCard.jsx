import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addfav, removefav } from "../Redux/Slices/FavoriteSlice";

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const favourites = useSelector((state) => state.fav.favs || []);
  const theme = useSelector((state) => state.dark.theme);

  const isFav = favourites.some(
    (item) => item.id === recipe.id
  );

  const handleFav = () => {
    if (isFav) {
      dispatch(removefav(recipe.id));
    } else {
      dispatch(addfav(recipe));
    }
  };

  const handleClicked = () => {
    navigate(`/recipe/${recipe.id}`);
  };

  return (
    <div
      className={`rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden
        ${
          theme === "dark"
            ? "bg-slate-800 text-slate-100"
            : "bg-white text-gray-900"
        }`}
    >
      <img
        src={recipe.image}
        alt={recipe.name}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-semibold mb-1">
          {recipe.name}
        </h2>

        <p
          className={`text-sm ${
            theme === "dark" ? "text-slate-400" : "text-gray-600"
          }`}
        >
          Cuisine:{" "}
          <span className="font-medium">{recipe.cuisine}</span>
        </p>

        <div className="flex justify-between items-center mt-4">
          <span
            className={`text-sm ${
              theme === "dark" ? "text-slate-400" : "text-gray-500"
            }`}
          >
            ⏱ {recipe.prepTimeMinutes} mins
          </span>

          <span
            className={`text-xs px-3 py-1 rounded-full font-medium
              ${
                theme === "dark"
                  ? "bg-green-900 text-green-300"
                  : "bg-green-100 text-green-700"
              }`}
          >
            ⭐ {recipe.rating}
          </span>
        </div>

        <div className="flex gap-3 mt-4">
          <button
            onClick={handleFav}
            className={`px-4 py-1 rounded-lg text-sm font-medium transition
              ${
                isFav
                  ? "bg-red-500 text-white hover:bg-red-600"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
          >
            {isFav ? "Remove" : "Favourite"}
          </button>

          <button
            onClick={handleClicked}
            className={`px-4 py-1 rounded-lg text-sm font-medium transition
              ${
                theme === "dark"
                  ? "bg-slate-700 text-slate-200 hover:bg-slate-600"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
