import { useState } from "react";
import API from "../../services/api";

export default function ImageUploader({
  label,
  value,
  onChange,
}) {
  const [uploading, setUploading] = useState(false);

  const uploadImage = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    try {
      setUploading(true);

      const { data } = await API.post(
        "/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      onChange(data.url);
    } catch (err) {
      console.error(err);
      alert("Image upload failed.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-4">

      <label className="block text-sm uppercase tracking-[3px] text-gray-400">
        {label}
      </label>

      {value ? (
        <img
          src={value}
          alt=""
          className="w-full h-56 object-cover rounded-xl border border-[#222]"
        />
      ) : (
        <div className="w-full h-56 rounded-xl border border-dashed border-[#333] flex items-center justify-center text-gray-500">
          No Image Selected
        </div>
      )}

      <input
        type="file"
        accept="image/*"
        onChange={uploadImage}
        className="block w-full text-sm"
      />

      {uploading && (
        <p className="text-[#8B1538]">
          Uploading...
        </p>
      )}

    </div>
  );
}