"use client";

import { Logo } from "@/app/components/Client/Logo/Logo";
import "../../../globals.css";
import { CheckoutConfirm } from "@/app/components/Client/Checkout/CheckoutConfirm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { clearCart } from "@/redux/cartSlice";
import axios from "axios";
import { RootState } from "@/redux/store";

export default function CheckoutConfirmPage() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);

  const clearCartOnServer = async (userId: string) => {
  try {
    await axios.delete(`http://localhost:3001/cart/clear/${userId}`);
    console.log("🗑️ Giỏ hàng đã xóa trên server");
  } catch (err) {
    console.error("❌ Lỗi khi xóa giỏ hàng server:", err);
  }
};


  useEffect(() => {
    const clearAll = async () => {
      if (user?._id) {
        await clearCartOnServer(user._id); 
      }
      dispatch(clearCart()); 
    };

    clearAll(); 
  }, [dispatch, user]);

  return (
    <div>
      <div className="mt-[30px]">
        <Logo />
      </div>
      <div className="flex items-center gap-[50px]">
        <CheckoutConfirm />
      </div>
    </div>
  );
}
