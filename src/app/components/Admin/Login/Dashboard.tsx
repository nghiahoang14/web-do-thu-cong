"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const token = getCookie("login");

    if (!token) {
      router.push("/Admin/Login");
    }
  }, []);

  
  function getCookie(name: string): string | null {
    const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
    return match ? match[2] : null;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Chào mừng đến với trang Admin</h1>
      <p>Chọn một mục bên trái để bắt đầu quản lý.</p>
    </div>
  );
}
