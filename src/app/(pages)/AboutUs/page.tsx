
import type { Metadata } from "next";

import "../../globals.css";



export const metadata: Metadata = {
  title: "About us",
  description: "Web bán hàng thủ công",
};

export default function AboutUsPage() {
  return (
   <h1 className="text-[38px] font-[700]">About Us</h1>
  );
}