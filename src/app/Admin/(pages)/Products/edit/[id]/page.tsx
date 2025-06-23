"use client";

import { UpdateProduct } from "@/app/components/Admin/Products/UpdateProduct";
import { getCategories } from "@/services/api/admin/category.api";
import { getProductById, updateProduct } from "@/services/api/admin/products.api";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
export default function updateProductPage(){
    const param = useParams();
    const id=param.id;
      const router = useRouter();
  const [product, setProduct] = useState<any>(null);
   const [categories, setCategories] = useState<any[]>([])
   
    useEffect(() => {
    const fetchProduct = async () => {
      try {
         const res = await getProductById(id as string);
        setProduct(res.data);
       console.log(res)
      } catch (error) {
        console.error("Lỗi khi lấy sản phẩm:", error);
        alert("Không tìm thấy sản phẩm");
        router.push("/Admin/Products");
      } 
    };
 const fetchCategories = async () => {
      try {
        const res = await getCategories();
        setCategories(res.data); 
      } catch (err) {
        console.error("Không thể lấy danh mục", err);
      }
    };
    fetchCategories();
    if (id) {
      fetchProduct();
    }
  }, [id]);
     const handleSubmit = async (data: any) => {
    try {
      await updateProduct(id as string,data); 
      alert("Sửa sản phẩm thành công!");
      router.push("/Admin/Products");
    } catch (error:any) {
      console.error("Lỗi khi sửa sản phẩm:", error);
      alert("Sửa sản phẩm thất bại.");
     
    }
  };
  console.log(product);
    return(
        <>
   <UpdateProduct product={product} onSubmit={handleSubmit} categories={categories}/>
        </>
    )
}