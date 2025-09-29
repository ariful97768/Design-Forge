"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "https://picsum.photos/id/1018/600/400",
  "https://picsum.photos/id/1025/600/400",
  "https://picsum.photos/id/1037/600/400",
];

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
        className="max-w-[900px] mx-auto transition-transform duration-700 ease-in-out flex"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {quotes.map((quote, idx) => (
          <div
            key={idx}
            className=" w-[900px] shrink-0 transition-transform duration-700 ease-in-out flex flex-col items-center justify-center text-center"
          >
            <div className="relative mb-10 px-17">
              <Image
                src={"/quote.svg"}
                width={50}
                height={50}
                className="absolute -top-5 left-0 rotate-180"
                alt="quote"
              />
              <Image
                src={"/quote.svg"}
                width={50}
                height={50}
                className="absolute -bottom-5 right-0"
                alt="quote"
              />
              <p className="font-medium text-[26px]">{quote.text}</p>
            </div>
            <div className="space-y-3">
              <Image
                className="rounded-full object-cover"
                src={quote.image}
                alt="profile"
                width={80}
                height={80}
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
