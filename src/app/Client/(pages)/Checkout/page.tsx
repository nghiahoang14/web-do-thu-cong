"use client";
import { Logo } from "@/app/components/Client/Logo/Logo";
import "../../../globals.css";

import { CheckoutInfo } from "@/app/components/Client/Checkout/CheckoutInfo";
import { CheckoutShipping } from "@/app/components/Client/Checkout/CheckoutShipping";
import { CheckoutMethod } from "@/app/components/Client/Checkout/CheckoutMethod";
import { CheckoutSummary } from "@/app/components/Client/Checkout/CheckoutSummary";
import { useEffect, useState } from "react";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { usePathname, useRouter } from "next/navigation";
import { createOrder } from "@/services/api/client/order.api";

export default function CheckoutPage() {
  const [formData, setFormData] = useState<any>({});
  const [shippingData, setShippingData] = useState<any>({});
  const [methodData, setMethodData] = useState<any>({});
  const [showError, setShowError] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const user = useSelector((state: RootState) => state.auth.user);
  const [orderItems, setOrderItems] = useState<any[]>([]);
  const [totalFromChild, setTotalFromChild] = useState(0);
  const pathname = usePathname();
  const [isBuyNow, setIsBuyNow] = useState(false);
  const Router = useRouter();
  useEffect(() => {
    const stored = localStorage.getItem("buyNowItem");
    if (pathname === "/Client/Checkout" && stored) {
      const parsed = JSON.parse(stored);
      setOrderItems([parsed]);
      setIsBuyNow(true);
    } else {
      setOrderItems(cartItems);
      setIsBuyNow(false);
    }
  }, [pathname, cartItems]);

  useEffect(() => {
    if (pathname === "/Client/Checkout" && orderItems.length > 0) {
      localStorage.removeItem("buyNowItem");
    }
  }, [orderItems, pathname]);
  useEffect(() => {
    const handleRouteChange = () => {
      const pathname = window.location.pathname;
      if (pathname !== "/Client/Checkout") {
        localStorage.removeItem("buyNowItem");
      }
    };

    window.addEventListener("popstate", handleRouteChange);
    return () => window.removeEventListener("popstate", handleRouteChange);
  }, []);
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

    const { paymentMethod } = methodData;
    const { shippingMethod } = shippingData;
    const email = formEmail || user?.email;
    const name = formName || user?.name;

    if (
      !email ||
      !name ||
      !phone ||
      !address ||
      !paymentMethod ||
      !shippingMethod
    ) {
      setShowError(true);
      return;
    }

    const orderPayload = {
      userId: user!._id,
      phone: phone,
      paymentMethod,
      shippingMethod,
      shippingAddress: `${address}, ${selectedWard?.name || ""}, ${
        selectedDistrict?.name || ""
      }, ${selectedProvince?.name || ""}`,

      status: "pending",
      items: orderItems.map((item) => ({
        image: item.image,
        title: item.title,
        product_id: item._id,
        quantity: item.quantity,
        price: item.price,
      })),
      totalPrice: totalFromChild,
    };
    console.log(orderPayload);

    try {
      const res = await createOrder(orderPayload);
      console.log(res);
      alert(res.message);
      const orderId = res.order?._id;
      const source = isBuyNow ? "buynow" : "cart";

      localStorage.removeItem("buyNowItem");
      Router.push(`/Client/CheckoutConfirm?id=${orderId}&source=${source}`);
    } catch (err: any) {
      console.error(err);
      alert(err.response.data.message);
    }
  };
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 px-4 sm:px-6 lg:px-10 py-1">
    
      <div className="w-full lg:w-2/3 flex flex-col gap-6">
        <div className="mb-4 lg:mb-6">
          <Logo />
        </div>

      
        <div className="flex flex-col xl:flex-row gap-6 xl:gap-12">
          <CheckoutInfo
            onDataChange={setFormData}
            showError={showError}
          />

         
          <div className="flex flex-col gap-6 xl:w-2/5">
            <CheckoutShipping
              onDataChange={setShippingData}
              showError={showError}
            />
            <CheckoutMethod
              onDataChange={setMethodData}
              showError={showError}
            />
          </div>
        </div>
      </div>

     
      <div className="w-full lg:w-1/3">
        <CheckoutSummary
          onTotalChange={setTotalFromChild}
          onOrder={handleOrder}
          shippingMethod={shippingData.shippingMethod}
          orderItems={orderItems}
        />
      </div>
    </div>
    </>
  );
}
