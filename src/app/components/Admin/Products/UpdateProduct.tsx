"use client";

import { useState, useEffect } from "react";

export const UpdateProduct = (props:{product:any,onSubmit: (data: any) => void;categories:any[]}

) => {
    const {product,onSubmit,categories}=props;
    console.log("h")
    // console.log(product.category,1);
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
    stock: "",
    status: "active",
    rating: {
      rate: "",
      count: "",
    },
  });

  useEffect(() => {
    if (product && categories.length > 0) {
      
      setFormData({
        title: product.title || "",
        price: product.price?.toString() || "",
        description: product.description || "",
        category: product.category._id || "",
        image: product.image || "",
        stock: product.stock?.toString() || "",
        status: product.status || "active",
        rating: {
          rate: product.rating?.rate?.toString() || "",
          count: product.rating?.count?.toString() || "",
        },
      });
    }
  }, [product,categories]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;

    if (name === "rate" || name === "count") {
      setFormData((prev) => ({
        ...prev,
        rating: {
          ...prev.rating,
          [name]: value,
        },
      }));
    } else if (name === "image" && files && files[0]) {
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

        <select
  name="category"
  value={formData.category}
  onChange={handleChange}
  className="w-full px-3 py-2 border rounded"
>
  <option value="">-- Chọn danh mục --</option>
  {categories.map((cat:any) => (
    <option key={cat._id} value={cat._id}>
      {cat.name}
    </option>
  ))}
</select>


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
            <img src={formData.image} alt="Preview" className="w-32 h-32 object-cover rounded mt-2" />
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

        <div>
          <label className="block mb-1 font-medium">Đánh giá</label>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">Điểm đánh giá (rate)</label>
              <input
                type="text"
                name="rate"
                value={formData.rating.rate}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Số lượt đánh giá (count)</label>
              <input
                type="text"
                name="count"
                value={formData.rating.count}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
          </div>
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
