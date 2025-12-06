import { useState } from "react";
import api from "../api/axiosInstance";
import { useAuth } from "../context/AuthContext";

export default function Register({ switchToLogin }) {
  const { login } = useAuth();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); 

    try {
      const { data } = await api.post("/auth/register", form);
      setSuccess("Registration successful — Redirecting...");
      setTimeout(() => login(data), 600);
    } catch (err) {
      setSuccess("");
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Create Account
        </h2>

        {error && (
          <p className="text-sm text-red-500 bg-red-50 py-2 px-3 rounded-md">
            {error}
          </p>
        )}
        {success && (
          <p className="text-sm text-green-600 bg-green-50 py-2 px-3 rounded-md">
            {success}
          </p>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Full Name
            </label>
            <input
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="Ankush Choudhary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
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
              required
              className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="••••••••"
            />
          </div>

          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold py-2.5 rounded-lg transition">
            Register Now
          </button>
        </form>

        <p className="text-xs text-center text-gray-500">
          Already have an account?{" "}
          <button
            onClick={switchToLogin}
            className="text-indigo-600 hover:underline"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
}
