
import type { Metadata } from "next";

import "../../globals.css";



export const metadata: Metadata = {
  title: "Login",
  description: "Web bán hàng thủ công",
};

export default function LoginPage() {
  return (
   <h1 className="text-[38px] font-[700]">Login</h1>
  );
}