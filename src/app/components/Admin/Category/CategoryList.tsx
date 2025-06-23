"use client";

import { useEffect, useState } from "react";

import { deleteCategory, getCategories } from "@/services/api/admin/category.api";
import Link from "next/link";


export const CategoryList = () => {
  const [Category, setCategory] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchCategory = async () => {
    try {
      const res = await getCategories();
      setCategory(res.data);
    } catch (err) {
      console.error("Lỗi khi fetch sản phẩm:", err);
    }
  };

  const handleDelete = async (id: string) => {
    const confirm = window.confirm("Bạn có chắc muốn xóa danh mục này?");
    if (!confirm) return;
    try {
      await deleteCategory(id);
      fetchCategory();
    } catch (err) {
      alert("Xóa thất bại");
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  const filteredCategory = Category.filter((Category) =>
    Category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold">Danh sách danh mục</h1>
        <Link href="/Admin/Categories/create">
            <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500">
               Thêm danh mục
            </button>
        </Link>
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Tìm kiếm theo tên..."
          className="w-full px-3 py-2 border rounded-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full table-auto border">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border">#</th>
              <th className="px-4 py-2 border">Tên</th>
              <th className="px-4 py-2 border">Chú thích</th>
            
              <th className="px-4 py-2 border">Hình ảnh</th>
              <th className="px-4 py-2 border">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {filteredCategory.map((cate, index) => (
              <tr key={cate._id} className="text-center">
                <td className="px-4 py-2 border">{index + 1}</td>
                <td className="px-4 py-2 border">{cate.name}</td>
            <td className="px-4 py-2 border">{cate.description}</td>
                <td className="px-4 py-2 border">
                  <img
                    src={cate.image}
                    alt={cate.name}
                    className="w-12 h-12 object-cover mx-auto rounded"
                  />
                </td>
                <td className="px-4 py-2 border">
  <div className="flex items-center justify-center gap-2">
    <Link href={`/Admin/Categories/edit/${cate._id}`}>
      <button
        
        className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Sửa
      </button>
    </Link >
    <button
      onClick={() => handleDelete(cate._id)}
      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
    >
      Xóa
    </button>
  </div>
</td>

              </tr>
            ))}
            {filteredCategory.length === 0 && (
              <tr>
                <td colSpan={7} className="text-center py-4 text-gray-500">
                  Không có danh mục nào phù hợp.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
