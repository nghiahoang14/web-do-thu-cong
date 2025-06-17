"use client"
import { ReduxProvider } from "@/redux/ReduxProvider";

import { Search } from "../components/Client/Search/Search";
import { Sider } from "../components/Client/Sider/Sider";


import "../globals.css";

import { Footer } from "../components/Client/Footer/Footer";
import { usePathname } from 'next/navigation';



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const pathname = usePathname();

  const hideLayout = pathname === '/Client/Checkout'; 
  return (
    
        <ReduxProvider>
          
          
           {!hideLayout ? <Sider /> : <div style={{ height: 0 }} />}
          
          <div className="container mx-auto ">
                {!hideLayout &&<Search />}
            <div className="">
              <main className="">{children}</main>
            </div>
          </div>
          <div className="">
                {!hideLayout &&<Footer />}
          </div>
          
        </ReduxProvider>
      
  );
}
