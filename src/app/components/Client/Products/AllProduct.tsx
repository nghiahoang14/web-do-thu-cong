
"use client";

import { ProductList } from "@/app/components/Client/Products/ProductList";
import { Filter } from "@/app/components/Client/Filter/Filter";

import { CategoryMenu } from "@/app/components/Client/Category/CategoryMenu";
import { useEffect, useState } from "react";


export const AllProduct = ({ data,categories }: { data: any[],categories:any[] }) => {
  const [sortOption, setSortOption] = useState("default");


  
  return (
    <>
      
      <div className="flex justify-end">
        <Filter onSortChange={setSortOption} />
      </div>
      <div className="flex items-start gap-[5px] sm:gap-[20px] md:gap-[40px] lg:gap-[50px]">
        <CategoryMenu categories={categories}/>
        <ProductList
          data={data}
          
          href=""
          className=""
          sortOption={sortOption}
          showMore={false}
        />
      </div>
   </>
  );
};
