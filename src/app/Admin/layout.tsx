import { AdminLayout } from "../components/Admin/layout/layout";
import "../globals.css";
  import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web bán hàng',
  description: 'web bán hàng',
};
export default function AdminPageLayout({ children }: { children: React.ReactNode }) {
  return <AdminLayout>{children}</AdminLayout>;
}
