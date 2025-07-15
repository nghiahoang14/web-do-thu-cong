"use client";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { OrderItem } from "./OrderItem";
import { getOrdersByUserId } from "@/services/api/client/order.api";

export const CheckoutHistory = () => {
  const [orderHistory, setOrderHistory] = useState<any[]>([]);
  const user = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    if (!user?._id) return;
    const fetchOrders = async () => {
      try {
        const res = await getOrdersByUserId(user._id);
        setOrderHistory(res.orders || []);
      } catch (err: any) {
        console.error(err);
      }
    };
    fetchOrders();
  }, [user]);

  return (
    <div className="px-4 sm:px-8 py-6">
      {orderHistory.length === 0 ? (
        <p className="text-center text-gray-500 text-base sm:text-lg">
          Người dùng chưa có đơn hàng nào.
        </p>
      ) : (
        <div className="space-y-6">
          {orderHistory.map((order) => (
            <div
              key={order._id}
              className="border rounded-lg border-[#ddd] overflow-hidden"
            >
              {/* Header đơn hàng */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between py-4 px-6 bg-gray-100 border-b border-[#ddd] gap-y-3 sm:gap-y-0 sm:gap-x-12">
                <div>
                  <p className="text-sm sm:text-base font-semibold">Mã đơn</p>
                  <p className="text-sm sm:text-base text-gray-600">
                    #{order._id}
                  </p>
                </div>
                <div>
                  <p className="text-sm sm:text-base font-semibold">Ngày tạo</p>
                  <p className="text-sm sm:text-base text-gray-600">
                    {new Date(order.createdAt).toLocaleDateString("vi-VN")}
                  </p>
                </div>
                <div>
                  <p className="text-sm sm:text-base font-semibold">Tổng tiền</p>
                  <p className="text-sm sm:text-base text-gray-600">
                    {(order.totalPrice ?? 0).toLocaleString("vi-VN")}₫
                  </p>
                </div>
              </div>

              {/* Danh sách sản phẩm */}
              <div className="px-4 sm:px-6 py-2">
                {order.items.map((item: any, index: number) => (
                  <OrderItem
                    key={item._id}
                    id={item._id}
                    orderId={order._id}
                    item={item}
                    mode="history"
                    isLast={index === order.items.length - 1}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
