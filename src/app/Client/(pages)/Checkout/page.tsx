"use client";
import { Logo } from "@/app/components/Client/Logo/Logo";
import "../../../globals.css";

import { CheckoutInfo } from "@/app/components/Client/Checkout/CheckoutInfo";
import { CheckoutShipping } from "@/app/components/Client/Checkout/CheckoutShipping";
import { CheckoutMethod } from "@/app/components/Client/Checkout/CheckoutMethod";
import { CheckoutSummary } from "@/app/components/Client/Checkout/CheckoutSummary";
import { useEffect, useState, } from "react";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { usePathname, useRouter } from "next/navigation";
import { createOrder } from "@/services/api/client/order.api";


export default function CheckoutPage() {
 const [formData, setFormData] = useState<any>({});
  const [shippingData, setShippingData] = useState<any>({});
  const [methodData, setMethodData] = useState<any>({});
  const [showError, setShowError] = useState(false);
  const items = useSelector((state: RootState) => state.cart.items);
const user = useSelector((state: RootState) => state.auth.user);
 const [orderItems, setOrderItems] = useState<any[]>([]);
 const [totalFromChild, setTotalFromChild] = useState(0);
const pathname = usePathname();

const Router=useRouter();
useEffect(() => {
  const storedItem = localStorage.getItem("buyNowItem");
console.log(storedItem);
  if (pathname === "/Client/Checkout" && storedItem) {
    const parsed = JSON.parse(storedItem);
    setOrderItems([parsed]);
   
  } else {
    setOrderItems(items); 
  }
}, [pathname, items]);


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
  userId: user!._id, 
  phone:phone,
  paymentMethod,  
  shippingMethod,
  shippingAddress: `${address}, ${selectedWard?.name || ""}, ${selectedDistrict?.name || ""}, ${selectedProvince?.name || ""}`,

  status: "pending",
  items: orderItems.map((item) => ({
    image:item.image,
    title:item.title,
    product_id: item._id,
    quantity: item.quantity,
    price: item.price,
  })),
  totalPrice:totalFromChild
};
console.log(orderPayload);


try{
 const res = await createOrder(  orderPayload);
 console.log(res);
 alert(res.message);
 const orderId = res.order?._id;
     const source = localStorage.getItem("buyNowItem") ? "buynow" : "cart";

  
    localStorage.removeItem("buyNowItem");
 Router.push(`/Client/CheckoutConfirm?id=${orderId}&source=${source}`);
 
 
}catch(err:any){
  console.error(err);
  alert(err.response.data.message);
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
       <CheckoutSummary  onTotalChange={(total: number) => setTotalFromChild(total)} onOrder={handleOrder} shippingMethod={shippingData.shippingMethod} orderItems={orderItems}/>
      </div>
    </>
  );
}
