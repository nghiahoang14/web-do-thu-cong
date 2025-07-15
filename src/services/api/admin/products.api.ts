import axios from "axios";

const API_BASE_URL =`${process.env.NEXT_PUBLIC_API_URL}/admin/products`;

// Get all products
export const getProducts = async () => {
  const res = await axios.get(`${API_BASE_URL}`);
  return res.data;
};

// Get one product by ID
export const getProductById = async (id: string) => {
  const res = await axios.get(`${API_BASE_URL}/detail/${id}`);
  return res.data;
};

// Create product
export const createProduct = async (productData: any) => {
  const res = await axios.post(`${API_BASE_URL}/create`, productData);
  return res.data;
};

// Update product
export const updateProduct = async (id: string, productData: any) => {
  const res = await axios.patch(`${API_BASE_URL}/update/${id}`, productData);
  return res.data;
};

// Delete product (soft delete)
export const deleteProduct = async (id: string) => {
  const res = await axios.delete(`${API_BASE_URL}/delete/${id}`);
  return res.data;
};
