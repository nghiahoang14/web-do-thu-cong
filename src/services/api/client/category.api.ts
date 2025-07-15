import axios from "axios";

const API_BASE_URL = "https://qldtc-uuuc.vercel.app/category";

// Lấy tất cả danh mục
export const getCategories = async () => {
  const res = await axios.get(`${API_BASE_URL}`);
  return res.data; 
};

// Lấy sản phẩm theo danh mục (id danh mục)
export const getProductsByCategory = async (categoryId: string) => {
  const res = await axios.get(`${API_BASE_URL}/${categoryId}`);
  return res.data; 
};
