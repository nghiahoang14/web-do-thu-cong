"use client";
import { useEffect, useRef, useState } from "react";
import { Product } from "../Products/ProductList";
import axios from "axios";

import { usePathname } from "next/navigation";
import { CartItem } from "../CartIcon/CartItem";

export const Search = () => {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const pathname = usePathname();
  const containerRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const fetchResults = async () => {
      if (!keyword.trim()) {
        setResults([]);
        return;
      }
      try {
        const res = await axios.get<{ data: Product[] }>(
          `http://localhost:3001/products/search?keyword=${encodeURIComponent(
            keyword
          )}`
        );
        setResults(res.data.data);
         console.log("✅ Kết quả tìm kiếm:", res.data.data);
      } catch (err) {
        console.log("Lôi khi tìm kiếm:", err);
      }
    };
    fetchResults();
  }, [keyword]);
  useEffect(() => {
  const handleClickOutside = (e: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(e.target as Node)
    ) {
      setResults([]);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);

  useEffect(() => {
    setKeyword("");
    setResults([]);
  }, [pathname]);

  return (
    <>
      <form ref={containerRef} className="bg-white  w-[75%]  mx-auto py-[15px] my-[30px] flex items-center relative"  onSubmit={(e) => {
    e.preventDefault();
  
  }}>
        <input
          type="text"
          name="keyword"
          value={keyword?? ""} 
          placeholder="Tìm kiếm..."
          className="flex-1 rounded-[50px] font-[600] text-[16px]  px-[16px] py-[10px] border border-black bg-transparent flex-1 text-black"
          onChange={(e) => setKeyword(e.target.value)}
        ></input>
        <button
          type="submit"
          className="text-white text-[22px] absolute right-[15px] cursor-pointer "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            className="text-gray-400"
            height="20"
            viewBox="0 0 512 512"
            fill="currentColor"
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
        </button>
        {results.length > 0 && (
          <ul className="absolute z-50 mt-2 top-[70px] w-full  bg-white border border-gray-300 rounded-lg shadow-lg max-h-[300px] overflow-y-auto">
            {results.map((item) => (
              <li key={item._id} className="">
               <CartItem item={item}/>
              </li>
            ))}
          </ul>
        )}
      </form>
    </>
  );
};
