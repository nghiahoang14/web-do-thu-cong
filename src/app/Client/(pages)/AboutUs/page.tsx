
import type { Metadata } from "next";

import "../../../globals.css";
import { Title } from "@/app/components/Client/Title/Title";
import { AboutUs } from "@/app/components/Client/AboutUs/AboutUs";



export const metadata: Metadata = {
  title: "About us",
  description: "Web bán hàng thủ công",
};

export default function AboutUsPage() {
  return (
   <div className="">
    <Title title="About Us"/>
    <AboutUs/>
   </div>
  );
}