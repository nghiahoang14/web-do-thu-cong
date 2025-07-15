import axios from "axios";

const API_BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/reviews`;
console.log("API_BASE_URL:", API_BASE_URL);

// Tạo đánh giá mới
export const createReview = async (data: {
  rating: number;
  comment: string;
  product: string;
  user: string;
  order: string;
}) => {
  const res = await axios.post(`${API_BASE_URL}`, data);

  return res.data;
};

// Lấy danh sách đánh giá theo ID sản phẩm
export const getReviewsByProductId = async (id: string) => {
  const res = await axios.get(`${API_BASE_URL}/${id}`);
  return res.data; 
};
