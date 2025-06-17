"use client";

import { useEffect, useState } from "react";

import { deleteProduct, getProducts } from "@/services/api/admin/products.api";
import Link from "next/link";


export const ProductList = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchProducts = async () => {
    try {
      const res = await getProducts();
      setProducts(res.data);
    } catch (err) {
      console.error("Lỗi khi fetch sản phẩm:", err);
    }
  };

  const handleDelete = async (id: string) => {
    const confirm = window.confirm("Bạn có chắc muốn xóa sản phẩm này?");
    if (!confirm) return;
    try {
      await deleteProduct(id);
      fetchProducts();
    } catch (err) {
      alert("Xóa thất bại");
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold">Danh sách sản phẩm</h1>
        <Link href="/Admin/Products/create">
            <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500">
               Thêm sản phẩm
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
              <th className="px-4 py-2 border">Giá</th>
              <th className="px-4 py-2 border">Số lượng trong kho</th>
              <th className="px-4 py-2 border">Trạng thái</th>
              <th className="px-4 py-2 border">Hình ảnh</th>
              <th className="px-4 py-2 border">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product, index) => (
              <tr key={product._id} className="text-center">
                <td className="px-4 py-2 border">{index + 1}</td>
                <td className="px-4 py-2 border">{product.title}</td>
                <td className="px-4 py-2 border">{product.price}₫</td>
                <td className="px-4 py-2 border">{product.stock}</td>
                <td className="px-4 py-2 border capitalize">{product.status}</td>
                <td className="px-4 py-2 border">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-12 h-12 object-cover mx-auto rounded"
                  />
                </td>
                <td className="px-4 py-2 border">
  <div className="flex items-center justify-center gap-2">
    <button
      onClick={() => alert("Chuyển sang trang sửa")}
      className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
    >
      Sửa
    </button>
    <button
      onClick={() => handleDelete(product._id)}
      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
    >
      Xóa
    </button>
  </div>
</td>

              </tr>
            ))}
            {filteredProducts.length === 0 && (
              <tr>
                <td colSpan={7} className="text-center py-4 text-gray-500">
                  Không có sản phẩm nào phù hợp.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
