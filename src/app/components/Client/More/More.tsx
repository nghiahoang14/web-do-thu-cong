"use client"
import Link from "next/link";

import NavigateNextIcon from '@mui/icons-material/NavigateNext';
;

export const More =(props:{href:string,title:string})=>{
    const {href,title}= props; 
  
    return (
        <>
        <div className=" text-[#c4123f] font-[700] text-[20px] flex items-center justify-center mt-[20px]" >
            <Link href={href}>{title} </Link>
            <NavigateNextIcon/>
            <NavigateNextIcon/>
             </div>
        </>
    )
}