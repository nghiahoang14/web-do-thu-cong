"use client"

import "../../../globals.css";
import { ProductList } from "@/app/components/Client/Products/ProductList";
import { Title } from "@/app/components/Client/Title/Title";
import { Filter } from "@/app/components/Client/Filter/Filter";
import { useState } from "react";





export default function NewProductPage() {
  const [sortOption, setSortOption] = useState("default");
  return (
   <div className="">
           <Title title="Sản phẩm mới" />
           <div className="flex justify-end">
             <Filter onSortChange={setSortOption}/>
           </div>
           <div className="flex items-start gap-[50px]">
             
             <ProductList  filterType="new" href="" className="" sortOption={sortOption} showMore={false} />
          
           </div>
          
         </div>
  );
}