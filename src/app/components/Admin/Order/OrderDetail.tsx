
"use client";
import {  useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { getDetailOrder } from "@/services/api/admin/order.api";

export const OrderDetail = () => {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  const [order, setOrder] = useState<any>(null);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const res = await getDetailOrder(id);
        setOrder(res);
        console.log(res)
      } catch (err) {
        alert("Không tìm thấy đơn hàng");
        router.push("/Admin/Order");
      }
    };

    if (id) fetchDetail();
  }, [id]);
console.log(order);
  if (!order) return <p>Đang tải...</p>;

  return (
 <div className="p-6 max-w-3xl mx-auto bg-white rounded shadow">
      <h1 className="text-xl font-bold mb-4">đơn hàng #{order._id}</h1>

      <div className="mb-6 space-y-1">
        <p><strong>Khách hàng:</strong> {order.userId?.name || "Khách vãng lai"}</p>
        <p><strong>Email:</strong> {order.userId?.email || "Không có"}</p>
        <p><strong>SĐT:</strong> {order.phone}</p>
        <p><strong>Địa chỉ giao hàng:</strong> {order.shippingAddress}</p>
        <p><strong>Phương thức thanh toán:</strong> {order.paymentMethod}</p>
        <p><strong>Phương thức vận chuyển:</strong> {order.shippingMethod}</p>
       
      </div>

      

      <h2 className="text-lg font-semibold mb-2">Danh sách sản phẩm</h2>
      <div className="space-y-4">
        {order.items.map((item: any, index: number) => (
          <div key={index} className="flex items-center gap-4  pb-4">
            <img src={item.image} alt={item.name} className="w-16 h-16 object-cover border border-[#ddd] rounded" />
            <div className="flex-1">
              <p className="font-medium">{item.title}</p>
              <p>Số lượng: {item.quantity}</p>
              <p>Giá: {(item?.price??0).toLocaleString("vi-VN")}₫</p>
             

            </div>
          </div>
        ))}
        <div>
             <p className="text-[18px] font-[600] text-red-600">Tổng tiền:{(order?.totalPrice??0).toLocaleString("vi-VN")}₫</p>
        </div>
      </div>
    </div>
  );
};
