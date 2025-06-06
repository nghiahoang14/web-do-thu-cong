import type { Metadata } from "next";

import "../../globals.css";



export const metadata: Metadata = {
  title: "Sản phẩm",
  description: "Web bán hàng thủ công",
};

export default function ProductPage() {
  return (
   <h1 className="text-[38px] font-[700]">Sản phẩm</h1>
  );
}