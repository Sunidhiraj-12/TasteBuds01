import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../Redux/Slices/AuthSlice";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isAuthenticated, error } = useSelector((state) => state.auth);
  const theme = useSelector((state) => state.dark.theme);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password } = formData;

    if (!username || !email || !password) {
      alert("All fields are required");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      dispatch(signup(formData));
      setLoading(false);
    }, 1200);
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
            ? "bg-slate-900 text-slate-100"
            : "bg-gray-100 text-gray-900"
        }`}
    >
      <div
        className={`w-full max-w-md rounded-2xl shadow-lg p-8
          ${
            theme === "dark"
              ? "bg-slate-800"
              : "bg-white"
          }`}
      >
        <h2 className="text-3xl font-bold text-center mb-6">
          Create Account 🚀
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded-lg outline-none border transition
              ${
                theme === "dark"
                  ? "bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:border-red-400"
                  : "bg-gray-50 border-gray-300 focus:border-red-500"
              }`}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded-lg outline-none border transition
              ${
                theme === "dark"
                  ? "bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:border-red-400"
                  : "bg-gray-50 border-gray-300 focus:border-red-500"
              }`}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
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
            {loading ? "Creating account..." : "Sign Up"}
          </button>
        </form>

        <p className="text-center mt-6 text-sm">
          Already have an account?{" "}
          <Link
            to="/"
            className="text-red-500 font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
