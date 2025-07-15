"use client";
import Link from "next/link";
import { useState } from "react";
import { CartIcon } from "../CartIcon/CartIcon";
import { Login } from "../Login/Login";
import { Register } from "../Register/Register";
import { Logo } from "../Logo/Logo";
import { User } from "../User/User";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export const Sider = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="h-[88px]">
        <div className="w-full fixed z-50 h-[88px] bg-[#efedeb] shadow-md">
          <div className="w-full h-full px-4">
            <div className="flex items-center justify-between h-full relative">
              {/* Logo & icon menu mobile */}
              <div className="flex items-center gap-4">
                <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
                  {menuOpen ? (
                    <CloseIcon style={{ fontSize: 28 }} />
                  ) : (
                    <MenuIcon style={{ fontSize: 28 }} />
                  )}
                </div>
                <Logo />
              </div>

              {/* Menu ngang desktop */}
              <nav className="hidden lg:block">
                <ul className="flex items-center gap-6">
                  <li>
                    <Link href="/Client">
                      <div className="hover:font-bold transition-all cursor-pointer">Home</div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/Client/Product">
                      <div className="hover:font-bold transition-all cursor-pointer">Sản phẩm</div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/Client/Blog">
                      <div className="hover:font-bold transition-all cursor-pointer">Blog</div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/Client/AboutUs">
                      <div className="hover:font-bold transition-all cursor-pointer">About Us</div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/Client/NewProduct">
                      <div className="hover:font-bold transition-all cursor-pointer">Sản phẩm mới</div>
                    </Link>
                  </li>
                </ul>
              </nav>

              {/* Cart + User */}
              <div className="flex items-center gap-4">
                <CartIcon />
                <Login />
                <Register />
                <User />
              </div>
            </div>
          </div>
        </div>

        {/* Overlay mờ khi mở menu */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black opacity-30 z-30 lg:hidden"
            onClick={closeMenu}
          />
        )}

        {/* Menu dọc mobile/tablet */}
        <div
          className={`fixed top-[88px] left-0 h-full 
            w-full  
            bg-[#efedeb] shadow-lg z-40 
            transition-transform duration-300 ease-in-out
            ${menuOpen ? "translate-x-0" : "-translate-x-full"} lg:hidden`}
        >
          <ul className="flex flex-col items-start gap-4 px-6 py-6">
            <li><Link href="/Client" onClick={closeMenu}>Home</Link></li>
            <li><Link href="/Client/Product" onClick={closeMenu}>Sản phẩm</Link></li>
            <li><Link href="/Client/Blog" onClick={closeMenu}>Blog</Link></li>
            <li><Link href="/Client/AboutUs" onClick={closeMenu}>About Us</Link></li>
            <li><Link href="/Client/NewProduct" onClick={closeMenu}>Sản phẩm mới</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
};
