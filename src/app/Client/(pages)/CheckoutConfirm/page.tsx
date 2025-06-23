"use client";
import { Logo } from "@/app/components/Client/Logo/Logo";
import "../../../globals.css";
import { CheckoutConfirm } from "@/app/components/Client/Checkout/CheckoutConfirm";



export default function CheckoutPage() {
  
  return (
    <>
    <div>
        <div className="mt-[30px]">
                <Logo />
        </div>
          <div className="flex items-center gap-[50px]">
           <div>
            <CheckoutConfirm />
           </div>
        </div>
    </div>
       
      
    </>
  );
}
