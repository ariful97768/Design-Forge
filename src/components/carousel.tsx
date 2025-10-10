/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Feedbacks() {
  const [current, setCurrent] = useState(0);
  const quotes = [
    {
      text: "She asked the right questions to gain the right context and delivered exactly what she promised! Excellent service, I will be using her service again.",
      name: "John Doe",
      image: "/1.avif",
      address: "New York",
    },
    {
      text: "She worked very hard, communicatively was great. Some errors were made but we fixed them together.",
      name: "Nick",
      image: "/2.avif",
      address: "California",
    },
    {
      text: "Delivered beautiful design in line with our asks. Would absolutely hire again!",
      name: "Gabriel",
      image: "/3.avif",
      address: "Dhaka",
    },
    {
      text: "Have worked with Design Forge in about 5 different projects and always have been really satisfied with her work.",
      name: "Nicolas",
      image: "/4.avif",
      address: "Sylhet",
    },
  ];
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % quotes.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-max overflow-hidden mx-auto pt-8">
      <div
        className="lg:max-w-[900px] w-full mx-auto transition-transform duration-700 ease-in-out flex"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {quotes.map((quote, idx) => (
          <div
            key={idx}
            className="px-4 w-full shrink-0 transition-transform duration-700 ease-in-out flex flex-col items-center justify-center text-center"
          >
            <div className="relative mb-10 pt-4 sm:pt-6 pb-3 md:pt-0 md:pb-0 md:px-17">
              <img
                src={"/quote.svg"}
                className="absolute h-8 w-8 md:w-12 md:h-12 -top-5 left-0 rotate-180"
                alt="quote"
              />
              <img
                src={"/quote.svg"}
                className="absolute h-8 w-8 md:w-12 md:h-12 -bottom-5 right-0"
                alt="quote"
              />
              <p className="font-medium text-sm sm:text-base md:text-[26px]">
                {quote.text}
              </p>
            </div>
            <div className="space-y-3">
              <img
                className="rounded-full w-15 h-15 md:w-20 md:h-20 object-cover"
                src={quote.image}
                alt="profile"
              />
              <div>
                <p className="text-lg font-bold pb-1">{quote.name}</p>
                <p className="text-[#707070]">{quote.address}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
