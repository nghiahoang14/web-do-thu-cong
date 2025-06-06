'use client';
import { useState } from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
export const CartIcon = ()=>{
    const [isOpen,setIsopen]=useState(false);
    const toggleCart=()=>{
        setIsopen(!isOpen);
    }
    const cartCount=0;
    return(
        <>
        <div className='relative w-[30px] h-[30px] cursor-pointer ' onClick={toggleCart}>
            <ShoppingCartOutlinedIcon />
            <div className='absolute -top-1 -right-1 bg-red-700 text-white rounded-full w-[15px] h-[15px] flex items-center justify-center text-[12px] font-bold'>
                {cartCount}
            </div>
            {isOpen &&(
             <div className='absolute rounded-[6px] shadow  bottom-[-240px] right-[0px] bg-white text-white  w-[404px] h-[232px] flex items-center justify-center text-[12px] font-bold'>
                <img src="/demo/CartInfo.webp" alt="" className='w-[150px] h-[112px] flex items-center justify-center' />
            </div>
            )

            }
            
        </div>
        </>
    )
}