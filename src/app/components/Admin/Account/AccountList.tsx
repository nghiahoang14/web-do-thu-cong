"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  getAccount,
  deleteAccount,
} from "@/services/api/admin/account.api";

export const AccountList = () => {
  const [accounts, setAccounts] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

 
  const fetchAccounts = async () => {
    try {
      const res = await getAccount();
      setAccounts(res.data);
    } catch (err) {
      console.error("Lỗi khi fetch tài khoản:", err);
    }
  };

  const handleDelete = async (id: string) => {
    const ok = window.confirm("Bạn có chắc muốn xoá tài khoản này?");
    if (!ok) return;

    try {
      await deleteAccount(id);
      await fetchAccounts();
      alert("Xóa thành công")
    } catch (err: any) {
      alert(
        err?.response?.data?.message || "Xoá thất bại, vui lòng thử lại!"
      );
      console.error(err);
    }
  };

  
  useEffect(() => {
    fetchAccounts();
  }, []);

  
  const filteredAccounts = accounts.filter(
    (acc) =>
      acc.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      acc.email?.toLowerCase().includes(searchTerm.toLowerCase())
  );

 
  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
     
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold">Danh sách tài khoản</h1>

        <Link href="/Admin/Account/create">
          <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500">
            Thêm tài khoản
          </button>
        </Link>
      </div>

    
      <div className="mb-4">
        <input
          type="text"
          placeholder="Tìm kiếm theo tên hoặc email..."
          className="w-full px-3 py-2 border rounded-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

     
      <div className="overflow-x-auto">
        <table className="w-full table-auto border">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border">#</th>
              <th className="px-4 py-2 border">Tên</th>
              <th className="px-4 py-2 border">Email</th>
               <th className="px-4 py-2 border">Mật khẩu</th>
              <th className="px-4 py-2 border">Trạng thái</th>
              <th className="px-4 py-2 border">Thao tác</th>
            </tr>
          </thead>

          <tbody>
            {filteredAccounts.map((acc:any, idx) => (
              <tr key={acc._id} className="text-center">
                <td className="px-4 py-2 border">{idx + 1}</td>
                <td className="px-4 py-2 border">{acc.name}</td>
                <td className="px-4 py-2 border">{acc.email}</td>
                <td className="px-4 py-2 border break-words whitespace-normal max-w-[200px]">{acc.password}</td>
                <td className="px-4 py-2 border capitalize">
                  <span
                    className={`px-2 py-1 text-sm rounded ${
                      acc.status === "active"
                        ? "bg-green-100 text-green-700"
                        : acc.status === "inactive"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {acc.status}
                  </span>
                </td>

                <td className="px-4 py-2 border">
                  <div className="flex items-center justify-center gap-2">
                    <Link href={`/Admin/Account/edit/${acc._id}`}>
                      <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                        Sửa
                      </button>
                    </Link>

                    <button
                      onClick={() => handleDelete(acc._id)}
                      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                    >
                      Xoá
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {filteredAccounts.length === 0 && (
              <tr>
                <td colSpan={5} className="text-center py-4 text-gray-500">
                  Không có tài khoản nào phù hợp.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
