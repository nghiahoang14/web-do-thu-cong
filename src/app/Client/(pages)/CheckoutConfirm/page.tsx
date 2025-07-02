"use client";

import { Logo } from "@/app/components/Client/Logo/Logo";
import "../../../globals.css";

import { useDispatch, useSelector } from "react-redux";
import CheckIcon from "@mui/icons-material/Check";
import { useEffect } from "react";
import { clearCart } from "@/redux/cartSlice";
import axios from "axios";
import { RootState } from "@/redux/store";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function CheckoutConfirmPage() {
  const id= useSearchParams().get("id");

console.log(id);
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
    const isBuyNow = localStorage.getItem("buyNowItem");

    if (!isBuyNow && user?._id) {
      
      await clearCartOnServer(user._id);
      dispatch(clearCart());
    }

    
    localStorage.removeItem("buyNowItem");
  };

  clearAll();
}, [dispatch, user]);


  return (
    <div>
      <div className="mt-[30px]">
        <Logo />
      </div>
      <div className="flex items-center gap-[30px] mt-[30px] ">
          <div className="rounded-full border-2 border-green-400 p-3">
            <CheckIcon className="text-green-500" fontSize="large" />
          </div>
          <div>
            <p className="text-[20px] font-[700]">Cảm ơn bạn đã đặt hàng</p>
            <p>
              {`Một email xác nhận đã được gửi tới ${user?.email}. Xin vui lòng kiểm tra email của bạn`}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center mt-[100px] gap-[30px] ">
           <Link
          href="/Client"
          className=" text-center border border-black text-black py-2 px-3 rounded hover:bg-gray-100 transition"
        >
          Tiếp tục mua hàng
        </Link>

        <Link
          href={`/Client/CheckoutDetail?id=${id}`}
          className="  text-center bg-red-600 hover:bg-red-700 text-white py-2 px-3 rounded font-medium transition"
        >
         Chi tiết đơn hàng
        </Link>
        </div>
    </div>
  );
}
