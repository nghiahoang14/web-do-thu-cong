import Link from "next/link"
import { Search } from "../Search/Search"
import { CartIcon } from "../CartIcon/CartIcon"


export const Sider = ()=>{
    return (
        <>
        <div className="w-[100vw] fixed z-999 h-[88px] bg-[#efedeb] shadow-md  ">
            <div className="container mx-auto h-full">
                <div className="flex items-center justify-between h-full">
                    <Link href="/">
                    <div className="logo text-[30px] font-[700]">Temp<span className="text-[#0d6efd]">i</span></div>
                    </Link>
                    <nav className="">
                        <ul className="flex items-center justify-between gap-[20px]">
                            <li className="">
                                <Link href="/">
                                <div className="hover:font-bold transition-all ">Home</div>
                                </Link>
                            </li>
                             <li className="">
                                <Link href="Product">
                                 <div className="hover:font-bold transition-all " >Sản phẩm</div>
                                </Link>
                            </li>
                             <li className="">
                                <Link href="/">
                                 <div className="hover:font-bold transition-all "> Combo</div>
                                </Link>
                            </li>
                             <li className="">
                                <Link href="/">
                                 <div className="hover:font-bold transition-all ">Blog</div>
                                </Link>
                            </li>
                            <li className="">
                                <Link href="/">
                                 <div className="hover:font-bold transition-all ">About Us</div>
                                </Link>
                            </li>
                            <li className="">
                                <Link href="/">
                                 <div className="hover:font-bold transition-all ">New Product</div>
                                </Link>
                            </li>
                            
                        </ul>
                    </nav>
                    <div className="flex items-center gap-[15px]">
                        {/* <Search/> */}
                        <CartIcon/>
                    </div>
                </div>
                
            </div>
          
        </div>
        
        </>
    )
}