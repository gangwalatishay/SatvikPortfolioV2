export default function ProjectRow({ project }) {
  return (
    <tr className="border-t border-[#222]">

      <td className="p-5">

        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-24 h-16 rounded-lg object-cover"
        />

      </td>

      <td>{project.title}</td>

      <td>{project.category}</td>

      <td>{project.year}</td>

      <td>

        {project.featured ? (
          <span className="text-green-500">
            ★ Featured
          </span>
        ) : (
          "-"
        )}

      </td>

      <td>

        <div className="flex justify-center gap-3">

          <button className="px-4 py-2 rounded-lg bg-[#8B1538] hover:bg-[#a11a44] transition">
            Edit
          </button>

          <button className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition">
            Delete
          </button>

        </div>

      </td>

    </tr>
  );
}