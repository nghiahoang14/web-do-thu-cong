
import ClientLayout from "../components/Client/layout/ClientLayout";
import "../globals.css";
export default function Layout({ children }: { children: React.ReactNode }) {
  return <ClientLayout>{children}</ClientLayout>;
}
