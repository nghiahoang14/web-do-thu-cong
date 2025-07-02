"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import { getAccountById, updateAccount } from "@/services/api/admin/account.api";

export const UpdateAccount = () => {
  const router = useRouter();
  const { id } = useParams(); 

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    status: "active",
  });

 

  
  const fetchAccount = async () => {
    try {
      const res = await getAccountById(id as string);

      const { name, email, status } = res.data;
      setFormData({ name, email, password: "", status });
    } catch (err: any) {
      console.error("Lỗi khi fetch tài khoản:", err);
      alert("Không tìm thấy tài khoản.");
    }
  };

  useEffect(() => {
    if (id) fetchAccount();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      alert("Tên và email không được để trống.");
      return;
    }

    try {
      await updateAccount(id as string,formData);
      alert("Cập nhật thành công")
      router.push("/Admin/Account");
    } catch (err: any) {
      console.error("Lỗi khi cập nhật:", err);
      alert(err.response?.data?.message || "Cập nhật thất bại.");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">Cập nhật tài khoản</h2>

     

      <form onSubmit={handleSubmit} className="space-y-4">
        
        <div>
          <label className="block font-medium mb-1">Tên</label>
          <input
            type="text"
            name="name"
            className="w-full px-3 py-2 border rounded"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

       
        <div>
          <label className="block font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            className="w-full px-3 py-2 border rounded"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

      
        <div>
          <label className="block font-medium mb-1">Mật khẩu </label>
          <input
            type="password"
            name="password"
            className="w-full px-3 py-2 border rounded"
            value={formData.password}
            onChange={handleChange}
            minLength={6}
            placeholder="Để trống nếu không đổi"
          />
        </div>

      
        <div>
          <label className="block font-medium mb-1">Trạng thái</label>
          <select
            name="status"
            className="w-full px-3 py-2 border rounded"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="active">Hoạt động</option>
            <option value="inactive">Không hoạt động</option>
            <option value="banned">Bị cấm</option>
          </select>
        </div>

       
        <div className="flex justify-end gap-2 pt-4">
          <button
            type="button"
            onClick={() => router.push("/Admin/Account")}
            className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
          >
            Hủy
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500"
          >
            Cập nhật
          </button>
        </div>
      </form>
    </div>
  );
};
