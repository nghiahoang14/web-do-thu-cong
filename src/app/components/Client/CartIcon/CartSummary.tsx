"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Link from "next/link";

export const CartSummary = () => {
  const items = useSelector((state: RootState) => state.cart.items);

  if (!items || items.length === 0) return null;

  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className=" border border-gray-300 bg-white rounded-md w-full max-w-sm">
      <h2 className="text-white bg-black px-4 py-4 text-sm font-semibold rounded-t-md">
        THÔNG TIN ĐƠN HÀNG
      </h2>

      <div className="p-4">
        <div className="text-sm mb-2">
          <span className="text-gray-700">Tổng tiền: </span>
          <span className="text-red-600 font-bold text-lg">
            {total.toLocaleString()}₫
          </span>
        </div>

        <p className="text-xs text-gray-500 mb-4 leading-snug">
          Phí vận chuyển sẽ được tính ở trang thanh toán.
          <br />
          Bạn cũng có thể nhập mã giảm giá ở trang thanh toán.
        </p>

      

        <Link
          href="/Client"
          className="block text-center border border-black text-black py-2 rounded mb-2 hover:bg-gray-100 transition"
        >
          Tiếp tục mua hàng
        </Link>

        <Link
          href="/Client/Checkout"
          className="block text-center bg-red-600 hover:bg-red-700 text-white py-2 rounded font-medium transition"
        >
          Thanh toán
        </Link>
      </div>
    </div>
  );
};
