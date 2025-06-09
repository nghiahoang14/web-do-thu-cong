import type { Metadata } from "next";

import "../../globals.css";



export const metadata: Metadata = {
  title: "Combo",
  description: "Web bán hàng thủ công",
};

export default function CategoryPage() {
  return (
   <h1 className="text-[38px] font-[700]">Category</h1>
  );
}