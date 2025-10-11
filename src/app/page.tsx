/* eslint-disable @next/next/no-img-element */
import Feedbacks from "@/components/carousel";
import Navbar from "@/components/navbar";
import ToggleMenu from "@/components/toggle";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

export default function Home() {
  const images1 = [
    "/work/1.avif",
    "/work/2.avif",
    "/work/3.avif",
    "/work/4.avif",
  ];
  const images2 = [
    "/work/6.avif",
    "/work/7.avif",
    "/work/8.avif",
    "/work/9.avif",
  ];
  const faqs = [
    {
      title: "What industries do you work with?",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis at asperiores optio incidunt expedita eius earum consectetur repudiandae iusto soluta, similique dolorum obcaecati nemo id dignissimos libero, perferendis distinctio nobis.",
    },
    {
      title: "Can you work with tight deadlines?",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis at asperiores optio incidunt expedita eius earum consectetur repudiandae iusto soluta, similique dolorum obcaecati nemo id dignissimos libero, perferendis distinctio nobis.",
    },
    {
      title: "What if I don't have brand guidelines or a clear brand identity?",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis at asperiores optio incidunt expedita eius earum consectetur repudiandae iusto soluta, similique dolorum obcaecati nemo id dignissimos libero, perferendis distinctio nobis.",
    },
    {
      title: "How do we communicate and collaborate during projects?",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis at asperiores optio incidunt expedita eius earum consectetur repudiandae iusto soluta, similique dolorum obcaecati nemo id dignissimos libero, perferendis distinctio nobis.",
    },
    {
      title: "How soon can you start working together?",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis at asperiores optio incidunt expedita eius earum consectetur repudiandae iusto soluta, similique dolorum obcaecati nemo id dignissimos libero, perferendis distinctio nobis.",
    },
    {
      title: "How do you ensure the quality of your designs and code?",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis at asperiores optio incidunt expedita eius earum consectetur repudiandae iusto soluta, similique dolorum obcaecati nemo id dignissimos libero, perferendis distinctio nobis.",
    },
    {
      title: "How do I provide feedback on designs and deliverables?",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis at asperiores optio incidunt expedita eius earum consectetur repudiandae iusto soluta, similique dolorum obcaecati nemo id dignissimos libero, perferendis distinctio nobis.",
    },
    {
      title: "Do you handle copywriting, or do I need to provide content?",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis at asperiores optio incidunt expedita eius earum consectetur repudiandae iusto soluta, similique dolorum obcaecati nemo id dignissimos libero, perferendis distinctio nobis.",
    },
    {
      title: "Can you help startups with limited budgets?",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis at asperiores optio incidunt expedita eius earum consectetur repudiandae iusto soluta, similique dolorum obcaecati nemo id dignissimos libero, perferendis distinctio nobis.",
    },
    {
      title: "How do I get started with design forge?",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis at asperiores optio incidunt expedita eius earum consectetur repudiandae iusto soluta, similique dolorum obcaecati nemo id dignissimos libero, perferendis distinctio nobis.",
    },
    {
      title: "What's your refund policy?",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis at asperiores optio incidunt expedita eius earum consectetur repudiandae iusto soluta, similique dolorum obcaecati nemo id dignissimos libero, perferendis distinctio nobis.",
    },
  ];
  const data = [
    {
      title: "Free",
      price: "$00",
      isPopular: false,
      services: [
        {
          title: "UI UX audit",
          isServed: true,
        },
        {
          title: "Free Consultation",
          isServed: true,
        },
        {
          title: "Competitive analysis",
          isServed: false,
        },
        {
          title: "100% Money-Back Guarantee",
          isServed: false,
        },
        {
          title: "logo design",
          isServed: false,
        },
        {
          title: "Pages design",
          isServed: false,
        },
        {
          title: "Mobile responsive",
          isServed: false,
        },
        {
          title: "Revision",
          isServed: false,
        },
        {
          title: "Any social media post",
          isServed: false,
        },
        {
          title: "Delivery",
          isServed: false,
        },
        {
          title: "Figma Prototype",
          isServed: false,
        },
        {
          title: "Source file",
          isServed: false,
        },
        {
          title: "Color theme support",
          isServed: false,
        },
        {
          title: "Multilingual support",
          isServed: false,
        },
        {
          title: "Development",
          isServed: false,
        },
      ],
    },
    {
      title: "Standard",
      price: "$1,299-$1,499",
      isPopular: true,
      services: [
        {
          title: "UI UX audit",
          isServed: true,
        },
        {
          title: "Free Consultation",
          isServed: true,
        },
        {
          title: "Competitive analysis",
          isServed: true,
        },
        {
          title: "100% Money-Back Guarantee",
          isServed: true,
        },
        {
          title: "logo design",
          isServed: true,
        },
        {
          title: "1-5 Pages",
          isServed: true,
        },
        {
          title: "Mobile responsive",
          isServed: true,
        },
        {
          title: "Unlimited Revision",
          isServed: true,
        },
        {
          title: "Any 3 social media post",
          isServed: true,
        },
        {
          title: "10 days delivery",
          isServed: true,
        },
        {
          title: "Figma Prototype",
          isServed: true,
        },
        {
          title: "Source file",
          isServed: true,
        },
        {
          title: "Color theme support",
          isServed: true,
        },
        {
          title: "Multilingual support",
          isServed: false,
        },
        {
          title: "Development",
          isServed: false,
        },
      ],
    },
    {
      title: "Premium",
      price: "$6,999",
      isPopular: false,
      services: [
        {
          title: "UI UX audit",
          isServed: true,
        },
        {
          title: "Free Consultation",
          isServed: true,
        },
        {
          title: "Competitive analysis",
          isServed: true,
        },
        {
          title: "100% Money-Back Guarantee",
          isServed: true,
        },
        {
          title: "logo design and Branding guideline",
          isServed: true,
        },
        {
          title: "05-15 Pages",
          isServed: true,
        },
        {
          title: "Mobile responsive",
          isServed: true,
        },
        {
          title: "Unlimited Revision",
          isServed: true,
        },
        {
          title: "Any 6 social media post",
          isServed: true,
        },
        {
          title: "25-30 days delivery",
          isServed: true,
        },
        {
          title: "Figma Prototype",
          isServed: true,
        },
        {
          title: "Source file",
          isServed: true,
        },
        {
          title: "Color theme support",
          isServed: true,
        },
        {
          title: "Multilingual support",
          isServed: true,
        },
        {
          title: "No Code Development",
          isServed: true,
        },
      ],
    },
  ];
  return (
    <div className="bg-[#0B1414]">
      <header>
        <Navbar />
      </header>
      <main>
        <div className="w-full bg-no-repeat sm:bg-none md:bg-[url('/hero_bg.svg')] xl:bg-auto xl:bg-[center_100%] md:[background-size:1300px_1280px] md:bg-[center_-566px]">
          <section id="#home">
            <div className="px-5 md:px-0 max-w-[600px] xl:max-w-3xl pt-[106px] mx-auto relative text-white">
              <div className="md:w-200 md:h-200 hidden xl:block rounded-full blur-3xl absolute top-0 left- md:-top-80 md:-left-40 bg-radial from-[#00ADAD]/30 to-[#00ADAD]/0"></div>
              <div className="text-center xl:pt-12 flex flex-col gap-2 items-center">
                <div className="flex text-xs md:text-base items-center gap-3 font-semibold">
                  <div className="h-4 w-4 bg-radial from-[#41C16B] rounded-full"></div>
                  <h3>Available for New Projects</h3>
                </div>
                <h1 className="font-semibold xl:font-bold text-[28px] leading-[38px] md:text-5xl xl:text-[56px] md:leading-[67px] xl:leading-20">
                  Helping businesses grow with impactful design and development.
                </h1>
                <p className="xl:max-w-xl md:px-5 md:max-w-[500px] text-sm md:text-base xl:text-lg">
                  Whether you&lsquo;re launching an MVP or scaling a SaaS, we
                  turn ideas into user-friendly, high-converting experiences.
                </p>
                <div className="w-full flex items-center justify-center flex-col md:flex-row gap-4 md:gap-5 mt-3 md:mt-5">
                  <button className="rounded-full md:w-max w-full cursor-pointer hover:bg-[#00F5F5] active:scale-95  transition-all duration-200 px-5 py-[10px] font-bold bg-white text-black/90">
                    View Price
                  </button>
                  <button className="rounded-full md:w-max w-full border cursor-pointer active:scale-95  transition-all duration-200 px-5 py-[10px] font-bold hover:bg-white hover:text-[#0C5E5E]">
                    Free ui ux audit
                  </button>
                </div>
                <div className="flex sm:flex-col md:flex-row items-center text-xs md:text-base gap-2 md:gap-4 font-bold mt-6 md:mt-8">
                  <span>Trusted by</span>
                  <div className="flex items-center">
                    <Image
                      className="rounded-full -m-1 hover:z-50 border border-white"
                      height={32}
                      width={32}
                      src={"/1.avif"}
                      alt="image"
                    />
                    <Image
                      className="rounded-full -m-1 hover:z-50 border border-white"
                      height={32}
                      width={32}
                      src={"/2.avif"}
                      alt="image"
                    />
                    <Image
                      className="rounded-full -m-1 hover:z-50 border border-white"
                      height={32}
                      width={32}
                      src={"/3.avif"}
                      alt="image"
                    />
                    <Image
                      className="rounded-full -m-1 hover:z-50 border border-white"
                      height={32}
                      width={32}
                      src={"/4.avif"}
                      alt="image"
                    />
                  </div>
                  <span>120+ high-growth startups</span>
                </div>
              </div>
            </div>
          </section>
          <section
            id="servicesContainer"
            className="flex flex-col md:flex-row flex-nowrap overflow-x-auto mt-15 mx-auto max-w-[1440px] md:max-h-[540px] overflow-hidden"
          >
            <div className="relative max-h-[490px] lg:max-h-max min-w-[320px] md:max-w-[360px] pt-8 bg-[#F3BE00] overflow-hidden space-y-5 pl-6">
              <div className="absolute w-78 h-78 -top-[30%] -left-[30%] bg-[#FFD64E] blur-[150px]"></div>
              <h1 className="text-[44px] relative font-bold z-50 text-black">
                Web Design
              </h1>
              <div className="md:w-[338px] relative h-[440px]">
                <img
                  className="w-full h-full object-cover object-top-left"
                  src="/WebDesign.png"
                  alt="web design"
                />
              </div>
            </div>
            <div className="relative max-h-[490px] lg:max-h-max min-w-[320px] md:max-w-[360px] pt-8 bg-[#EFB15B] overflow-hidden space-y-5 pl-6 border-t-10 md:border-t-0 md:border-l-10 border-[#ffffff66]">
              <div className="absolute w-78 h-78 -top-[30%] -left-[30%] bg-[#DDFA00] blur-[150px]"></div>
              <h1 className="text-[44px] relative font-bold z-50 text-black">
                Mobile Apps
              </h1>
              <div className="md:w-[338px] relative h-[440px]">
                <img
                  className="w-full h-full object-cover object-top-left"
                  src="/mobile.png"
                  alt="web design"
                />
              </div>
            </div>
            <div className="relative max-h-[490px] lg:max-h-max min-w-[320px] md:max-w-[360px] pt-8 bg-[#33C749] overflow-hidden space-y-5 pl-6 border-t-10 md:border-t-0 md:border-l-10 border-[#ffffff66]">
              <div className="absolute w-78 h-78 -top-[30%] -left-[30%] bg-[#B6F9C0] blur-[150px]"></div>
              <h1 className="text-[44px] relative font-bold z-50 text-black">
                SaaS Design
              </h1>
              <div className="md:w-[338px] relative h-[440px]">
                <img
                  className="w-full h-full object-cover object-left"
                  src="/SaaSDesign.png"
                  alt="web design"
                />
              </div>
            </div>
            <div className="relative max-h-[490px] lg:max-h-max min-w-[320px] md:max-w-[360px] pt-8 bg-[#3335C7] overflow-hidden space-y-5 pl-6 border-t-10 md:border-t-0 md:border-l-10 border-[#ffffff66]">
              <div className="absolute w-78 h-78 -top-[30%] -left-[30%] bg-[#9193FF] blur-[150px]"></div>
              <h1 className="text-[44px] relative font-bold z-50 text-white">
                UX Design
              </h1>
              <div className="md:w-[338px] relative h-[440px]">
                <img
                  className="w-full h-full object-cover object-left"
                  src="/DashboardDesign.png"
                  alt="web design"
                />
              </div>
            </div>
          </section>
        </div>
        <section>
          <div className="flex sm:px-5 md:px-10 flex-col items-center justify-center gap-6 md:flex-row md:gap-10 max-w-[1200px] pt-9 mx-auto">
            <h4 className="text-xs md:text-sm shrink-0 text-white">
              Trusted by 120+ <br className="hidden md:block" />
              Happy Clients
            </h4>
            <Marquee
              speed={15}
              gradient
              gradientColor="#0B1414"
              pauseOnHover
              direction="right"
              className="flex gap-10 md:gap-14"
            >
              <div className="flex gap-10 md:gap-14 h-6 sm:h-9 md:h-10">
                <img
                  className="w-full h-full object-contain"
                  src="/1.svg"
                  alt=""
                />
                <img
                  className="w-full h-full object-contain"
                  src="/2.svg"
                  alt=""
                />
                <img
                  className="w-full h-full object-contain"
                  src="/3.svg"
                  alt=""
                />
                <img
                  className="w-full h-full object-contain"
                  src="/4.svg"
                  alt=""
                />
                <img
                  className="w-full h-full object-contain"
                  src="/5.svg"
                  alt=""
                />
                <img
                  className="w-full h-full object-contain"
                  src="/2.svg"
                  alt=""
                />
                <img
                  className="w-full h-full object-contain"
                  src="/5.svg"
                  alt=""
                />
                <img
                  className="w-full h-full object-contain"
                  src="/4.svg"
                  alt=""
                />
                <img
                  className="w-full h-full object-contain"
                  src="/1.svg"
                  alt=""
                />
                <img
                  className="w-full h-full object-contain"
                  src="/6.svg"
                  alt=""
                />
              </div>
            </Marquee>
          </div>
        </section>
        <section className="relative space-y-6 py-8 sm:py-10 md:py-20 mx-auto max-w-[1440px] ">
          <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10">
            <Image
              src={"/work/logo_figma.svg"}
              alt="Figma logo"
              width={500}
              height={300}
            />
          </div>
          <MarqueeImg direction="left" images={images1} />
          <MarqueeImg direction="right" images={images2} />
          <MarqueeImg direction="left" images={images1} />
          <MarqueeImg direction="right" images={images2} />
        </section>
        <section className="w-full px-5 md:px-10 py-6 md:py-10 lg:py-20 bg-white">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              <div className="border-gray-400 hover:border-[#0E8C8C] text-base sm:text-xl md:text-2xl border hover:bg-gray-100 text-center h-16 sm:h-24 md:h-32 flex items-center justify-center rounded-3xl">
                UI/UX Design
              </div>
              <div className="border-gray-400 hover:border-[#0E8C8C] text-base sm:text-xl md:text-2xl border hover:bg-gray-100 text-center h-16 sm:h-24 md:h-32 flex items-center justify-center rounded-3xl">
                Website Design
              </div>
              <div className="border-gray-400 hover:border-[#0E8C8C] text-base sm:text-xl md:text-2xl border hover:bg-gray-100 text-center h-16 sm:h-24 md:h-32 flex items-center justify-center rounded-3xl">
                Mobile App Design
              </div>
              <div className="border-gray-400 hover:border-[#0E8C8C] text-base sm:text-xl md:text-2xl border hover:bg-gray-100 text-center h-16 sm:h-24 md:h-32 flex items-center justify-center rounded-3xl">
                SaaS Design
              </div>
              <div className="text-center col-span-2 md:col-span-1 h-16 sm:h-24 md:h-32 flex items-center justify-center">
                <h1 className="arima-font font-semibold text-3xl text-[#0C5E5E]">
                  design forge
                </h1>
              </div>
              <div className="border-gray-400 hover:border-[#0E8C8C] text-base sm:text-xl md:text-2xl border hover:bg-gray-100 text-center h-16 sm:h-24 md:h-32 flex items-center justify-center rounded-3xl">
                Free ui ux audit
              </div>
              <div className="border-gray-400 hover:border-[#0E8C8C] text-base sm:text-xl md:text-2xl border hover:bg-gray-100 text-center h-16 sm:h-24 md:h-32 flex items-center justify-center rounded-3xl">
                Website/App <br /> Development
              </div>
              <div className="border-gray-400 hover:border-[#0E8C8C] text-base sm:text-xl md:text-2xl border hover:bg-gray-100 text-center h-16 sm:h-24 md:h-32 flex items-center justify-center rounded-3xl">
                Webflow <br /> Development
              </div>
              <div className="border-gray-400 hover:border-[#0E8C8C] text-base sm:text-xl md:text-2xl border hover:bg-gray-100 text-center h-16 sm:h-24 md:h-32 flex items-center justify-center rounded-3xl">
                Prototype
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#0C5E5E] text-white/90">
          <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-4 md:gap-8 lg:gap-[140px] p-5 md:px-10 md:py-10 lg:py-13">
            <h1 className="arima-font font-semibold shrink-0 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              design forge
            </h1>
            <div>
              <p className="text-base leading-6 font-semibold md:text-2xl md:leading-8 lg:text-[32px] lg:leading-12">
                design forge is a UI/UX agency crafting intuitive,
                conversion-driven digital experiences. We blend research,
                strategy, and bold aesthetics to turn complexity into clarity.
              </p>
              <p className="text-base leading-6 font-semibold md:text-2xl md:leading-8 lg:text-[32px] lg:leading-12 mt-6">
                From discovery to delivery, we design accessible, scalable
                websites and apps people love. Partner with us to ship faster,
                stand out, and grow with design that performs.
              </p>
            </div>
          </div>
        </section>
        <section className="bg-[#F5F5F5]">
          <div className="max-w-[1200px] flex flex-col gap-4 sm:gap-6 md:gap-8 py-6 md:pt-12 md:pb-20 mx-auto">
            <div className="text-center space-y-2">
              <h1 className="font-semibold text-[22px] sm:text-3xl md:text-[40px]">
                Price per page
              </h1>
              <p className="text-[#707070] text-sm md:text-base lg:text-lg max-w-lg leading-6 mx-auto">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
            <ToggleMenu />
            <div className="flex md:py-5 md:px-10 lg:px-0 flex-col overflow-x-auto sm:flex-row mx-auto sm:mx-0 xl:max-w-[1200px] gap-5">
              {/* Card Start */}
              {data.map((d) => (
                // outer layer
                <div
                  key={d.title}
                  className={`p-[14px] rounded-[20px] border border-transparent shadow-md ${
                    d.isPopular
                      ? "hover:border-white bg-[#0C5E5E]"
                      : "hover:border-[#0C5E5E] bg-white"
                  } w-full sm:max-w-max sm:min-w-[385px]`}
                >
                  {/* inner layer */}
                  <div
                    className={`px-4 py-5 ${
                      d.isPopular
                        ? "text-white bg-[#0E7171] border-[#0E8C8C]"
                        : "text-[#0C5E5E] border-[#E3E3E3] bg-[#F5F5F5]"
                    } border rounded-2xl flex flex-col`}
                  >
                    {/* heading */}
                    <div className="flex h-10 items-center justify-between">
                      <h3 className="text-3xl font-semibold">{d.title}</h3>
                      {d.isPopular && (
                        <span className="text-lg bg-[#FFE138] px-[14px] py-2 rounded-xl font-medium text-[#0B1414]">
                          Popular
                        </span>
                      )}
                    </div>
                    {/* lists */}
                    <ul className={`mt-8 grow flex flex-col gap-[10px]`}>
                      {d.services.map((service, idx) => (
                        <li
                          key={idx}
                          className={`flex pb-[10px] border-b ${
                            d.isPopular
                              ? "border-b-[#0E8C8C]"
                              : "border-b-[#E3E3E3]"
                          } items-center gap-3 w-full`}
                        >
                          <div>
                            {service.isServed ? (
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5 15C5 15 6.5 15 8.5 18.5C8.5 18.5 14.0588 9.33333 19 7.5"
                                  stroke={`${
                                    d.isPopular ? "#ffffff" : "#0C5E5E"
                                  }`}
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            ) : (
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M19 5L5 19M5 5L19 19"
                                  stroke="#b1b1b1"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            )}
                          </div>
                          <span
                            className={`${
                              service.isServed
                                ? "font-semibold"
                                : "text-[#908d8d]"
                            }`}
                          >
                            {service.title}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* price and action button */}
                  <div className="pt-6 space-y-6">
                    <h1
                      className={`${
                        d.isPopular ? "text-white/95" : "text-black/95"
                      } font-semibold text-[40px]`}
                    >
                      {d.price}
                    </h1>
                    <button
                      className={`w-full ${
                        d.isPopular
                          ? "bg-white hover:bg-[#00F5F5] hover:text-[#0B1414] text-[#0C5E5E]"
                          : "bg-[#0C5E5E] text-white hover:bg-black"
                      } rounded-full p-[10px] transition-colors duration-200 font-semibold cursor-pointer`}
                    >
                      Book a call
                    </button>
                  </div>
                </div>
              ))}
              {/* Card End */}
            </div>
          </div>
        </section>
        <section
          style={{
            backgroundImage: "url(/testimonial_bg.svg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          className="py-10 md:py-15 px-4 sm:px-10 bg-white"
        >
          <div className="text-center">
            <h1 className="text-[22px] sm:text-3xl md:text-[40px] font-semibold pb-[10px]">
              They Loved Working With Us
            </h1>
            <p className="max-w-[450px] mx-auto text-sm md:text-base lg:text-lg text-[#707070]">
              From design sprints to full-stack launches, our clients share
              their wins.
            </p>
          </div>
          <Feedbacks />
        </section>
        <section className="py-8 px-5 md:px-10 sm:py-11 md:py-13 bg-white">
          <div className="text-center max-w-[600px] mx-auto">
            <h1 className="text-[22px] sm:text-3xl md:text-[40px] font-semibold pb-[10px]">
              Got Questions? We’ve Got Answers.
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-[#707070]">
              Here’s everything you need to know before partnering with{" "}
              <span className="font-bold">design forge</span>.
            </p>
          </div>
          <div className="flex flex-col md:flex-row mt-15 gap-6 max-w-[1200px] w-full mx-auto justify-center relative">
            <div className="basis-[65%] grow flex flex-col gap-4">
              {faqs.map((faq, idx) => (
                <details
                  key={idx}
                  className="marker:content-none pb-4 border-b border-b-[#e5e7eb]"
                >
                  <summary className="text-sm sm:text-base md:text-lg text-[#0B1414] font-semibold cursor-pointer">
                    {faq.title}
                  </summary>
                  <p className="text-[12px] sm:text-sm md:text-base pt-3 md:pt-4 pr-6 text-[#707070] leading-6">
                    {faq.desc}
                  </p>
                </details>
              ))}
            </div>
            <aside className="bg-[#0C5E5E] mx-auto shrink-0 w-full max-w-[386px] h-full max-h-[286px] text-white p-4 rounded-[20px] md:sticky top-[140px]">
              <div className="mx-auto p-2 md:p-6 bg-[#0E7171] rounded-[14px] border border-[#1F8C8C]">
                <div>
                  <h1 className="text-2xl leading-8 sm:text-[28px] font-bold sm:leading-10">
                    Got Questions? We&apos;ve Got Answers
                  </h1>
                  <p className="text-[#EBFFFF] mt-2 mb-6">
                    Feel free to reach out to us if you can&apos;t find the
                    answer you&apos;re looking for.
                  </p>
                  <button className="rounded-full w-full cursor-pointer hover:bg-[#00F5F5] active:scale-95  transition-all duration-200 px-5 py-[10px] font-bold bg-white text-black">
                    Book a call
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <footer>
        <div className="text-white z-20 relative max-w-[1440px] mx-auto">
          {/* <h1 className="arima-font absolute z-1 -top-20 left-1/2 whitespace-nowrap -translate-x-1/2 font-semibold text-center border-4 border-red-400 text-[200px] text-[#828282]">
          design forge
        </h1> */}
          <div className="py-12 flex flex-col gap-8 sm:gap-6 md:gap-3">
            <div className="relative z-10">
              <div className="absolute text-white/90 sm:top-[12%] lg:top-[22%] w-full flex items-center justify-between">
                <div className="flex px-2 sm:px-5 text-[12px] sm:text-sm md:text-base items-center justify-between w-full">
                  <span>Website</span>
                  <span>Mobile</span>
                  <span className="md:ml-[25%]">Dashboard</span>
                  <span>SaaS</span>
                </div>
              </div>

              <div className="max-w-[640px] mx-auto px-5 md:px-0 h-auto w-full">
                <img
                  className="w-full h-auto object-contain"
                  src="/owner.avif"
                  alt="owner"
                />
              </div>
            </div>
            <button
              className={`rounded-full cursor-pointer bg-[#EBFFFF] text-black active:scale-95  transition-all duration-200 px-8 py-2.5 max-w-39 mx-auto font-semibold border-[1px]`}
            >
              Book a call
            </button>
          </div>
          <div className="px-5">
            <div className="mx-auto mb-6 gap-8 flex flex-col items-center justify-center ">
              <h1 className="arima-font text-[26px] md:text-5xl font-semibold">
                design forge
              </h1>
              <div>
                <ul className="flex flex-wrap gap-6 items-center justify-center arima-font text-sm md:text-base font-medium rounded-full max-w-max">
                  <li>
                    <Link href="#home">Home</Link>
                  </li>
                  <li>
                    <Link href="#pricing">Pricing</Link>
                  </li>
                  <li>
                    <Link href="#projects">Projects</Link>
                  </li>
                  <li>
                    <Link href="#services">Services</Link>
                  </li>
                  <li>
                    <Link href="#faq">FAQ</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex mb-6 justify-center md:hidden items-center gap-5">
              <Link href={"#"}>
                <Image
                  src={"/social/facebook.svg"}
                  width={24}
                  height={24}
                  alt="facebook"
                />
              </Link>
              <Link href={"#"}>
                <Image
                  src={"/social/linkedin.svg"}
                  width={24}
                  height={24}
                  alt="linkedin"
                />
              </Link>
              <Link href={"#"}>
                <Image
                  src={"/social/dribbble.svg"}
                  width={24}
                  height={24}
                  alt="dribbble"
                />
              </Link>
              <Link href={"#"}>
                <Image
                  src={"/social/behance.svg"}
                  width={24}
                  height={24}
                  alt="behance"
                />
              </Link>
            </div>
            <div className="flex items-center py-6 border-t border-t-[#1D3535] justify-center md:justify-between max-w-[1200px] mx-auto">
              <p className="text-sm sm:text-base md:text-lg font-semibold">
                © 2025 <span className="arima-font">design forge.</span> All
                Rights Reserved
              </p>
              <div className="hidden md:flex items-center gap-5">
                <Link href={"#"}>
                  <Image
                    src={"/social/facebook.svg"}
                    width={24}
                    height={24}
                    alt="facebook"
                  />
                </Link>
                <Link href={"#"}>
                  <Image
                    src={"/social/linkedin.svg"}
                    width={24}
                    height={24}
                    alt="linkedin"
                  />
                </Link>
                <Link href={"#"}>
                  <Image
                    src={"/social/dribbble.svg"}
                    width={24}
                    height={24}
                    alt="dribbble"
                  />
                </Link>
                <Link href={"#"}>
                  <Image
                    src={"/social/behance.svg"}
                    width={24}
                    height={24}
                    alt="behance"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function MarqueeImg({
  images,
  direction,
}: {
  images: string[];
  direction: "left" | "right" | "up" | "down" | undefined;
}) {
  return (
    <Marquee
      speed={30}
      direction={direction}
      className="flex items-center gap-6"
    >
      <div className="flex items-center gap-6">
        {images.map((image, idx) => (
          <img
            key={idx}
            src={image}
            alt="Marque image"
            className="rounded-[20px] w-[164px] h-auto sm:h-auto sm:w-[273px] lg:w-[400px] lg:h-[350px] object-cover"
          />
        ))}
      </div>
    </Marquee>
  );
}
