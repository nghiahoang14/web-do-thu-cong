"use client"
import { useEffect, useState } from "react";
import { NewProductCard } from "./NewProductCard"
import axios from "axios";
export interface Product {
  _id: string;
  title: string;
  price: number;
  description: string;
  stock: number;
  status: string;
  rating: {
    rate: number;
    count: number;
  };
  deleted: boolean;
  createdAt: Date; // hoặc Date nếu bạn sẽ convert sau khi fetch
  updatedAt: Date; // tương tự
  image: string;
  category?: string;   // optional vì không có trong dữ liệu mẫu
  quantity?: number;   // optional vì không có trong dữ liệu mẫu
}

export const NewProduct=()=>{
   const [products,SetProducts] = useState<Product[]>([]);
  const [load,setLoad]= useState<Boolean>(true);
  useEffect(()=>{
    axios.get<{data:Product[]}>("http://localhost:3001/products")
    .then((res)=>{
    
        SetProducts(res.data.data);
    })
    .catch((err)=>{
        console.error("Lỗi khi gọi API sản phẩm:", err);
    })
    .finally(()=>{
        setLoad(false);
    })
  },[])
    return (
        <>
        <div className="mt-[39px]">
             <h3 className="text-[25px] font-[500] text-center mb-[25px]">Sản phẩm mới</h3>
             {load ? (
                  <p className="text-center">Đang tải sản phẩm...</p>
             ):(
               <div className="grid grid-cols-4 gap-x-[20px] gap-y-[20px] mt-[15px]">
                
                {products.map((item,index)=>(
                 <NewProductCard key={index} item={item}/>
                 

                ))}
                

             </div>
             )}
            
        </div>
        </>
    )
}