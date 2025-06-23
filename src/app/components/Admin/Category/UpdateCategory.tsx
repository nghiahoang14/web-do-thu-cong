"use client";

import { useEffect, useState } from "react";

export const UpdateCategory = ({
  categories,
  onSubmit,
}: {
  categories: any;
  onSubmit: (data: any) => void;
}) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    if (categories) {
      setFormData({
        name: categories.name || "",
        description: categories.description || "",
        image: categories.image || "",
      });
    }
  }, [categories]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;

    if (name === "image" && files && files[0]) {
      const imageUrl = URL.createObjectURL(files[0]);
      setFormData((prev) => ({
        ...prev,
        image: imageUrl,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    console.log("Form cập nhật danh mục:", formData);
  };

  return (
    <div className="flex justify-center mt-10">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 max-w-xl w-full bg-white p-6 rounded shadow"
      >
        <h2 className="text-2xl font-bold text-center mb-4">Cập nhật danh mục</h2>

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
          
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
         
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-500"
        >
          Cập nhật
        </button>
      </form>
    </div>
  );
};
