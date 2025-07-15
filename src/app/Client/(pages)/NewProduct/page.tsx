
import "../../../globals.css";
import { Title } from "@/app/components/Client/Title/Title";
import { getProducts } from "@/services/api/client/product.api";
import { NewProduct } from "@/app/components/Client/Products/NewProduct";





export default async  function NewProductPage() {
   let data: any[] = [];
   try {
    const res = await getProducts();
     data = res.data;

    const now = new Date();
    data = data.filter((p: any) => {
      const createdAt = new Date(p.createdAt);
      const days = (now.getTime() - createdAt.getTime()) / (1000 * 3600 * 24);
      return days <= 30;
    });
  }catch(err:any){
    console.error(" Lỗi khi fetch sản phẩm mới:", err);
    console.log(err.response.data.message);
  }
  return (
   <div className="">
           <Title title="Sản phẩm mới" />
          <NewProduct data={data} />
          
         </div>
  );
}