import axios from "axios";

const API_BASE_URL = "http://localhost:3001/admin";

// Get all cate
export const getCategories = async () => {
  const res = await axios.get(`${API_BASE_URL}/category`);
  return res.data;
};

// Get one product by ID
export const getCategoryById = async (id: string) => {
  const res = await axios.get(`${API_BASE_URL}/category/detail/${id}`);
  return res.data;
};

// Create product
export const createCategory = async (CategoryData: any) => {
  const res = await axios.post(`${API_BASE_URL}/category/create`, CategoryData);
  return res.data;
};

// Update Category
export const updateCategory = async (id: string, CategoryData: any) => {
  const res = await axios.patch(`${API_BASE_URL}/category/update/${id}`, CategoryData);
  return res.data;
};

// Delete Category (soft delete)
export const deleteCategory = async (id: string) => {
  const res = await axios.delete(`${API_BASE_URL}/category/delete/${id}`);
  return res.data;
};
