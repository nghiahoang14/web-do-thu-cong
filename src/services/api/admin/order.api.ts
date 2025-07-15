import axios from "axios";

const API_BASE_URL = "https://qldtc-uuuc.vercel.app/admin/orders";

// Get all orders
export const getOrders = async () => {
  const res = await axios.get(`${API_BASE_URL}`);
  return res.data;
};
// Get detail orders
export const getDetailOrder = async (id :string) => {
  const res = await axios.get(`${API_BASE_URL}/detail/${id}`);
  return res.data;
};
// delete orders
export const DeleteOrder = async (id :string) => {
  const res = await axios.delete(`${API_BASE_URL}/delete/${id}`);
  return res.data;
};