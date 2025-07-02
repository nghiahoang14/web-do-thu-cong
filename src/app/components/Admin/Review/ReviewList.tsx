"use client";

import { useEffect, useState } from "react";
import { getReviews, deleteReview } from "@/services/api/admin/review.api";
import StarIcon from "@mui/icons-material/Star";
import Link from "next/link";

export const ReviewList = () => {
  const [reviews, setReviews] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

 
  const fetchReviews = async () => {
    try {
      const res = await getReviews();
      setReviews(res.reviews);
      console.log(res.reviews)
    } catch (err) {
      console.error("Lỗi khi fetch review:", err);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  
  const handleDelete = async (id: string) => {
    if (!window.confirm("Bạn có chắc muốn xóa đánh giá này?")) return;
    try {
      const res= await deleteReview(id);
      alert(res.data.messgae)
      fetchReviews();
    } catch (err:any) {
      alert(err.response.data.message);
      console.error(err);
    }
  };

  
   const filteredReviews = reviews.filter((rv) =>
    (rv?.user?.name ?? "").toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold">Danh sách đánh giá</h1>
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Tìm theo người dùng..."
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
              <th className="px-4 py-2 border text-left">Sản phẩm</th>
              <th className="px-4 py-2 border text-left">Người dùng</th>
              <th className="px-4 py-2 border">Số sao</th>
              <th className="px-4 py-2 border text-left">Nội dung</th>
              <th className="px-4 py-2 border">Ngày tạo</th>
              <th className="px-4 py-2 border">Thao tác</th>
            </tr>
          </thead>

          <tbody>
            {filteredReviews.map((rv, idx) => (
              <tr key={rv._id} className="text-center">
                <td className="px-4 py-2 border">{idx + 1}</td>

                <td className="px-4 py-2 border flex items-center ">
                  <img
                    src={rv.product?.image}
                    alt=""
                    className="w-8 h-8 object-cover rounded"
                  />
                 
                </td>

               
                <td className="px-4 py-2 border">{rv.user?.name }</td>

             
                <td className="px-4 py-2 border">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <StarIcon
                      key={i}
                      className={`inline-block h-4 w-4 ${
                        i <= rv.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </td>

         
                <td className="px-4 py-2 border text-left max-w-[320px]">
                  <span title={rv.comment}>{rv.comment.slice(0, 60)}…</span>
                </td>

           
                <td className="px-4 py-2 border">
                  {new Date(rv.createdAt).toLocaleString("vi-VN")}
                </td>

             
                <td className="px-4 py-2 border">
                  <button
                    onClick={() => handleDelete(rv._id)}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}

         
            {filteredReviews.length === 0 && (
              <tr>
                <td colSpan={7} className="text-center py-4 text-gray-500">
                  Không có đánh giá nào phù hợp.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
