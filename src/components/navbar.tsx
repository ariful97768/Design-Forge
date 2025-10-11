"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isFloating, setIsFloating] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop >= 500) {
        setIsFloating(true);
      } else {
        setIsFloating(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`${
        isFloating ? "fixed top-8 px-5 md:px-0" : "absolute top-0"
      } z-500 w-full transition-all duration-300 ease-in-out text-white`}
    >
      <div
        className={`flex items-center ${
          isFloating && "bg-white shadow-lg rounded-2xl"
        } ${
          isOpen && "!rounded-b-none"
        } justify-between py-5 max-w-7xl px-6 md:px-8 mx-auto`}
      >
        <h1
          className={`arima-font font-semibold text-xl md:text-2xl lg:text-3xl ${
            isFloating && "text-[#0C5E5E]"
          }`}
        >
          design forge
        </h1>
        <div className="hidden md:flex items-center gap-8">
          <ul
            className={`flex gap-2 arima-font items-center ${
              isFloating
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
              isFloating && "text-[#0C5E5E]/90 border-[#0C5E5E]/90"
            } hover:text-[#0C5E5E] active:scale-95  transition-all duration-200 px-5 py-[10px] font-semibold border-[1px]`}
          >
            Book a call
          </button>
        </div>
        <div className={`block md:hidden ${isFloating && "text-black"}`}>
          {isOpen ? (
            <svg
              onClick={() => setIsOpen(false)}
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill="currentColor"
              className={`w-9 h-9 ${
                isFloating ? "fill-[#0C5E5E]" : "fill-white"
              }`}
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
            </svg>
          ) : (
            <svg
              onClick={() => setIsOpen(true)}
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className={`w-9 h-9 ${
                isFloating ? "fill-[#0C5E5E]" : "fill-white"
              }`}
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          )}
        </div>
      </div>

      {isOpen && (
        <div
          className={`${
            isFloating ? "rounded-b-[20px]" : "mx-5 rounded-[20px]"
          } shadow-lg p-4 bg-white`}
        >
          <ul
            className={`rounded-[20px] flex flex-col arima-font items-center bg-[#F5F5F5] text-[#0D2A2A] font-medium w-full`}
          >
            <li className="px-4 py-3">
              <Link href="#home">Home</Link>
            </li>
            <hr className="w-full text-gray-200"/>
            <li className="px-4 py-3">
              <Link href="#pricing">Pricing</Link>
            </li>
            <hr className="w-full text-gray-200"/>
            <li className="px-4 py-3">
              <Link href="#projects">Projects</Link>
            </li>
            <hr className="w-full text-gray-200"/>
            <li className="px-4 py-3">
              <Link href="#services">Services</Link>
            </li>
            <hr className="w-full text-gray-200"/>
            <li className="px-4 py-3">
              <Link href="#faq">FAQ</Link>
            </li>
            <hr className="w-full text-gray-200"/>
            <Link href={"#"} className="w-full px-4 py-3">
              <button
                className={`rounded-full w-full text-white cursor-pointer hover:bg-[#EBFFFF] bg-[#0C5E5E] hover:text-[#0C5E5E] active:scale-95 transition-all duration-200 px-5 py-[10px] border-[1px]`}
              >
                Book a call
              </button>
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
}
