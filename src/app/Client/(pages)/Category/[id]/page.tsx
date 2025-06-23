"use client"
import { ProductList } from "@/app/components/Client/Products/ProductList";
import { CategoryMenu } from "@/app/components/Client/Category/CategoryMenu";
import { Filter } from "@/app/components/Client/Filter/Filter";

import { Title } from "@/app/components/Client/Title/Title";

import { useParams } from "next/navigation";
import {  useState } from "react";

export default function CategoryDetailage() {
     const params = useParams();
  const id = params.id;
  console.log(typeof id);
 const [sortOption, setSortOption] = useState("default");

  
  return (
      <div className="">
        <Title title="Sản phẩm" />
        <div className="flex justify-end">
          <Filter onSortChange={setSortOption}/>
        </div>
         <div className="flex items-start gap-[50px]">
        <CategoryMenu />
        <ProductList
          filterType="all"
          href=""
          className=""
          sortOption={sortOption}
          showMore={false}
          categoryId={id}
        />
       </div>
      </div>
  )
}