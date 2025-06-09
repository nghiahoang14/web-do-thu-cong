import type { Metadata } from "next";

import "../../../globals.css";
import { Blog } from "@/app/components/Client//Blog/Blog";
import { Title } from "@/app/components/Client/Title/Title";



export const metadata: Metadata = {
  title: "Blog",
  description: "Web bán hàng thủ công",
};

export default function BlogPage() {
  return (
   <>
  <Title title="Blog"/>
   <Blog />
   </>
  );
}