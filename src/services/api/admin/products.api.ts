import axios from "axios";

const API_BASE_URL = "http://localhost:3001/admin";

// Get all products
export const getProducts = async () => {
  const res = await axios.get(`${API_BASE_URL}/products`);
  return res.data;
};

// Get one product by ID
export const getProductById = async (id: string) => {
  const res = await axios.get(`${API_BASE_URL}/products/detail/${id}`);
  return res.data;
};

// Create product
export const createProduct = async (productData: any) => {
  const res = await axios.post(`${API_BASE_URL}/products/create`, productData);
  return res.data;
};

// Update product
export const updateProduct = async (id: string, productData: any) => {
  const res = await axios.patch(`${API_BASE_URL}/products/update/${id}`, productData);
  return res.data;
};

// Delete product (soft delete)
export const deleteProduct = async (id: string) => {
  const res = await axios.delete(`${API_BASE_URL}/products/delete/${id}`);
  return res.data;
};
