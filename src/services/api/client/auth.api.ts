import axios from "axios";

const API_BASE_URL = "http://localhost:3001/auth";

// Đăng ký tài khoản
export const register = async (formData: any) => {
  const res = await axios.post(`${API_BASE_URL}/register`, formData);
  return res.data;
};

// Đăng nhập
export const LoginAcc = async (credentials: any) => {
  const res = await axios.post(`${API_BASE_URL}/login`, credentials);
  return res.data;
};

// Gửi yêu cầu quên mật khẩu
export const forgotPassword = async (email: string) => {
  const res = await axios.post(`${API_BASE_URL}/password/forgot`, { email });
  return res.data;
};

// Xác minh OTP
export const verifyOtp = async (email: string, otp: string) => {
  const res = await axios.post(`${API_BASE_URL}/password/otp`, { email, otp });
  return res.data;
};

// Đặt lại mật khẩu mới
export const resetPassword = async (payload: {
  email: string;
  password: string;
  confirmPassword:string;
}) => {
  const res = await axios.post(`${API_BASE_URL}/password/reset`, payload);
  return res.data;
};

// Đổi mật khẩu khi đang đăng nhập
export const changePassword = async (payload: {
  email: string;
  CurrentPassword: string;
  Newpassword: string;
}) => {
  const res = await axios.patch(`${API_BASE_URL}/password/change`, payload);
  return res.data;
};
