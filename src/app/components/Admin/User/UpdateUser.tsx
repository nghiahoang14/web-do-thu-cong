"use client";

import { getuserById, updateUser } from "@/services/api/admin/user.api";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const UpdateUser = () => {
  const param = useParams();
  const id = param.id;
  const router = useRouter();

  const [user, setUser] = useState<any>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    status: "active",
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await getuserById(id as string);
        setUser(res.data);
      } catch (error) {
        console.error(error);
        alert("Không tìm thấy người dùng");
        router.push("/Admin/User");
      }
    };

    if (id) {
      fetchUser();
    }
  }, [id, router]);

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        address: user.address || "",
        status: user.status || "active",
      });
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateUser(id as string, formData);
      alert("Sửa người dùng thành công!");
      router.push("/Admin/User");
    } catch (error: any) {
      console.error(error);
      alert("Sửa người dùng thất bại.");
    }
  };

  

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-6 bg-white rounded-xl shadow-md max-w-xl mx-auto"
    >
      <h1 className="text-xl font-bold">Cập nhật người dùng</h1>

      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Họ tên"
        className="w-full px-3 py-2 border rounded"
      />

      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className="w-full px-3 py-2 border rounded"
      />

      <input
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="SĐT"
        className="w-full px-3 py-2 border rounded"
      />

      <input
        name="address"
        value={formData.address}
        onChange={handleChange}
        placeholder="Địa chỉ"
        className="w-full px-3 py-2 border rounded"
      />

      <select
        name="status"
        value={formData.status}
        onChange={handleChange}
        className="w-full px-3 py-2 border rounded"
      >
        <option value="active">Hoạt động</option>
        <option value="inactive">Không hoạt động</option>
        <option value="banned">Bị khóa</option>
      </select>

      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500"
      >
        Cập nhật
      </button>
    </form>
  );
};
