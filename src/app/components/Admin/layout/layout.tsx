import Link from "next/link";
import { ReactNode } from "react";

type AdminLayoutProps = {
  children: ReactNode;
  username?: string;
};

export const AdminLayout = ({ children, username = "Admin" }: AdminLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-black text-white flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold">ADMIN</h1>
        <div className="flex items-center space-x-4">
          <span className="bg-blue-600 text-white px-3 py-1 rounded">{username}</span>
          <button className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">Đăng xuất</button>
        </div>
      </header>

      <div className="flex flex-1">
        <aside className="w-64 bg-gray-900 text-white p-4 space-y-3">
          <Link href="/Admin/Products" className="block hover:text-blue-400">
            📦 Quản lý sản phẩm
          </Link>
          <Link href="/admin/categories" className="block hover:text-blue-400">
            📁 Quản lý danh mục
          </Link>
        </aside>

        <main className="flex-1 bg-gray-100 p-6">{children}</main>
      </div>
    </div>
  );
};