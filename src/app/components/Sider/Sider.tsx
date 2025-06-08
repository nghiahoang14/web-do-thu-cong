import Link from "next/link"

import { CartIcon } from "../CartIcon/CartIcon"
import { Login } from "../Login/Login"
import { Register } from "../Register/Register"
import { Logo } from "../Logo/Logo"


export const Sider = ()=>{
    return (
        <>
        <div className="w-[100vw] fixed z-999 h-[88px] bg-[#efedeb] shadow-md  ">
            <div className="container mx-auto h-full">
                <div className="flex items-center justify-between h-full">
                   <Logo/>
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
                                 <div className="hover:font-bold transition-all "> Danh mục</div>
                                </Link>
                            </li>
                             <li className="">
                                <Link href="Blog">
                                 <div className="hover:font-bold transition-all ">Blog</div>
                                </Link>
                            </li>
                            <li className="">
                                <Link href="AboutUs">
                                 <div className="hover:font-bold transition-all ">About Us</div>
                                </Link>
                            </li>
                            <li className="">
                                <Link href="NewProduct">
                                 <div className="hover:font-bold transition-all ">Sản phẩm mới</div>
                                </Link>
                            </li>
                            
                        </ul>
                    </nav>
                    <div className="flex items-center gap-[20px]">
                        {/* <Search/> */}
                        <CartIcon/>
                        <div className="flex items-center gap-[20px]">
                          <Login/>
                          <Register/>

                        </div>
                        
                    </div>
                </div>
                
            </div>
          
        </div>
        
        </>
    )
}