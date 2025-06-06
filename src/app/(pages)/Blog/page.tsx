import type { Metadata } from "next";

import "../../globals.css";



export const metadata: Metadata = {
  title: "Blog",
  description: "Web bán hàng thủ công",
};

export default function BlogPage() {
  return (
   <h1 className="text-[38px] font-[700]">Blog</h1>
  );
}