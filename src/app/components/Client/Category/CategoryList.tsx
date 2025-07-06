"use client"
import { useEffect, useState } from "react";
import { More } from "../More/More"
import { Title } from "../Title/Title"
import { Category } from "./Category"

import { getCategories } from "@/services/api/client/category.api";

export const CategoryList = (props:{limit?:number})=>{
  const {limit}=props;
   const [category, SetCategory] = useState([]);
  
     
   useEffect(()=>{
      const fetchCategories=async ()=>{
        try{
          const res= await  getCategories();
          SetCategory(res.data);
        }catch(err:any){
          console.error(err.response.data.message)
        }
      }
      fetchCategories();
   },[])
   const displayedCategories = limit ? category.slice(0, limit) : category;
    return (
        <>
        <div className="my-[40px]">
            <Title title="Danh mục"/>
            <div className="grid grid-cols-5  gap-x-[25px] gap-y-[20px] mt-[15px]">
                {displayedCategories.map((item,index)=>(
                     <Category key={index} item={item} />
                ))}
            </div>
            {category.length>(limit||0) && (<More href="/Client/Product" title="Xem thêm"/>)}
          
        </div>
        </>
    )
}