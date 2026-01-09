import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../Redux/Slices/AuthSlice";
import { resetfav } from "../Redux/Slices/FavoriteSlice";
import { changetheme } from "../Redux/Slices/DarkSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const theme = useSelector((state) => state.dark.theme);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(resetfav());
    navigate("/");
  };

  return (
    <header
      className={`sticky top-0 z-50 shadow-md backdrop-blur-md transition-all duration-300
        ${
          theme === "dark"
            ? "bg-slate-900/80 border-b border-slate-700 text-slate-100"
            : "bg-white/80 border-b border-gray-200 text-gray-900"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h2
          onClick={() => navigate("/home")}
          className="text-2xl font-bold text-red-500 cursor-pointer"
        >
          TasteBuds
        </h2>

        {/* Navigation */}
        <nav className="flex items-center gap-6">
          {["/home", "/recipe", "/favourite"].map((path, index) => (
            <NavLink
              key={index}
              to={path}
              className={({ isActive }) =>
                `font-medium transition-all duration-200 ${
                  isActive
                    ? "text-red-500 border-b-2 border-red-500"
                    : theme === "dark"
                    ? "text-slate-300 hover:text-red-400"
                    : "text-gray-700 hover:text-red-500"
                }`
              }
            >
              {path === "/home"
                ? "Home"
                : path === "/recipe"
                ? "Recipes"
                : "Favourites"}
            </NavLink>
          ))}
          <button
            onClick={() => dispatch(changetheme())}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition
              ${
                theme === "dark"
                  ? "bg-slate-700 text-slate-100 hover:bg-slate-600"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
          >
            {theme === "dark" ? "🌙 " : "☀️ "}
          </button>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="ml-4 bg-red-500 text-white px-4 py-1.5 rounded-lg hover:bg-red-600 transition"
          >
            Logout
          </button>

          {/* Theme Toggle */}
          
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
