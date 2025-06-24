"use client";
import { Logo } from "@/app/components/Client/Logo/Logo";
import "../../../globals.css";

import { CheckoutInfo } from "@/app/components/Client/Checkout/CheckoutInfo";
import { CheckoutShipping } from "@/app/components/Client/Checkout/CheckoutShipping";
import { CheckoutMethod } from "@/app/components/Client/Checkout/CheckoutMethod";
import { CheckoutSummary } from "@/app/components/Client/Checkout/CheckoutSummary";
import { useEffect, useState, } from "react";
import { RootState } from "@/redux/store";
import { useSelector,useDispatch } from "react-redux";
import axios from "axios";
import { usePathname, useRouter } from "next/navigation";
import { clearCart } from "@/redux/cartSlice";

export default function CheckoutPage() {
 const [formData, setFormData] = useState<any>({});
  const [shippingData, setShippingData] = useState<any>({});
  const [methodData, setMethodData] = useState<any>({});
  const [showError, setShowError] = useState(false);
  const items = useSelector((state: RootState) => state.cart.items);
const user = useSelector((state: RootState) => state.auth.user);
 const [orderItems, setOrderItems] = useState<any[]>([]);
const pathname = usePathname();
const dispatch = useDispatch();
const Router=useRouter();
useEffect(() => {
  const storedItem = localStorage.getItem("buyNowItem");

  if (pathname === "/Client/Checkout" && storedItem) {
    const parsed = JSON.parse(storedItem);
    setOrderItems([parsed]);
   
  } else {
    setOrderItems(items); 
  }
}, [pathname, items]);
useEffect(() => {
  if (pathname === "/Client/Checkout" && orderItems.length > 0 ) {
    
    localStorage.removeItem("buyNowItem");
  }
}, [orderItems, pathname]);

const handleOrder = async () => {
    const {
        email: formEmail,
  name: formName,
      phone,
      address,
      note,
      selectedProvince,
      selectedDistrict,
      selectedWard,
      
    } = formData;
    console.log("Form data:", formData);

   const {paymentMethod}=methodData;
   const {shippingMethod}=shippingData;
const email = formEmail || user?.email;
const name = formName || user?.name;
   
    
    if (!email || !name || !phone || !address || !paymentMethod || !shippingMethod) {
     setShowError(true);
      return;
    }
    const orderPayload = {
  userId: user?._id, 
  paymentMethod,  
  shippingAddress: `${address}, ${selectedWard?.name || ""}, ${selectedDistrict?.name || ""}, ${selectedProvince?.name || ""}`,

  status: "pending",
  items: orderItems.map((item) => ({
    product_id: item._id,
    quantity: item.quantity,
    price: item.price,
  })),
};
console.log(orderPayload);
localStorage.removeItem("buyNowItem");

try{
 const res = await axios.post("http://localhost:3001/order",orderPayload);
 console.log(res);
 if(res.data.message){
  alert(res.data.message);
 }
 Router.push("/Client/CheckoutConfirm");
 dispatch(clearCart());
 
}catch(err:any){
  console.error(err);
}


  };
  return (
    <>
      <div className="flex items-center gap-[20px]">
        <div className="w-[65%]">
          <div className="mt-[30px]">
            <Logo />
          </div>
          <div className="flex  gap-[120px]">
            <CheckoutInfo onDataChange={setFormData} showError={showError}/>
            <div className="w-[40%]">
              <CheckoutShipping onDataChange={setShippingData} showError={showError}/>
              <CheckoutMethod  onDataChange={setMethodData} showError={showError}/>
            </div>
          </div>
        </div>
       <CheckoutSummary onOrder={handleOrder} shippingMethod={shippingData.shippingMethod} orderItems={orderItems}/>
      </div>
    </>
  );
}
