"use client";
import { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import axios from "axios";

import { More } from "../More/More";
import { Navigator } from "../Navigator/Navigator";
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
  category?: string; // optional vì không có trong dữ liệu mẫu
  quantity?: number; // optional vì không có trong dữ liệu mẫu
}
const items_page =12;


export const ProductList = (props:{filterType:string,href:string, className:string,sortOption: string}) => {
  const {filterType,href,className,sortOption}=props;
  const [currentPage,setCurrentPage]=useState(1);
  const [products, SetProducts] = useState<Product[]>([]);
  
  const [load, setLoad] = useState<Boolean>(true);
  useEffect(() => {
    axios
      .get<{ data: Product[] }>("http://localhost:3001/products")
      .then((res) => {
        let data = res.data.data;
       if (filterType === "new") {
        const now = new Date();
        data = data.filter((p: Product) => {
          const createdAt = new Date(p.createdAt);
          const days = (now.getTime() - createdAt.getTime()) / (1000 * 3600 * 24);
          return days <= 7;
        });
      }
      if(sortOption==="asc"){
        data = data.sort((a,b)=>a.price-b.price);
      }
      if(sortOption==="desc"){
        data = data.sort((a,b)=>b.price-a.price);
      }
        SetProducts(data);
        setCurrentPage(1);
      })
      .catch((err) => {
        console.error("Lỗi khi gọi API sản phẩm:", err);
      })
      .finally(() => {
        setLoad(false);
      });
  }, [filterType,sortOption]);
  const startIndex = (currentPage-1) * items_page;
  const endIndex = startIndex +items_page;
  const currentProducts = products.slice(startIndex,endIndex);
    const totalPages = Math.ceil(products.length / items_page);
  return (
    <>
     
        
        {load ? (
           <div className="grid grid-cols-4 gap-4">
    {Array.from({ length: 8 }).map((_, i) => (
      <div key={i} className="bg-gray-200 h-48 animate-pulse rounded" />
    ))}
  </div>
        ) : (
          <div className="grid grid-cols-4 gap-x-[20px] gap-y-[20px] mt-[15px]">
            {currentProducts.map((item, index) => (
              <ProductCard key={index} item={item} />
            ))}
          </div>
        )}
       <More href ={href} />
       <Navigator currentPage={currentPage}  totalPages={totalPages}
  onPageChange={setCurrentPage} className={className}/>
      
    </>
  );
};
