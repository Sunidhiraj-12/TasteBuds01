import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchfoods } from "../Redux/Slices/FoodSlice";
import RecipeCard from "../components/RecipeCard";
import { useNavigate } from "react-router-dom";

const Recipes = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { foods, loading, error } = useSelector((state) => state.food);
  const theme = useSelector((state) => state.dark.theme);

  useEffect(() => {
    dispatch(fetchfoods());
  }, [dispatch]);

  if (loading)
    return (
      <p
        className={`text-center mt-10 ${
          theme === "dark" ? "text-slate-300" : "text-gray-700"
        }`}
      >
        Loading...
      </p>
    );

  if (error)
    return (
      <p className="text-center text-red-500 mt-10">
        {error}
      </p>
    );

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
        🍽️ Recipes
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {foods.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Recipes;
