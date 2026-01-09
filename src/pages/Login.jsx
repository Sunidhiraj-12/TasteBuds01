import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Redux/Slices/AuthSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated, error } = useSelector((state) => state.auth);
  const theme = useSelector((state) => state.dark.theme);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("All fields are required");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      dispatch(login({ email, password }));
      setLoading(false);
    }, 800);
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-4 transition-colors duration-300
        ${
          theme === "dark"
            ? "bg-slate-900"
            : "bg-gradient-to-r from-orange-400 to-red-500"
        }`}
    >
      <div
        className={`w-full max-w-md rounded-2xl shadow-lg p-8
          ${
            theme === "dark"
              ? "bg-slate-800 text-slate-100"
              : "bg-white text-gray-900"
          }`}
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-red-500">
          Welcome Back 👋
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full px-4 py-2 rounded-lg outline-none border transition
              ${
                theme === "dark"
                  ? "bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:border-red-400"
                  : "bg-gray-50 border-gray-300 focus:border-red-500"
              }`}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full px-4 py-2 rounded-lg outline-none border transition
              ${
                theme === "dark"
                  ? "bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:border-red-400"
                  : "bg-gray-50 border-gray-300 focus:border-red-500"
              }`}
          />

          {error && (
            <p className="text-red-500 text-sm text-center">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-500 text-white py-2 rounded-lg font-semibold hover:bg-red-600 transition disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center text-sm mt-6">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-red-500 font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
