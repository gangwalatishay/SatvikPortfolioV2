import { Link } from "react-router-dom";
import ProjectForm from "../components/admin/ProjectForm";

export default function CreateProject() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">

      <div className="max-w-5xl mx-auto px-6 py-12">

        {/* Header */}

        <div className="flex items-center justify-between mb-12">

          <div>

            <p className="uppercase tracking-[6px] text-[#8B1538] text-sm">
              Portfolio CMS
            </p>

            <h1 className="text-5xl font-light mt-2">
              Create Project
            </h1>

          </div>

          <Link
            to="/admin"
            className="border border-[#333] px-5 py-3 rounded-xl hover:border-[#8B1538] transition"
          >
            ← Back
          </Link>

        </div>

        {/* Form */}

        <div className="bg-[#101010] border border-[#222] rounded-2xl p-8">

          <ProjectForm />

        </div>

      </div>

    </div>
  );
}