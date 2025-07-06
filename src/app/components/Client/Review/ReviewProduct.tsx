import axios from "axios";
import { useEffect, useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import { getReviewsByProductId } from "@/services/api/client/review.api";

export const ReviewProduct = ({id}:{id:string}) => {
    const [reviews, setReviews] = useState<any[]>([]);
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await getReviewsByProductId(id);
        setReviews(res.reviews);
        // console.log(res.data);
      } catch (err: any) {
        console.error("Lỗi khi lấy đánh giá:", err);
        console.log(err.response.data.message)
      }
    };
    fetchReviews();
  }, [id]);
  return (
    <>
      <section className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Đánh giá của khách hàng</h2>

        {reviews.length === 0 ? (
          <p className="text-gray-500">
            Chưa có đánh giá nào cho sản phẩm này.
          </p>
        ) : (
          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review._id} className=" p-4 rounded shadow-sm">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="font-semibold">
                    {review.user?.name || "Ẩn danh"}
                  </span>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <StarIcon
                        key={i}
                        className={`h-5 w-5 ${
                          i <= review.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700">{review.comment}</p>
                <p className="text-sm text-gray-400 italic">
                  {new Date(review.createdAt).toLocaleString("vi-VN")}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
};
