"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { CartItem } from "../CartIcon/CartItem";
import { searchProduct } from "@/services/api/client/product.api";

export const Search = () => {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState([]);
  const pathname = usePathname();
  const containerRef = useRef<HTMLFormElement>(null);
 const [isInputFocused, setIsInputFocused] = useState(false);
  useEffect(() => {
    const fetchResults = async () => {
      if (!keyword.trim()) {
        setResults([]);
        return;
      }
      try {
        const res = await  searchProduct(keyword);
        setResults(res.data);
         console.log("✅ Kết quả tìm kiếm:", res.data);
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
        if (!isInputFocused) {
          setResults([]);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isInputFocused]);

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
           onFocus={() => setIsInputFocused(true)}
           onBlur={() => setIsInputFocused(false)}
        ></input>
        
        {results.length > 0 && (
          <ul className="absolute z-50 mt-2 top-[70px] w-full  bg-white border border-gray-300 rounded-lg shadow-lg max-h-[300px] overflow-y-auto">
            {results.map((item:any) => (
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
