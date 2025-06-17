import { AdminLayout } from "../components/Admin/layout/layout";
import "../globals.css";
export default function AdminPageLayout({ children }: { children: React.ReactNode }) {
  return <AdminLayout>{children}</AdminLayout>;
}
