"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { CartItem } from "./CartItem";
import { CartSummary } from "./CartSummary";
import { removeFromCart } from "@/redux/cartSlice";

export const CartDetail = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();


  
  return (
    <>
      <div className="mt-[40px]">
        <div className="flex gap-[40px]">
          <div className="w-[65%]">
            {items.map((item) => (
              <CartItem
                key={item._id}
                item={item}
                className=" cart-item-large border rounded-[5px] border-[#E5E7EB] mb-[30px] hover:bg-white"
                showRemoveButton={true}
              
              />
            ))}
            
          </div>
          <div>
            <CartSummary />
          </div>
        </div>
      </div>
    </>
  );
};
