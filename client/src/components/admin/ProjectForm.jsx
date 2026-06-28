import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../services/api";

export default function ProjectForm() {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    title: "",
    category: "",
    client: "",
    year: "",
    description: "",
    thumbnail: "",
    heroImage: "",
    youtubeUrl: "",
    driveUrl: "",
    featured: false,
  });

  const handleChange = (e) => {

    const { name, value, checked, type } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      await API.post("/projects", {
        ...form,
        slug: form.title
          .trim()
          .toLowerCase()
          .replace(/\s+/g, "-"),
        gallery: [],
        software: [],
      });

      alert("Project Created Successfully 🚀");

      navigate("/admin");

    } catch (err) {

      console.error(err);

      alert(
        err.response?.data?.message ||
          "Unable to create project"
      );

    } finally {

      setLoading(false);

    }
  };

  return (

    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >

      <div className="grid md:grid-cols-2 gap-6">

        <input
          className="bg-[#111] border border-[#222] rounded-xl p-4"
          placeholder="Project Title"
          name="title"
          onChange={handleChange}
          required
        />

        <input
          className="bg-[#111] border border-[#222] rounded-xl p-4"
          placeholder="Category"
          name="category"
          onChange={handleChange}
          required
        />

        <input
          className="bg-[#111] border border-[#222] rounded-xl p-4"
          placeholder="Client"
          name="client"
          onChange={handleChange}
        />

        <input
          className="bg-[#111] border border-[#222] rounded-xl p-4"
          placeholder="Year"
          name="year"
          onChange={handleChange}
        />

      </div>

      <textarea
        rows={6}
        className="w-full bg-[#111] border border-[#222] rounded-xl p-4"
        placeholder="Project Description"
        name="description"
        onChange={handleChange}
        required
      />

      <input
        className="w-full bg-[#111] border border-[#222] rounded-xl p-4"
        placeholder="Thumbnail URL"
        name="thumbnail"
        onChange={handleChange}
        required
      />

      <input
        className="w-full bg-[#111] border border-[#222] rounded-xl p-4"
        placeholder="Hero Image URL"
        name="heroImage"
        onChange={handleChange}
      />

      <input
        className="w-full bg-[#111] border border-[#222] rounded-xl p-4"
        placeholder="YouTube URL"
        name="youtubeUrl"
        onChange={handleChange}
      />

      <input
        className="w-full bg-[#111] border border-[#222] rounded-xl p-4"
        placeholder="Google Drive URL"
        name="driveUrl"
        onChange={handleChange}
      />

      <label className="flex items-center gap-3">

        <input
          type="checkbox"
          name="featured"
          onChange={handleChange}
        />

        Featured Project

      </label>

      <button
        disabled={loading}
        className="w-full bg-[#8B1538] hover:bg-[#a11a44] transition rounded-xl py-4"
      >

        {loading ? "Creating..." : "Create Project"}

      </button>

    </form>

  );
}