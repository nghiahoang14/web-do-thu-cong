import axios from "axios";

const API_BASE_URL = "http://localhost:3001/admin/category";

// Get all cate
export const getCategories = async () => {
  const res = await axios.get(`${API_BASE_URL}`);
  return res.data;
};

// Get one product by ID
export const getCategoryById = async (id: string) => {
  const res = await axios.get(`${API_BASE_URL}/detail/${id}`);
  return res.data;
};

// Create cate
export const createCategory = async (CategoryData: any) => {
  const res = await axios.post(`${API_BASE_URL}/create`, CategoryData);
  return res.data;
};

// Update Category
export const updateCategory = async (id: string, CategoryData: any) => {
  const res = await axios.patch(`${API_BASE_URL}/update/${id}`, CategoryData);
  return res.data;
};

// Delete Category (soft delete)
export const deleteCategory = async (id: string) => {
  const res = await axios.delete(`${API_BASE_URL}/delete/${id}`);
  return res.data;
};
