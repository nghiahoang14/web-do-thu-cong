"use client";

import { Logo } from "@/app/components/Client/Logo/Logo";
import "../../../globals.css";

import { useDispatch, useSelector } from "react-redux";
import CheckIcon from "@mui/icons-material/Check";
import { useEffect } from "react";
import { clearCart } from "@/redux/cartSlice";
import { RootState } from "@/redux/store";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ClearCart } from "@/services/api/client/cart.api";

export default function CheckoutConfirmPage() {
    const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const source = searchParams.get("source");
console.log(id);
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);

  const clearCartOnServer = async (userId: string) => {
  try {
    await ClearCart(userId);
    console.log("🗑️ Giỏ hàng đã xóa trên server");
  } catch (err:any) {
    console.error( err.response.data.message);
  }
};


 useEffect(() => {
  const clearAll = async () => {
   

    if (source !== "buynow" && user?._id) {
      
      await clearCartOnServer(user._id);
      dispatch(clearCart());
    }

    
    localStorage.removeItem("buyNowItem");
  };

  clearAll();
}, [dispatch, user]);


  return (
  <div className="px-4 sm:px-10 py-6">
    <div className="mt-[30px]">
      <Logo />
    </div>

    <div className=" justify-center flex flex-col sm:flex-row items-center gap-[20px] mt-[30px]">
      <div className="rounded-full border-2 border-green-400 p-3">
        <CheckIcon className="text-green-500" fontSize="large" />
      </div>                                    
      <div className="text-center sm:text-left">
        <p className="text-[20px] font-[700]">Cảm ơn bạn đã đặt hàng</p>
        {/* <p>
          {`Một email xác nhận đã được gửi tới ${user?.email}. Xin vui lòng kiểm tra email của bạn`}
        </p> */}
      </div>
    </div>

    <div className="flex flex-col sm:flex-row items-center justify-center mt-[100px] gap-[20px]">
      <Link
        href="/Client"
        className="text-center border border-black text-black py-2 px-4 rounded hover:bg-gray-100 transition w-full sm:w-auto"
      >
        Tiếp tục mua hàng
      </Link>

      <Link
        href={`/Client/CheckoutDetail?id=${id}`}
        className="text-center bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded font-medium transition w-full sm:w-auto"
      >
        Chi tiết đơn hàng
      </Link>
    </div>
  </div>
);

}
