

import "../globals.css";
import { AdminLayout } from "../components/Admin/layout/layout";

export default function AdminPageLayout({ children }: { children: React.ReactNode }) {
  

  return <AdminLayout>{children}</AdminLayout>;
}
