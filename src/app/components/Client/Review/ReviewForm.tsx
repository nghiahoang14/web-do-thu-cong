"use client"
import { RootState } from "@/redux/store";
import { createReview } from "@/services/api/client/review.api";

import { useState } from "react";
import { useSelector } from "react-redux";

export const ReviewForm=({orderId,item}:{orderId:string,item:any})=>{
     const user = useSelector((state: RootState) => state.auth.user);
    const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);
     const handleReviewSubmit = async () => {
    if (!reviewText.trim()) {
      alert("Vui lòng nhập nội dung đánh giá");
      return;
    }

    if (rating === 0) {
      alert("Vui lòng chọn số sao đánh giá");
      return;
    }

    try {
     const res= await createReview({
        product: item.product_id._id,
        user: user!._id,
         order:   orderId, 
        rating,
        comment: reviewText,
      }) ;

      alert(res.message);
      setReviewText("");
      setRating(0);
      setShowReviewForm(false);
    } catch (error: any) {
      console.error("Lỗi gửi đánh giá:", error);
      alert(error?.response?.data?.message || "Có lỗi khi gửi đánh giá.");
    }
  };
   const Star = ({ index }: { index: number }) => (
    <svg
      onClick={() => setRating(index)}
      className={`w-6 h-6 cursor-pointer ${
        rating >= index ? "text-yellow-400" : "text-gray-300"
      }`}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 17.27l5.18 3.05-1.64-5.36 4.46-3.64-5.65-.49L12 1 9.65 10.83l-5.65.49 4.46 3.64-1.64 5.36L12 17.27z" />
    </svg>
  );
    return(
        <>
        <div className="px-[15px]">
            <button
              onClick={() => setShowReviewForm(!showReviewForm)}
              className="rounded-[10px] border px-3 py-2"
            >
              {showReviewForm ? "Hủy" : "Viết đánh giá"}
            </button>
          </div>

          {showReviewForm && (
            <div className="px-[15px] pt-2">
              <div className="flex mb-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} index={i} />
                ))}
              </div>

              <textarea
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                className="w-full border border-gray-300 rounded p-2"
                rows={3}
                placeholder="Nhập đánh giá của bạn..."
              />
              <button
                onClick={handleReviewSubmit}
                className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded disabled:opacity-60"
              >
                Gửi
              </button>
            </div>
          )}
        </>
    )
}