import type { Metadata } from "next";

import "../../globals.css";



export const metadata: Metadata = {
  title: "New Product",
  description: "Web bán hàng thủ công",
};

export default function NewProductPage() {
  return (
   <h1 className="text-[38px] font-[700]">Shop</h1>
  );
}