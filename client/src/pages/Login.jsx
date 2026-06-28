import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const { data } = await API.post("/auth/login", form);

      login(data.user, data.token);

      navigate("/admin");
    } catch (err) {
      setError(
        err.response?.data?.message || "Login failed"
      );
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-[#111] border border-[#222] rounded-2xl p-10"
      >
        <h1 className="text-4xl text-white mb-10 font-light">
          Admin Login
        </h1>

        {error && (
          <p className="text-red-500 mb-6">
            {error}
          </p>
        )}

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={form.email}
          className="w-full mb-5 bg-[#181818] p-4 rounded-lg text-white outline-none"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={form.password}
          className="w-full mb-8 bg-[#181818] p-4 rounded-lg text-white outline-none"
        />

        <button
          disabled={loading}
          className="w-full bg-[#8B1538] hover:bg-[#a11a44] transition py-4 rounded-lg text-white"
        >
          {loading ? "Signing In..." : "Login"}
        </button>
      </form>

    </div>
  );
}