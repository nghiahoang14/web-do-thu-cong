import { useEffect, useState } from "react";
import { More } from "../More/More"
import { Title } from "../Title/Title"
import { Category } from "./Category"
import axios from "axios";
export interface Category{
    name:string,
    description:string,
    parent:string,
}
export const CategoryList = ()=>{
   const [category, SetCategory] = useState<Category[]>([]);
     const [load, setLoad] = useState<Boolean>(true);
   useEffect(()=>{
      axios.get<{data:Category[]}>("http://localhost:3001/category")
      .then((res)=>{
        console.log(res);
          let data = res.data.data;
          console.log(data)
          // console.log(res.data.message);
          SetCategory(data);
      })
      .catch((err) => {
        console.error("Lỗi khi gọi API sản phẩm:", err);
      })
      .finally(() => {
        setLoad(false);
      });
   },[])
    return (
        <>
        <div className="">
            <Title title="Danh mục"/>
            <div className="grid grid-cols-5  gap-x-[25px] gap-y-[20px] mt-[15px]">
                {category.map((item,index)=>(
                     <Category key={index} item={item} />
                ))}
            </div>
            <More href="/Client/Category"/>
        </div>
        </>
    )
}