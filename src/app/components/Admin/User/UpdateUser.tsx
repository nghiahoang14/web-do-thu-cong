"use client";

import { useState } from "react";

export const UpdateUser = ({
  UserData,
  onSubmit,
}: {
  UserData: any;
  onSubmit: (data: any) => void;
}) => {
  const [formData, setFormData] = useState({
    name: UserData.name || "",
    email: UserData.email || "",
    phone: UserData.phone || "",
    address: UserData.address || "",
    status: UserData.status || "active",
    
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6 bg-white rounded-xl shadow-md max-w-xl mx-auto">
      <h1 className="text-xl font-bold">Cập nhật người dùng</h1>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Họ tên" className="w-full px-3 py-2 border rounded" />
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="w-full px-3 py-2 border rounded" />
      <input name="phone" value={formData.phone} onChange={handleChange} placeholder="SĐT" className="w-full px-3 py-2 border rounded" />
      <input name="address" value={formData.address} onChange={handleChange} placeholder="Địa chỉ" className="w-full px-3 py-2 border rounded" />
      <select name="status" value={formData.status} onChange={handleChange} className="w-full px-3 py-2 border rounded">
        <option value="active">Hoạt động</option>
        <option value="inactive">Không hoạt động</option>
        <option value="banned">Bị khóa</option>
      </select>
     
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500">Cập nhật</button>
    </form>
  );
};
