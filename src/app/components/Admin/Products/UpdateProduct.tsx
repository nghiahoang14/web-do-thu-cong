"use client";

import { useState, useEffect } from "react";
import { getCategories } from "@/services/api/admin/category.api";
import { getProductById, updateProduct } from "@/services/api/admin/products.api";
import { useParams, useRouter } from "next/navigation";

export const UpdateProduct = () => {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
    stock: "",
    status: "active",
  });

  const param = useParams();
  const id = param.id as string;
  const router = useRouter();

  const [product, setProduct] = useState<any>(null);
  const [categories, setCategories] = useState<any[]>([]);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await getProductById(id);
        setProduct(res.data);
      } catch (error) {
        console.error("Lỗi khi lấy sản phẩm:", error);
        alert("Không tìm thấy sản phẩm");
        router.push("/Admin/Products");
      }
    };

    const fetchCategories = async () => {
      try {
        const res = await getCategories();
        setCategories(res.data);
      } catch (err) {
        console.error("Không thể lấy danh mục", err);
      }
    };

    fetchCategories();
    if (id) fetchProduct();
  }, [id]);

  useEffect(() => {
    if (product && categories.length > 0) {
      setFormData({
        title: product.title || "",
        price: product.price?.toString() || "",
        description: product.description || "",
        category: product.category?._id || "",
        image: product.image || "",
        stock: product.stock?.toString() || "",
        status: product.status || "active",
      });
      setImagePreview(product.image);
    }
  }, [product, categories]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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
    if (!id) return;

    try {
      const fd = new FormData();
      fd.append("title", formData.title);
      fd.append("price", formData.price);
      fd.append("description", formData.description);
      fd.append("category", formData.category);
      fd.append("stock", formData.stock);
      fd.append("status", formData.status);
      if (imageFile) fd.append("image", imageFile);

      await updateProduct(id, fd);

      alert("Cập nhật sản phẩm thành công!");
      router.push("/Admin/Products");
    } catch (err) {
      console.error("Lỗi khi cập nhật:", err);
      alert("Cập nhật sản phẩm thất bại.");
    }
  };

  return (
    <div className="flex justify-center mt-10">
      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl w-full bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold text-center mb-4">Cập nhật sản phẩm</h2>

        <div>
          <label className="block mb-1 font-medium">Tên sản phẩm</label>
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
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
          <label className="block mb-1 font-medium">Ảnh sản phẩm</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
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
            type="text"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
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
          Cập nhật
        </button>
      </form>
    </div>
  );
};
