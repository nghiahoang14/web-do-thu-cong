import { Footer } from "./components/Client/Footer/Footer";
import { Search } from "./components/Client/Search/Search";
import { Sider } from "./components/Client/Sider/Sider";
import "./globals.css";
import type { Metadata } from "next";





export const metadata: Metadata = {
  title: "Web bán hàng",
  description: "Web bán hàng thủ công",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="h-[88px]"><Sider/></div>
        <div className="container mx-auto ">
          <Search/>
            <div className="">
              <main className="">{children}</main>
            </div>
        </div>
       <div className=""><Footer/></div>
      </body>
    </html>
  );
}
