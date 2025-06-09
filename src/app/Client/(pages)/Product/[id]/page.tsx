"use client";

import { useEffect, useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import { useParams } from "next/navigation";
import axios from "axios";

export default function ProductDetailpage() {
  const params = useParams();
  const id = params.id;

  const [product, setProduct] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProductDetail = async () => {
      if (!id) return;
      try {
        const res = await axios.get(`http://localhost:3001/products/detail/${id}`);
        setProduct(res.data.data);
      } catch (err) {
        console.error("Lỗi khi lấy sản phẩm:", err);
      }
    };
    fetchProductDetail();
  }, [id]);

  if (!product) {
    return <div className="text-center mt-20 text-gray-500">Đang tải sản phẩm...</div>;
  }

  // Xử lý ảnh: nếu có thì lấy, không có thì fallback placeholder
  const imageSrc = product.image || "/placeholder.png";

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-14">
      {/* Ảnh sản phẩm */}
      <div>
        <img
          src={imageSrc}
          alt={product.title}
          className="w-full rounded-lg object-contain max-h-[500px] shadow-lg"
        />
      </div>

      {/* Thông tin sản phẩm */}
      <div className="flex flex-col">
        <h1 className="text-4xl font-extrabold mb-4">{product.title}</h1>

        <div className="flex items-center space-x-2 mb-6">
         <div className="flex items-center">
          <span>{product.rating.rate}</span>
          <StarIcon className="text-yellow-400" />
         </div>
          <span className="text-sm text-gray-500">({product.rating?.count || 0} đánh giá)</span>
        </div>

        <p className="text-3xl font-extrabold text-red-600 mb-6">
          {product.price.toLocaleString()} VNĐ
        </p>

        <div className="mb-6 flex items-center space-x-4">
          <label htmlFor="quantity" className="font-semibold text-lg">
            Số lượng:
          </label>
          <input
            type="number"
            id="quantity"
            min={1}
            max={99}
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
            className="w-20 rounded-md border border-gray-300 text-center py-1 text-lg"
          />
        </div>

        <div className="flex space-x-5">
          <button
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition"
            onClick={() => alert(`Đã thêm ${quantity} sản phẩm vào giỏ hàng`)}
          >
            Thêm vào giỏ
          </button>
          <button
            className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-md transition"
            onClick={() => alert("Chuyển đến trang thanh toán")}
          >
            Mua ngay
          </button>
        </div>

        <section className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Mô tả sản phẩm</h2>
          <p className="text-gray-700 whitespace-pre-line">{product.description}</p>
        </section>
      </div>
    </div>
  );
}
