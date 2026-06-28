import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import ProjectTable from "../components/admin/ProjectTable";

export default function AdminDashboard() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-[#050505] text-white">

      <div className="max-w-7xl mx-auto px-8 py-12">

        {/* Header */}

        <div className="flex flex-col md:flex-row justify-between md:items-center gap-8">

          <div>

            <p className="uppercase tracking-[8px] text-[#8B1538] text-xs">
              Portfolio CMS
            </p>

            <h1 className="text-5xl font-light mt-3">
              Welcome, {user?.username}
            </h1>

            <p className="text-gray-500 mt-3">
              Manage your portfolio projects.
            </p>

          </div>

          <div className="flex gap-4">

            <Link
              to="/admin/projects/new"
              className="px-6 py-3 rounded-xl bg-[#8B1538] hover:bg-[#a11a44] transition"
            >
              + New Project
            </Link>

            <button
              onClick={logout}
              className="px-6 py-3 rounded-xl border border-red-600 hover:bg-red-600 transition"
            >
              Logout
            </button>

          </div>

        </div>

        {/* Divider */}

        <div className="h-px bg-[#1b1b1b] my-12"></div>

        {/* Projects */}

        <ProjectTable />

      </div>

    </div>
  );
}