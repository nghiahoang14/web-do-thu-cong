

import "../../../globals.css";
import { Title } from "@/app/components/Client/Title/Title";

import { getProducts } from "@/services/api/client/product.api";
import { AllProduct } from "@/app/components/Client/Products/AllProduct";
import { getCategories } from "@/services/api/client/category.api";



export default async function ProductPage() {
   let data: any[] = [];
let categories: any[] = [];
  try {
    const res = await getProducts();
    data = res.data;
    const cateRes = await getCategories();
    categories = cateRes.data;
  } catch (err: any) {
    console.error("Lỗi khi fetch product:", err);
  }

  return (
    
      <div className="">
        <Title title="Sản phẩm" />
       <AllProduct data={data} categories={categories}/>
      </div>
  
   
  );
}