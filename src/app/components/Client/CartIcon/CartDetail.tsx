"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { CartItem } from "./CartItem";
import { CartSummary } from "./CartSummary";

export const CartDetail = () => {
  const items = useSelector((state: RootState) => state.cart.items);

  return (
    <div className="mt-10 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
       
        <div className="lg:col-span-2">
          {items.length > 0 ? (
            items.map((item: any) => (
              <CartItem
                key={item._id}
                item={item}
                className="cart-item-large border rounded-md border-gray-300 mb-6 hover:bg-white"
                showRemoveButton={true}
              />
            ))
          ) : (
            <p className="text-gray-600 text-center text-lg">Giỏ hàng của bạn đang trống.</p>
          )}
        </div>

        
        <div className="sticky top-20 h-fit">
          <CartSummary />
        </div>
      </div>
    </div>
  );
};
