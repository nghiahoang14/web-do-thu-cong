"use client"

import { useEffect, useState } from "react";
import Link from "next/link";

import { DeleteOrder, getOrders } from "@/services/api/admin/order.api";

export const OrderList = () => {
  const [orders, setOrders] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchOrders = async () => {
    try {
      const res = await getOrders();
      setOrders(res.data );
    } catch (err) {
      console.error("Lỗi khi fetch đơn hàng:", err);
    }
  };
const handleDelete = async (id: string) => {
    const confirm = window.confirm("Bạn có chắc muốn xóa đơn hàng này?");
    if (!confirm) return;
    try {
      await DeleteOrder(id);
        alert("Xóa thành công");
      fetchOrders();
    } catch (err) {
      alert("Xóa thất bại");
      console.error(err);
    }
  };
  
  useEffect(() => {
    fetchOrders();
  }, []);

  const filteredOrders = orders.filter((order) =>
    order.phone?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.userId?.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold">Danh sách đơn hàng</h1>
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Tìm kiếm theo số điện thoại hoặc tên khách hàng..."
          className="w-full px-3 py-2 border rounded-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full table-auto border">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border">#</th>
                <th className="px-4 py-2 border">Khách hàng</th>
              <th className="px-4 py-2 border">SĐT</th>
              <th className="px-4 py-2 border">Địa chỉ</th>
              <th className="px-4 py-2 border">Thanh toán</th>
              <th className="px-4 py-2 border">Vận chuyển</th>
              <th className="px-4 py-2 border">Tổng tiền</th>
             
              <th className="px-4 py-2 border">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order, index) => (
              <tr key={order._id} className="text-center">
                <td className="px-4 py-2 border">{index + 1}</td>
                <td className="px-4 py-2 border">{order.userId.name}</td>
                <td className="px-4 py-2 border">{order.phone}</td>
                <td className="px-4 py-2 border">{order.shippingAddress}</td>
                <td className="px-4 py-2 border">{order.paymentMethod}</td>
                <td className="px-4 py-2 border">{order.shippingMethod}</td>
                <td className="px-4 py-2 border">{order.totalPrice?.toLocaleString("vi-VN")}₫</td>
                
                <td className="px-4 py-2 border">
                  <div className="flex items-center justify-center gap-2">
                    <Link href={`/Admin/Order/detail/${order._id}`}>
                      <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                        Xem 
                      </button>
                    </Link>
                    <button
      onClick={() => handleDelete(order._id)}
      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
    >
      Xóa
    </button> 
                  </div>
                </td>
              </tr>
            ))}
            {filteredOrders.length === 0 && (
              <tr>
                <td colSpan={8} className="text-center py-4 text-gray-500">
                  Không có đơn hàng nào phù hợp.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
