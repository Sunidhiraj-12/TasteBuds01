import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const navigate = useNavigate();
  const theme = useSelector((state) => state.dark.theme);

  return (
    <div
      className={`min-h-screen transition-colors duration-300
        ${
          theme === "dark"
            ? "bg-slate-900 text-slate-100"
            : "bg-gray-50 text-gray-900"
        }`}
    >
      {/* HERO SECTION */}
      <section
        className={`text-white
          ${
            theme === "dark"
              ? "bg-gradient-to-r from-slate-800 to-slate-900"
              : "bg-gradient-to-r from-orange-400 to-red-500"
          }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Discover Delicious Recipes 🍽️
            </h1>
            <p className="text-lg mb-6 text-slate-200">
              Find easy, tasty & healthy recipes from all around the world.
            </p>

            <div className="flex gap-4">
              <button
                onClick={() => navigate("/recipe")}
                className={`px-6 py-2 rounded-lg font-semibold transition
                  ${
                    theme === "dark"
                      ? "bg-red-500 hover:bg-red-600"
                      : "bg-white text-red-500 hover:bg-gray-100"
                  }`}
              >
                Explore Recipes
              </button>

              <button
                onClick={() => navigate("/favourite")}
                className="border border-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-red-500 transition"
              >
                Favourites ❤️
              </button>
            </div>
          </div>

          <div className="md:w-1/2 mt-10 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
              alt="Food"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Our Recipe App?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              title: "🍳 Easy Recipes",
              desc: "Simple step-by-step instructions for beginners.",
            },
            {
              title: "❤️ Save Favourites",
              desc: "Add your favourite recipes and access them anytime.",
            },
            {
              title: "🌍 Global Cuisine",
              desc: "Explore recipes from different cultures.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl shadow-md text-center transition
                ${
                  theme === "dark"
                    ? "bg-slate-800 text-slate-200"
                    : "bg-white text-gray-700"
                }`}
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section
        className={`py-16
          ${theme === "dark" ? "bg-slate-800" : "bg-white"}`}
      >
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Cooking?
          </h2>
          <p
            className={`mb-6 ${
              theme === "dark" ? "text-slate-300" : "text-gray-600"
            }`}
          >
            Browse hundreds of recipes and cook something amazing today.
          </p>

          <button
            onClick={() => navigate("/recipe")}
            className="bg-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-600 transition"
          >
            Get Started 🚀
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
