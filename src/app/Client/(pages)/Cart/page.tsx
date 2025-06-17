import type { Metadata } from "next";

import "../../../globals.css";
import { Title } from "@/app/components/Client/Title/Title";
import { CartDetail } from "@/app/components/Client/CartIcon/CartDetail";



export const metadata: Metadata = {
  title: "Shop",
  description: "Web bán hàng thủ công",
};

export default function CartPage() {
  return (
   <div>
    <Title title="Giỏ hàng"/>
    <CartDetail/>
   </div>
  );
}