"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { createAccount } from "@/services/api/admin/account.api";

export const CreateAccount = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    status: "active",
  });



  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
      alert("Vui lòng nhập đầy đủ thông tin.");
      return;
    }

    try {
      await createAccount(formData);
      router.push("/Admin/Account");
    } catch (err: any) {
      alert(err.response?.data?.message || "Tạo tài khoản thất bại.");
      console.error(err);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">Tạo tài khoản mới</h2>

     

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
          <label className="block font-medium mb-1">Mật khẩu</label>
          <input
            type="password"
            name="password"
            className="w-full px-3 py-2 border rounded"
            value={formData.password}
            onChange={handleChange}
            minLength={6}
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
            <option value="banned">Khóa</option>
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
            Tạo
          </button>
        </div>
      </form>
    </div>
  );
};
