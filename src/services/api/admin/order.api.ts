import axios from "axios";

const API_BASE_URL = "http://localhost:3001/admin";

// Get all orders
export const getOrders = async () => {
  const res = await axios.get(`${API_BASE_URL}/orders`);
  return res.data;
};
// Get detail orders
export const getDetailOrder = async (id :string) => {
  const res = await axios.get(`${API_BASE_URL}/orders/detail/${id}`);
  return res.data;
};
// delete orders
export const DeleteOrder = async (id :string) => {
  const res = await axios.delete(`${API_BASE_URL}/orders/delete/${id}`);
  return res.data;
};