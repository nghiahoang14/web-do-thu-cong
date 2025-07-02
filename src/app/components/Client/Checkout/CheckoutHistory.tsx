"use client";
import { RootState } from "@/redux/store";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { OrderItem } from "./OrderItem";

export const CheckoutHistory = () => {
  const [orderHistory, setOrderHistory] = useState<any[]>([]);
  const user = useSelector((state: RootState) => state.auth.user);
console.log(orderHistory)
  useEffect(() => {
    if (!user?._id) return;
    const fetchOrders = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3001/order/user/${user._id}`
        );
        setOrderHistory(res.data.orders || []);
      } catch (err) {
        console.error(err);
      }
    };
    fetchOrders();
  }, [user]);

  return (
    <>
      <div className="space-y-5">
        {orderHistory.length === 0 ? (
        <p className="text-center text-gray-500 text-[18px]">
          Người dùng chưa có đơn hàng nào.
        </p>
      ) : (orderHistory.map((order) => (
          <div
            key={order._id}
            className="border rounded-[10px] border-[#ddd] overflow-hidden"
          >
            
            <div className="flex items-center justify-between py-[15px] px-[25px] border-b border-[#ddd] bg-gray-100">
              <div className="flex items-center justify-center gap-[30px]">
                <div>
                  <p className="text-[18px] font-[600]">Mã đơn</p>
                  <p className="text-[18px] text-[#666]">#{order._id}</p>
                </div>
                <div>
                  <p className="text-[18px] font-[600]">Ngày tạo</p>
                  <p className="text-[18px] text-[#666]">
                    {new Date(order.createdAt).toLocaleDateString("vi-VN")}
                  </p>
                </div>
                <div>
                  <p className="text-[18px] font-[600]">Tổng tiền</p>
                  <p className="text-[18px] text-[#666]">
                    {(order.totalPrice ?? 0).toLocaleString("vi-VN")}₫
                  </p>
                </div>
              </div>
              
            </div>

           
            <div className="px-[25px] py-[10px]">
              {order.items.map((item: any, index: number) => (
               <OrderItem id={item._id} orderId={order._id} item={item} key={index} mode="history"  isLast={index === order.items.length - 1} />
              ))}
            </div>
          </div>
        )))}
      </div>
    </>
  );
};
