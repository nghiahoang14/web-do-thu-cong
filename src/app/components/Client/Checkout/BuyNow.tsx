"use client"
import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";



export const BuyNow =(props:{product:any, quantity?: number,title:string})=>{
     const router = useRouter();
    const {product,quantity,title}=props;
    console.log(product.title)
    const user = useSelector((state: RootState) => state.auth.user);
    const handleBuyNow = () => {
   if (!user) {
      alert("Vui lòng đăng nhập để mua ngay.");
      return;
    }
  const buyNowItem = {
    _id: product?.product_id?._id || product._id,
    title: product.title,
    price: product.price,
    image: product.image,
    quantity: quantity||1, 
  };

  localStorage.setItem("buyNowItem", JSON.stringify(buyNowItem));
  router.push("/Client/Checkout");
};
    return(
        <>
         
             <button onClick={handleBuyNow} className={`cursor-pointer ${
          user
            ? "bg-blue-600 text-white hover:bg-blue-500"
            : " cursor-not-allowed"
        }`}>{title}</button>
            
        </>
    )
}