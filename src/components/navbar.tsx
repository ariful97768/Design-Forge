"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop >= 500) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`${
        isFixed ? "fixed top-10" : "absolute top-0"
      } z-500 w-full transition-all duration-300 ease-in-out text-white`}
    >
      <div
        className={`flex items-center ${
          isFixed && "bg-white rounded-2xl"
        } justify-between py-5 max-w-7xl px-8 mx-auto`}
      >
        <h1
          className={`arima-font font-semibold text-3xl ${
            isFixed && "text-[#0C5E5E]"
          }`}
        >
          design forge
        </h1>
        <div className="flex items-center gap-8">
          <ul
            className={`flex gap-2 arima-font items-center ${
              isFixed
                ? "bg-[#F5F5F5] text-black"
                : "bg-gradient-to-r from-[#0B4040]/50 to-[#0D2A2A]"
            } text-sm font-medium rounded-full max-w-max px-2`}
          >
            <li className="px-3 py-2">
              <Link href="#home">Home</Link>
            </li>
            <li className="px-3 py-2">
              <Link href="#pricing">Pricing</Link>
            </li>
            <li className="px-3 py-2">
              <Link href="#projects">Projects</Link>
            </li>
            <li className="px-3 py-2">
              <Link href="#services">Services</Link>
            </li>
            <li className="px-3 py-2">
              <Link href="#faq">FAQ</Link>
            </li>
          </ul>
          <button
            className={`rounded-full cursor-pointer hover:bg-[#EBFFFF] ${
              isFixed && "text-[#0C5E5E]/90 border-[#0C5E5E]/90"
            } hover:text-[#0C5E5E] active:scale-95  transition-all duration-200 px-5 py-[10px] font-semibold border-[1px]`}
          >
            Book a call
          </button>
        </div>
      </div>
    </nav>
  );
}
