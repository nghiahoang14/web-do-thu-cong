"use client"
import { RootState } from "@/redux/store";

import axios from "axios";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Logo } from "../Logo/Logo";
import { OrderItem } from "./OrderItem";
import { getOrderById } from "@/services/api/client/order.api";

export const CheckoutDetail = () => {
  const users = useSelector((state: RootState) => state.auth.user);
  const params = useSearchParams();
  const id = params.get("id");
  const [order, setOrder] = useState<any>(null);

  useEffect(() => {
    if (!id) return;

    const fetchOrder = async () => {
      try {
        const res = await getOrderById(id);
        console.log("✅ Dữ liệu order:", res.data);
        setOrder(res.order);
      } catch (err: any) {
        console.error("❌ Lỗi API:", err);
       alert(err.response.data.message)
      }
    };

    fetchOrder();
  }, [id]);

  const shippingFee = order?.shippingMethod === "free" ? 0 : 40000;
  const productTotal = order?.items?.reduce(
  (acc: number, item: any) => acc + item.price * item.quantity,
  0
);


  return (
    <>
     
        <div className="mt-[20px]">
               <Logo />
             </div>

        <div className="border p-4 grid grid-cols-2 gap-4 border-[#ddd] rounded mt-[30px]">
          <div>
            <h2 className="font-semibold text-lg mb-1">Thông tin mua hàng</h2>
            <p>{users?.name}</p>
            <p>{users?.email}</p>
            <p>{order?.phone}</p>

            <h2 className="font-semibold text-lg mt-4 mb-1">Phương thức thanh toán</h2>
            <p>{order?.paymentMethod === "BANK" ? "Chuyển khoản" : "Thanh toán khi nhận hàng"}</p>
          </div>

          <div>
            <h2 className="font-semibold text-lg mb-1">Địa chỉ nhận hàng</h2>
            {order?.shippingAddress?.split(",").map((part: string, index: number) => (
              <p key={index}>{part.trim()}</p>
            ))}

            <h2 className="font-semibold text-lg mt-4 mb-1">Phương thức vận chuyển</h2>
            <p>{order?.shippingMethod === "free" ? "Giao hàng miễn phí" : "Giao hàng nhanh"}</p>
          </div>
        </div>
     

      <div className="border rounded-[10px] border-[#ddd] mt-6 ">
        <div className="text-[18px] font-[600] px-[15px] py-[15px] border-b border-[#ddd]">
          {`Đơn hàng #${id} (${order?.items.length || 0} sản phẩm)`}
        </div>
{order?.items?.map((item: any, index: number) => (
      <OrderItem key={item._id} item={item} id={item._id} orderId={id || ""} isLast={index === order.items.length - 1} />
))}
        <div className="flex justify-between py-[10px] border-t border-[#ddd] px-[15px]">
          <span>Tạm tính</span>
          <span>{productTotal?.toLocaleString("vi-VN")}₫</span>
        </div>
        <div className="flex justify-between py-[10px] px-[15px]">
          <span>Phí vận chuyển</span>
          <span>{shippingFee.toLocaleString("vi-VN")}₫</span>
        </div>
        <div className="flex justify-between py-[10px] mt-2 border-t border-[#ddd] font-semibold  text-[17px] px-[15px]">
          <span>Tổng cộng</span>
          <span className="text-red-500">{order?.totalPrice.toLocaleString("vi-VN")}₫</span>
        </div>
      </div>
      <div className="flex items-center justify-center my-[40px] gap-[30px] ">
           <Link
          href="/Client"
          className=" text-center border border-black text-black py-2 px-3 rounded hover:bg-gray-100 transition"
        >
          Tiếp tục mua hàng
        </Link>

        <Link
          href={`/Client/CheckoutHistory`}
          className="  text-center bg-red-600 hover:bg-red-700 text-white py-2 px-3 rounded font-medium transition"
        >
         Lịch sử mua hàng
        </Link>
        </div>
    </>
  );
};
