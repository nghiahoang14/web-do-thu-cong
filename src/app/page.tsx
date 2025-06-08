"use client"
import { CategoryList } from "./components/Category/CategoryList";
import { Collaborator } from "./components/Collaborator/Collaborator";
import { Map } from "./components/Map/Map";
import { ProductList } from "./components/Products/ProductList";
import { Paginations } from "./components/Paginations/Paginations";
import { Section1 } from "./components/Section1/Section1";
import "./globals.css"
import { Title } from "./components/Title/Title";








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
       <ProductList  filterType="new" href="/NewProduct" className="hidden" sortOption=""/>
     </div>
      <CategoryList/>
      <Collaborator/>
      <Map/>
     </div>
     </div>
  );
}
