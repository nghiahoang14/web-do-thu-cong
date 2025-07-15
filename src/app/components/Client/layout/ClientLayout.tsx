
"use client";

import { ReduxProvider } from "@/redux/ReduxProvider";
import { Search } from "../Search/Search";
import { Sider } from "../Sider/Sider";
import { Footer } from "../Footer/Footer";
import { usePathname } from "next/navigation";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const noLayoutRoutes = [
    "/Client/Checkout",
    "/Client/ConfirmCheckout",
    "/Client/OrderHistory",
  ];

  const hideLayout = noLayoutRoutes.some((route) => pathname.startsWith(route));

  return (
    <ReduxProvider>
      {!hideLayout ? <Sider /> : <div style={{ height: 0 }} />}
      <div className="container mx-auto ">
        <div className="w-full">
          {!hideLayout && <Search />}
        </div>
        <main>{children}</main>
      </div>
      {!hideLayout && <Footer />}
    </ReduxProvider>
  );
}
