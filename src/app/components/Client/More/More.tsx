"use client"
import Link from "next/link";
import { usePathname } from 'next/navigation';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
;

export const More =(props:{href:string})=>{
    const {href}= props; 
   const pathname = usePathname();

  if (pathname !== "/") return null;
    return (
        <>
        <div className=" text-[#c4123f] font-[700] text-[20px] flex items-center justify-center mt-[20px]" >
            <Link href={href}>XEM THÊM </Link>
            <NavigateNextIcon/>
            <NavigateNextIcon/>
             </div>
        </>
    )
}