"use client";

import { createCategory } from "@/services/api/admin/category.api";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const CreateCategory = () => {
    const router = useRouter();
     const [imageFile, setImageFile] = useState<File | null>(null); 
  const [imagePreview, setImagePreview] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: "",         
  });

 const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;

    if (name === "image" && files && files[0]) {
      setImageFile(files[0]);                         
      setImagePreview(URL.createObjectURL(files[0])); 
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

 
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!imageFile) {
      alert("Vui lòng chọn hình ảnh!");
      return;
    }

    try {
      const fd = new FormData();
      fd.append("name", formData.name);
      fd.append("description", formData.description);
      fd.append("image", imageFile); 

      await createCategory(fd);

      alert("Tạo danh mục thành công!");
      router.push("/Admin/Categories");
    } catch (err) {
      console.error("Lỗi khi tạo danh mục:", err);
      alert("Tạo danh mục thất bại.");
    }
  };
  return (
    <div className="flex justify-center mt-10">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 max-w-xl w-full bg-white p-6 rounded shadow"
      >
        <h2 className="text-2xl font-bold text-center mb-4">Thêm danh mục</h2>

        <div>
          <label className="block mb-1 font-medium">Tên danh mục</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Tên danh mục"
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Mô tả</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Mô tả"
            className="w-full px-3 py-2 border rounded"
          />
        </div>

         <div>
          <label className="block mb-1 font-medium">Hình ảnh</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              className="w-32 h-32 object-cover rounded mt-2"
            />
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500"
        >
          Thêm
        </button>
      </form>
    </div>
  );
};
