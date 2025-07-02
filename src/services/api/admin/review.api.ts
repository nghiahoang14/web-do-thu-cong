import axios from "axios";

const API_BASE_URL = "http://localhost:3001/admin";

// Get all review
export const getReviews = async () => {
  const res = await axios.get(`${API_BASE_URL}/reviews`);
  return res.data;
};




// Delete review (soft delete)
export const deleteReview = async (id: string) => {
  const res = await axios.delete(`${API_BASE_URL}/reviews/${id}`);
  return res.data;
};
