"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Link from "next/link";

export const CartSummary = () => {
  const items = useSelector((state: RootState) => state.cart.items);

  if (!items || items.length === 0) return null;

  const total = items.reduce(
    (acc, item: any) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="w-full max-w-sm  mx-auto border border-gray-300 bg-white rounded-md shadow-sm">
      <h2 className="text-white bg-black px-4 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-t-md">
        THÔNG TIN ĐƠN HÀNG
      </h2>

      <div className="p-3 sm:p-4">
        <div className="text-sm mb-2">
          <span className="text-gray-700">Tổng tiền: </span>
          <span className="text-red-600 font-bold text-lg">
            {total.toLocaleString()}₫
          </span>
        </div>

        <p className="text-xs sm:text-sm text-gray-500 mb-4 leading-snug">
          Phí vận chuyển sẽ được tính ở trang thanh toán.
        </p>

        <Link
          href="/Client"
          className="block text-center border border-black text-black py-2 rounded mb-2 hover:bg-gray-100 transition text-sm sm:text-base"
        >
          Tiếp tục mua hàng
        </Link>

        <Link
          href="/Client/Checkout"
          className="block text-center bg-red-600 hover:bg-red-700 text-white py-2 rounded font-medium transition text-sm sm:text-base"
        >
          Thanh toán
        </Link>
      </div>
    </div>
  );
};
