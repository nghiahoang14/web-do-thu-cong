import axios from "axios";

const API_BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/admin/reviews`;

// Get all review
export const getReviews = async () => {
  const res = await axios.get(`${API_BASE_URL}`);
  return res.data;
};




// Delete review (soft delete)
export const deleteReview = async (id: string) => {
  const res = await axios.delete(`${API_BASE_URL}/${id}`);
  return res.data;
};
