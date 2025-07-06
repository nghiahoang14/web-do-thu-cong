import axios from "axios";

const API_BASE_URL = "http://localhost:3001/admin/accounts";

// Get all cate
export const getAccount = async () => {
  const res = await axios.get(`${API_BASE_URL}`);
  return res.data;
};

// Get one account by ID
export const getAccountById = async (id: string) => {
  const res = await axios.get(`${API_BASE_URL}/detail/${id}`);
  return res.data;
};

// Create account
export const createAccount = async (AccountData: any) => {
  const res = await axios.post(`${API_BASE_URL}/create`, AccountData);
  return res.data;
};

// Update account
export const updateAccount = async (id: string, AccountData: any) => {
  const res = await axios.patch(`${API_BASE_URL}/update/${id}`, AccountData);
  return res.data;
};

// Delete account (soft delete)
export const deleteAccount = async (id: string) => {
  const res = await axios.delete(`${API_BASE_URL}/delete/${id}`);
  return res.data;
};
export const LoginAccount = async (data: { email: string; password: string }) => {
  const res = await axios.post(`${API_BASE_URL}/login`,data);
  return res.data;
};
