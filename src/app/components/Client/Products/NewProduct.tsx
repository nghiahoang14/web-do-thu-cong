
"use client";

import { useState } from "react";
import { Filter } from "@/app/components/Client/Filter/Filter";
import { ProductList } from "@/app/components/Client/Products/ProductList";

export const NewProduct = ({data }: { data: any[] }) => {
  const [sortOption, setSortOption] = useState("default");

  return (
    <>
      <div className="flex justify-end">
        <Filter onSortChange={setSortOption} />
      </div>
      <div className="flex items-start gap-[50px]">
        <ProductList
         data={data}
          sortOption={sortOption}
          showMore={false}
          href=""
          
          className=""
        />
      </div>
    </>
  );
};
