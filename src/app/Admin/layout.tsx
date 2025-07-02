"use client";

import { usePathname } from "next/navigation";

import "../globals.css";
import { AdminLayout } from "../components/Admin/layout/layout";

export default function AdminPageLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();


  const isLoginPage = pathname === "/Admin/Login";

 
  if (isLoginPage) {
    return <>{children}</>;
  }

  return <AdminLayout>{children}</AdminLayout>;
}
