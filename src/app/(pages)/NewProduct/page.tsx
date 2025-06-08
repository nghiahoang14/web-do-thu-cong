"use client"

import "../../globals.css";
import { ProductList } from "@/app/components/Products/ProductList";
import { Title } from "@/app/components/Title/Title";
import { Filter } from "@/app/components/Filter/Filter";
import { useState } from "react";




export default function NewProductPage() {
  const [sortOption, setSortOption] = useState("default");
  return (
   <div className="">
           <Title title="Sản phẩm mới" />
           <div className="flex justify-end">
             <Filter onSortChange={setSortOption}/>
           </div>
           <ProductList  filterType="new" href="" className="" sortOption={sortOption} />
          
         </div>
  );
}