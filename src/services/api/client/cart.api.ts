import axios from "axios";

const API_BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/cart`;;

// Thêm sản phẩm vào giỏ hàng
export const AddToCart = async (payload: {
  userId: string;
  productId: string;
  quantity: number;
}) => {
  const res = await axios.post(`${API_BASE_URL}/add`, payload);
  return res.data;
};

// Lấy giỏ hàng của người dùng
export const getCart = async (userId: string) => {
  const res = await axios.get(`${API_BASE_URL}/${userId}`);
  return res.data;
};

// Cập nhật số lượng sản phẩm trong giỏ hàng
export const updateCart = async (payload: {
  userId: string;
  productId: string;
  quantity: number;
}) => {
  const res = await axios.patch(`${API_BASE_URL}/update`, payload);
  return res.data;
};

// Xóa một sản phẩm khỏi giỏ hàng
export const RemoveFromCart = async (payload: {
  userId: string;
  productId: string;
}) => {
  const res = await axios.delete(`${API_BASE_URL}/remove`, { data: payload });
  return res.data;
};

// Xóa toàn bộ giỏ hàng của người dùng
export const ClearCart = async (userId: string) => {
  const res = await axios.delete(`${API_BASE_URL}/clear/${userId}`);
  return res.data;
};
