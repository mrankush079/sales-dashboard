import { useState } from "react";
import api from "../api/axiosInstance";
import { useAuth } from "../context/AuthContext";

export default function Login({ switchToRegister }) {
  const { login } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const { data } = await api.post("/auth/login", form);
      login(data);
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Sales Dashboard Login
        </h2>
        {error && (
          <p className="text-sm text-red-500 bg-red-50 py-2 px-3 rounded-md">
            {error}
          </p>
        )}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="••••••••"
            />
          </div>
          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold py-2.5 rounded-lg transition">
            Sign in
          </button>
        </form>
        <p className="text-xs text-center text-gray-500">
          Don’t have an account?{" "}
          <button
            onClick={switchToRegister}
            className="text-indigo-600 hover:underline"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
}
