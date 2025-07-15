"use client";

import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { usePathname, useRouter } from "next/navigation";

type AdminLayoutProps = {
  children: ReactNode;
};

export const AdminLayout = ({ children }: AdminLayoutProps) => {
  const [username, setUsername] = useState("Admin");
  const router = useRouter();
  const pathname = usePathname();

  // ✅ Hook luôn được gọi, bất kể pathname
  useEffect(() => {
    const userCookie = Cookies.get("user");
    if (userCookie) {
      try {
        const user = JSON.parse(userCookie);
        if (user?.name) setUsername(user.name);
      } catch {}
    }
  }, []);

  const handleLogout = () => {
    Cookies.remove("login");
    Cookies.remove("user");
    router.push("/Admin/Login");
  };

 
  if (pathname === "/Admin/Login") {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-black text-white flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold">ADMIN</h1>
        <div className="flex items-center space-x-4">
          <span className="bg-blue-600 text-white px-3 py-1 rounded">{username}</span>
          <button
            className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
            onClick={handleLogout}
          >
            Đăng xuất
          </button>
        </div>
      </header>

      <div className="flex flex-1">
        <aside className="w-64 bg-gray-900 text-white p-4 space-y-3">
          <Link href="/Admin/Products" className="block hover:text-blue-400">
            Quản lý sản phẩm
          </Link>
          <Link href="/Admin/Categories" className="block hover:text-blue-400">
            Quản lý danh mục
          </Link>
          <Link href="/Admin/Order" className="block hover:text-blue-400">
            Quản lý đơn đặt hàng
          </Link>
          <Link href="/Admin/User" className="block hover:text-blue-400">
            Quản lý người dùng
          </Link>
          <Link href="/Admin/Account" className="block hover:text-blue-400">
            Quản lý tài khoản
          </Link>
          <Link href="/Admin/Review" className="block hover:text-blue-400">
            Quản lý đánh giá
          </Link>
        </aside>

        <main className="flex-1 bg-gray-100 p-6">{children}</main>
      </div>
    </div>
  );
};
