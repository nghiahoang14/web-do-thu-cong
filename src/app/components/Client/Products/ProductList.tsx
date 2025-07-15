"use client";

import { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import { More } from "../More/More";
import { Navigator } from "../Navigator/Navigator";

const items_per_page = 12;

export const ProductList = (props: {
  
  href: string;
  className: string;
  sortOption: string;
  showMore: boolean;
 
  data: any[];
}) => {
  const {
    
    href,
    className,
    sortOption,
    showMore,
    
    data,
  } = props;

  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    try {
      let filtered = [...data];

      
      

     

      if (sortOption === "asc") {
        filtered.sort((a: any, b: any) => a.price - b.price);
      } else if (sortOption === "desc") {
        filtered.sort((a: any, b: any) => b.price - a.price);
      }

      setProducts(filtered);
      setCurrentPage(1);
    } catch (err: any) {
      console.error("Lỗi xử lý dữ liệu sản phẩm:", err);
    }
  }, [data,  sortOption]);

  const startIndex = (currentPage - 1) * items_per_page;
  const endIndex = startIndex + items_per_page;
  const currentProducts = products.slice(startIndex, endIndex);
  const totalPages = Math.ceil(products.length / items_per_page);

  return (
    <>
      <div className="w-full">
        <div className="grid grid-cols-2
            sm:grid-cols-2 px-2
            md:grid-cols-3
            lg:grid-cols-4
            gap-x-5 gap-y-6
            mt-4">
          {currentProducts.map((item, index) => (
            <ProductCard key={index} item={item} />
          ))}
        </div>
        <Navigator
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          className={className}
        />
      </div>

      {showMore && <More href={href} title="Xem thêm" />}
    </>
  );
};
