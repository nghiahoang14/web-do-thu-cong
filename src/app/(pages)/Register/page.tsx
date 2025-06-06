
import type { Metadata } from "next";

import "../../globals.css";



export const metadata: Metadata = {
  title: "Register",
  description: "Web bán hàng thủ công",
};

export default function RegisterPage() {
  return (
   <h1 className="text-[38px] font-[700]">Register</h1>
  );
}