"use client"
import { NewProduct } from "./components/NewProduct/NewProduct";
import { Paginations } from "./components/Paginations/Paginations";
import { Section1 } from "./components/Section1/Section1";
import "./globals.css"
import type { Metadata } from "next";







export default function Home() {
  return (
    <div>
    
     <div className="cursor-pointer mb-[100px]">
      <Paginations/>
      <div className="mt-[39px]">
        <Section1/>
      </div>
      <NewProduct/>
     </div>
     </div>
  );
}
