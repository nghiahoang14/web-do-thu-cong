"use client"

import "../../globals.css";
import { ProductList } from "@/app/components/Products/ProductList";
import { Navigator } from "@/app/components/Navigator/Navigator";
import { Filter } from "@/app/components/Filter/Filter";
import { Title } from "@/app/components/Title/Title";
import { useState } from "react";



export default function ProductPage() {
  const [sortOption, setSortOption] = useState("default");
  return (
    <div className="">
      <div className="">
        <div className=""></div>
        <div className=""></div>
      </div>
      <div className="">
        <Title title="Sản phẩm" />
        <div className="flex justify-end">
          <Filter onSortChange={setSortOption}/>
        </div>
        <ProductList  filterType="all" href="" className="" sortOption={sortOption} />
       
      </div>
    </div>
   
  );
}