
import { CategoryList } from "../components/Client/Category/CategoryList";
import { Collaborator } from "../components/Client/Collaborator/Collaborator";
import { Map } from "../components/Client/Map/Map";
import { ProductList } from "../components/Client/Products/ProductList";
import { Paginations } from "../components/Client/Paginations/Paginations";
import { Section1 } from "../components/Client/Section1/Section1";
import "../globals.css"
import { Title } from "../components/Client/Title/Title";
import { getProducts } from "@/services/api/client/product.api";
import { getCategories } from "@/services/api/client/category.api";








export default async  function Home() {
   const images = [
    "/demo/img-5.jpg",
    "/demo/img-2.jpeg",
    "/demo/img-6.jpg",
    "/demo/img-4.png",
  ];
    let data:any[] = [];
     let categories:any[] = [];
  try {
    const res = await getProducts();
    data=res.data;
    const resCate = await getCategories();
    categories = resCate.data;
  } catch (err) {
    console.error("Lỗi", err);
  }
  return (
    
    <div>
    
     <div className=" mb-[100px]">
      <Paginations preview={1} images={images} className="h-[450px] w-full" />
      <div className="my-[39px]  sm:px-6 md:px-10 w-full">
        <Section1/>
      </div>
     <div className="">
      <Title title="Sản phẩm " />
       <ProductList  data={data} href="Client/Product" className="hidden" sortOption="" showMore={true}/>
     </div>
      <CategoryList limit={5} categories={categories}/>
      <Collaborator/>
      <Map/>
     </div>
     </div>
  );
}
