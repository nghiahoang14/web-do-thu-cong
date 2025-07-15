import axios from "axios";

const API_BASE_URL = "https://qldtc-uuuc.vercel.app/products";
export const getProducts = async () => {
  const res = await axios.get(`${API_BASE_URL}`);
  return res.data; // -> { message, data }
};

// Lấy chi tiết sản phẩm theo ID
export const getProductById = async (id: string) => {
  const res = await axios.get(`${API_BASE_URL}/detail/${id}`);
  return res.data; // -> { message, data }
};

// Tìm kiếm sản phẩm theo từ khoá .
export const searchProduct = async (query: string) => {
  const res = await axios.get(`${API_BASE_URL}/search`, {
    params: { keyword: query },
  });
  return res.data;
};