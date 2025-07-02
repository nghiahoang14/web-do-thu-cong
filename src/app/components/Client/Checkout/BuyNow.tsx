"use client"
import { useRouter } from "next/navigation";



export const BuyNow =(props:{product:any, quantity?: number,title:string})=>{
     const router = useRouter();
    const {product,quantity,title}=props;
    console.log(product.title)
    const handleBuyNow = () => {
  
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
         
             <button onClick={handleBuyNow} className="cursor-pointer">{title}</button>
            
        </>
    )
}