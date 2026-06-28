import { useEffect, useState } from "react";
import API from "../../services/api";
import ProjectRow from "./ProjectRow";

export default function ProjectTable() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch Projects
  const fetchProjects = async () => {
    try {
      const { data } = await API.get("/projects");

      // Support both:
      // res.json(projects)
      // res.json({ projects })
      setProjects(data.projects || data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const deleteProject = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this project?"
    );

    if (!confirmDelete) return;

    try {
      await API.delete(`/projects/${id}`);

      setProjects((prev) =>
        prev.filter((project) => project._id !== id)
      );
    } catch (error) {
      console.error(error);
      alert("Failed to delete project.");
    }
  };

  if (loading) {
    return (
      <div className="py-20 text-center text-gray-400">
        Loading projects...
      </div>
    );
  }

  if (!projects.length) {
    return (
      <div className="border border-[#222] rounded-2xl py-24 text-center">
        <h2 className="text-3xl font-light mb-4">
          No Projects Found
        </h2>

        <p className="text-gray-500">
          Click <span className="text-[#8B1538]">New Project</span> to
          create your first project.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-[#222]">

      <table className="w-full">

        <thead className="bg-[#101010]">

          <tr>

            <th className="text-left p-5">Thumbnail</th>

            <th className="text-left">Title</th>

            <th className="text-left">Category</th>

            <th className="text-left">Year</th>

            <th className="text-left">Featured</th>

            <th className="text-center">Actions</th>

          </tr>

        </thead>

        <tbody>

          {projects.map((project) => (
            <ProjectRow
              key={project._id}
              project={project}
              onDelete={deleteProject}
            />
          ))}

        </tbody>

      </table>

    </div>
  );
}