import axios from "axios";

const API_BASE_URL = "http://localhost:3001/admin/users";

// Get all user
export const getUsers = async () => {
  const res = await axios.get(`${API_BASE_URL}`);
  return res.data;
};

// Get one user by ID
export const getuserById = async (id: string) => {
  const res = await axios.get(`${API_BASE_URL}/detail/${id}`);
  return res.data;
};

// Create user
export const createUser = async (userData: any) => {
  const res = await axios.post(`${API_BASE_URL}`, userData);
  return res.data;
};

// Update user
export const updateUser = async (id: string, userData: any) => {
  const res = await axios.patch(`${API_BASE_URL}/${id}`, userData);
  return res.data;
};

// Delete user (soft delete)
export const deleteUser = async (id: string) => {
  const res = await axios.delete(`${API_BASE_URL}/${id}`);
  return res.data;
};
