import type { Metadata } from "next";

import "../../globals.css";



export const metadata: Metadata = {
  title: "Shop",
  description: "Web bán hàng thủ công",
};

export default function ShopPage() {
  return (
   <h1 className="text-[38px] font-[700]">Shop</h1>
  );
}