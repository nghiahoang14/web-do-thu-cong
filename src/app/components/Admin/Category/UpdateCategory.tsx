"use client";

import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  getCategoryById,
  updateCategory,
} from "@/services/api/admin/category.api";

export const UpdateCategory = () => {
  const router = useRouter();
  const param = useParams();
  const id=param.id;
 const [imageFile, setImageFile] = useState<File | null>(null);
  const [formData, setFormData] = useState<{
    name: string;
    description: string;
    image?: string;
     
  }>({
    name: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    if (!id) return;
    const fetchCategory = async () => {
      try {
        const res = await getCategoryById(id as string);
        setFormData({
          name: res.data.name || "",
          description: res.data.description || "",
          image: res.data.image,
        });
      } catch (err) {
        alert("Không tìm thấy danh mục");
        router.push("/Admin/Categories");
      }
    };
    fetchCategory();
  }, [id, router]);


 const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;
    if (name === "image" && files && files[0]) {
      setImageFile(files[0]);
      setFormData((p) => ({ ...p, image: URL.createObjectURL(files[0]) }));
    } else {
      setFormData((p) => ({ ...p, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const fd = new FormData();
    fd.append("name", formData.name);
    fd.append("description", formData.description);
    if (imageFile) {
      fd.append("image", imageFile); 
    }

    try {
      await updateCategory(id as string, fd); 
      alert("Sửa danh mục thành công!");
      router.push("/Admin/Categories");
    } catch (err) {
      alert("Sửa danh mục thất bại.");
      console.error(err);
    }
  };
  return (
    <div className="flex justify-center mt-10">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 max-w-xl w-full bg-white p-6 rounded shadow"
      >
        <h2 className="text-2xl font-bold text-center mb-4">
          Cập nhật danh mục
        </h2>

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
          />
          {formData.image && (
            <img
              src={formData.image}
              alt="preview"
              className="w-32 h-32 object-cover rounded mt-2"
            />
          )}
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
