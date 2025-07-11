"use client";

import { getCategories } from "@/services/api/admin/category.api";
import { createProduct } from "@/services/api/admin/products.api";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const CreateProduct = () => {
  const router = useRouter();
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");

  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
    stock: 0,
    status: "active",
  });

  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await getCategories();
        setCategories(res.data);
      } catch (err) {
        console.error("Không thể lấy danh mục", err);
      }
    };
    fetchCategories();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
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
      fd.append("title", formData.title);
      fd.append("price", formData.price);
      fd.append("description", formData.description);
      fd.append("category", formData.category);
      fd.append("stock", String(formData.stock));
      fd.append("status", formData.status);
      fd.append("image", imageFile); 
      await createProduct(fd);

      alert("Tạo sản phẩm thành công!");
      router.push("/Admin/Products");
    } catch (err) {
      console.error("Lỗi khi tạo sản phẩm:", err);
      alert("Tạo sản phẩm thất bại.");
    }
  };

  return (
    <div className="flex justify-center mt-10">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 max-w-xl w-full bg-white p-6 rounded shadow"
      >
        <h2 className="text-2xl font-bold text-center mb-4">Thêm sản phẩm</h2>

        <div>
          <label className="block mb-1 font-medium">Tên sản phẩm</label>
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Tên sản phẩm"
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Giá</label>
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Giá"
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
          <label className="block mb-1 font-medium">Danh mục</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          >
            <option value="">-- Chọn danh mục --</option>
            {categories.map((cat: any) => (
              <option key={cat._id} value={cat._id}>
                {cat.name}
              </option>
            ))}
          </select>
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

        <div>
          <label className="block mb-1 font-medium">Số lượng trong kho</label>
          <input
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            placeholder="Số lượng"
            className="w-full px-3 py-2 border rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Trạng thái</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          >
            <option value="active">Hoạt động</option>
            <option value="inactive">Không hoạt động</option>
            <option value="out_of_stock">Hết hàng</option>
          </select>
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
