import axios from "axios";

const API_BASE_URL = "https://qldtc-uuuc.vercel.app/order";

// 🛒 Tạo đơn hàng mới
export const createOrder = async (payload: {
  userId: string;
  phone: string;
  shippingAddress: string;
  shippingMethod: string;
  paymentMethod: string;
  totalPrice: number;
  items: {
    product_id: string;
    quantity: number;
  }[];
}) => {
  const res = await axios.post(`${API_BASE_URL}/`, payload);
  return res.data; 
};

// 📦 Lấy đơn hàng theo ID
export const getOrderById = async (orderId: string) => {
  const res = await axios.get(`${API_BASE_URL}/${orderId}`);
  return res.data; 
};

// 📜 Lấy tất cả đơn hàng theo userId
export const getOrdersByUserId = async (userId: string) => {
  const res = await axios.get(`${API_BASE_URL}/user/${userId}`);
  return res.data; 
};
