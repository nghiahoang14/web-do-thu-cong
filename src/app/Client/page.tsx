"use client"
import { CategoryList } from "../components/Client/Category/CategoryList";
import { Collaborator } from "../components/Client/Collaborator/Collaborator";
import { Map } from "../components/Client/Map/Map";
import { ProductList } from "../components/Client/Products/ProductList";
import { Paginations } from "../components/Client/Paginations/Paginations";
import { Section1 } from "../components/Client/Section1/Section1";
import "../globals.css"
import { Title } from "../components/Client/Title/Title";








export default function Home() {
   const images = [
    "/demo/img-5.jpg",
    "/demo/img-2.jpeg",
    "/demo/img-6.jpg",
    "/demo/img-4.png",
  ];
  return (
    
    <div>
    
     <div className=" mb-[100px]">
      <Paginations preview={1} images={images} className="h-[450px] w-full" />
      <div className="my-[39px]">
        <Section1/>
      </div>
     <div className="">
      <Title title="Sản phẩm mới" />
       <ProductList  filterType="new" href="Client/NewProduct" className="hidden" sortOption="" showMore={true}/>
     </div>
      <CategoryList limit={5}/>
      <Collaborator/>
      <Map/>
     </div>
     </div>
  );
}
