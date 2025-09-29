import Feedbacks from "@/components/carousel";
import Carousel from "@/components/carousel";
import Navbar from "@/components/navbar";
import ToggleMenu from "@/components/toggle";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function Home() {
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
        <div
          style={{
            backgroundImage: `url(/hero_bg.svg)`,
            backgroundSize: "160% auto",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center 100%",
            paddingTop: "106px",
          }}
        >
          <section id="#home" className="max-w-3xl mx-auto relative text-white">
            <div className="w-200 h-200 rounded-full blur-3xl absolute -top-80 -left-40 bg-radial from-[#00ADAD]/30 to-[#00ADAD]/0"></div>
            <div className="text-center pt-12 flex flex-col gap-2 items-center">
              <div className="flex items-center gap-3 font-semibold">
                <div className="h-4 w-4 bg-radial from-[#41C16B] rounded-full"></div>
                <h3>Available for New Projects</h3>
              </div>
              <h1 className="text-[56px] font-bold leading-20">
                Helping businesses grow with impactful design and development.
              </h1>
              <p className="max-w-xl text-lg">
                Whether you&lsquo;re launching an MVP or scaling a SaaS, we turn
                ideas into user-friendly, high-converting experiences.
              </p>
              <div className="flex gap-5 mt-5">
                <button className="rounded-full cursor-pointer hover:bg-[#00F5F5] active:scale-95  transition-all duration-200 px-5 py-[10px] font-bold bg-white text-black">
                  View Price
                </button>
                <button className="rounded-full border cursor-pointer active:scale-95  transition-all duration-200 px-5 py-[10px] font-bold hover:bg-white hover:text-[#0C5E5E]">
                  Free ui ux audit
                </button>
              </div>
              <div className="flex items-center gap-4 font-bold mt-8">
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
          </section>
          <section
            id="servicesContainer"
            className="flex mt-15 mx-auto max-w-[1440px] max-h-[540px] overflow-hidden"
          >
            <div className="relative pt-8 bg-[#F3BE00] overflow-hidden space-y-5 pl-6">
              <div className="absolute w-78 h-78 -top-[30%] -left-[30%] bg-[#FFD64E] blur-[150px]"></div>
              <h1 className="text-[44px] relative font-bold z-50 text-black">
                Web Design
              </h1>
              <div className="w-[338px] relative h-[440px]">
                <img
                  className="w-full h-full object-cover object-top-left"
                  src="/WebDesign.png"
                  alt="web design"
                />
              </div>
            </div>
            <div className="relative pt-8 bg-[#EFB15B] overflow-hidden space-y-5 pl-6 border-l-10 border-[#ffffff66]">
              <div className="absolute w-78 h-78 -top-[30%] -left-[30%] bg-[#DDFA00] blur-[150px]"></div>
              <h1 className="text-[44px] relative font-bold z-50 text-black">
                Mobile Apps
              </h1>
              <div className="w-[338px] relative h-[440px]">
                <img
                  className="w-full h-full object-cover object-top-left"
                  src="/mobile.png"
                  alt="web design"
                />
              </div>
            </div>
            <div className="relative pt-8 bg-[#33C749] overflow-hidden space-y-5 pl-6 border-l-10 border-[#ffffff66]">
              <div className="absolute w-78 h-78 -top-[30%] -left-[30%] bg-[#B6F9C0] blur-[150px]"></div>
              <h1 className="text-[44px] relative font-bold z-50 text-black">
                SaaS Design
              </h1>
              <div className="w-[338px] relative h-[440px]">
                <img
                  className="w-full h-full object-cover object-left"
                  src="/SaaSDesign.png"
                  alt="web design"
                />
              </div>
            </div>
            <div className="relative pt-8 bg-[#3335C7] overflow-hidden space-y-5 pl-6 border-l-10 border-[#ffffff66]">
              <div className="absolute w-78 h-78 -top-[30%] -left-[30%] bg-[#9193FF] blur-[150px]"></div>
              <h1 className="text-[44px] relative font-bold z-50 text-white">
                UX Design
              </h1>
              <div className="w-[338px] relative h-[440px]">
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
          <div className="flex gap-10 max-w-[1200px] pt-9 mx-auto">
            <h4 className="text-sm shrink-0 text-white">
              Trusted by 120+ <br />
              Happy Clients
            </h4>
            <Marquee
              speed={15}
              gradient
              gradientColor="#0B1414"
              pauseOnHover
              direction="right"
              className="flex gap-14"
            >
              <div className="flex gap-14">
                <img src="/1.svg" alt="" />
                <img src="/2.svg" alt="" />
                <img src="/3.svg" alt="" />
                <img src="/4.svg" alt="" />
                <img src="/5.svg" alt="" />
                <img src="/2.svg" alt="" />
                <img src="/5.svg" alt="" />
                <img src="/4.svg" alt="" />
                <img src="/1.svg" alt="" />
                <img src="/6.svg" alt="" />
              </div>
            </Marquee>
          </div>
        </section>
        <section className="relative space-y-6 py-20 mx-auto max-w-[1440px] ">
          <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10">
            <Image
              src={"/work/logo_figma.svg"}
              alt="Figma logo"
              width={500}
              height={300}
            />
          </div>
          <Marquee speed={50} className="flex items-center gap-6">
            <div className="flex items-center gap-6">
              <Image
                src={"/work/1.avif"}
                alt="Marque image"
                className="rounded-[20px]"
                objectFit="cover"
                width={400}
                height={350}
              />
              <Image
                src={"/work/2.avif"}
                alt="Marque image"
                className="rounded-[20px]"
                objectFit="cover"
                width={400}
                height={350}
              />
              <Image
                src={"/work/3.avif"}
                alt="Marque image"
                className="rounded-[20px]"
                objectFit="cover"
                width={400}
                height={350}
              />
              <Image
                src={"/work/4.avif"}
                alt="Marque image"
                className="rounded-[20px]"
                objectFit="cover"
                width={400}
                height={350}
              />
            </div>
          </Marquee>
          <Marquee
            speed={50}
            direction="right"
            className="flex items-center gap-6"
          >
            <div className="flex items-center gap-6">
              <Image
                src={"/work/6.avif"}
                alt="Marque image"
                className="rounded-[20px]"
                objectFit="cover"
                width={400}
                height={350}
              />
              <Image
                src={"/work/7.avif"}
                alt="Marque image"
                className="rounded-[20px]"
                objectFit="cover"
                width={400}
                height={350}
              />
              <Image
                src={"/work/8.avif"}
                alt="Marque image"
                className="rounded-[20px]"
                objectFit="cover"
                width={400}
                height={350}
              />
              <Image
                src={"/work/9.avif"}
                alt="Marque image"
                className="rounded-[20px]"
                objectFit="cover"
                width={400}
                height={350}
              />
            </div>
          </Marquee>
          <Marquee speed={50} className="flex items-center gap-6">
            <div className="flex items-center gap-6">
              <Image
                src={"/work/10.avif"}
                alt="Marque image"
                className="rounded-[20px]"
                objectFit="cover"
                width={400}
                height={350}
              />
              <Image
                src={"/work/2.avif"}
                alt="Marque image"
                className="rounded-[20px]"
                objectFit="cover"
                width={400}
                height={350}
              />
              <Image
                src={"/work/3.avif"}
                alt="Marque image"
                className="rounded-[20px]"
                objectFit="cover"
                width={400}
                height={350}
              />
              <Image
                src={"/work/4.avif"}
                alt="Marque image"
                className="rounded-[20px]"
                objectFit="cover"
                width={400}
                height={350}
              />
            </div>
          </Marquee>
          <Marquee
            speed={50}
            direction="right"
            className="flex items-center gap-6"
          >
            <div className="flex items-center gap-6">
              <Image
                src={"/work/6.avif"}
                alt="Marque image"
                className="rounded-[20px]"
                objectFit="cover"
                width={400}
                height={350}
              />
              <Image
                src={"/work/7.avif"}
                alt="Marque image"
                className="rounded-[20px]"
                objectFit="cover"
                width={400}
                height={350}
              />
              <Image
                src={"/work/8.avif"}
                alt="Marque image"
                className="rounded-[20px]"
                objectFit="cover"
                width={400}
                height={350}
              />
              <Image
                src={"/work/9.avif"}
                alt="Marque image"
                className="rounded-[20px]"
                objectFit="cover"
                width={400}
                height={350}
              />
            </div>
          </Marquee>
        </section>
        <section className="w-full bg-white">
          <div className="max-w-[1200px] mx-auto py-20">
            <div className="grid grid-cols-3 gap-5">
              <div className="border-gray-400 hover:border-[#0E8C8C] text-2xl border hover:bg-gray-100 text-center h-32 flex items-center justify-center rounded-3xl">
                UI/UX Design
              </div>
              <div className="border-gray-400 hover:border-[#0E8C8C] text-2xl border hover:bg-gray-100 text-center h-32 flex items-center justify-center rounded-3xl">
                Website Design
              </div>
              <div className="border-gray-400 hover:border-[#0E8C8C] text-2xl border hover:bg-gray-100 text-center h-32 flex items-center justify-center rounded-3xl">
                Mobile App Design
              </div>
              <div className="border-gray-400 hover:border-[#0E8C8C] text-2xl border hover:bg-gray-100 text-center h-32 flex items-center justify-center rounded-3xl">
                SaaS Design
              </div>
              <div className="text-center h-32 flex items-center justify-center">
                <h1 className="arima-font font-semibold text-3xl text-[#0C5E5E]">
                  design forge
                </h1>
              </div>
              <div className="border-gray-400 hover:border-[#0E8C8C] text-2xl border hover:bg-gray-100 text-center h-32 flex items-center justify-center rounded-3xl">
                Free ui ux audit
              </div>
              <div className="border-gray-400 hover:border-[#0E8C8C] text-2xl border hover:bg-gray-100 text-center h-32 flex items-center justify-center rounded-3xl">
                Website/App <br /> Development
              </div>
              <div className="border-gray-400 hover:border-[#0E8C8C] text-2xl border hover:bg-gray-100 text-center h-32 flex items-center justify-center rounded-3xl">
                Webflow <br /> Development
              </div>
              <div className="border-gray-400 hover:border-[#0E8C8C] text-2xl border hover:bg-gray-100 text-center h-32 flex items-center justify-center rounded-3xl">
                Prototype
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#0C5E5E] text-white">
          <div className="max-w-[1200px] mx-auto flex gap-[140px] py-13">
            <h1 className="arima-font font-semibold shrink-0 text-5xl">
              design forge
            </h1>
            <div>
              <p className="text-[32px] leading-12">
                design forge is a UI/UX agency crafting intuitive,
                conversion-driven digital experiences. We blend research,
                strategy, and bold aesthetics to turn complexity into clarity.
              </p>
              <p className="text-[32px] leading-12 mt-6">
                From discovery to delivery, we design accessible, scalable
                websites and apps people love. Partner with us to ship faster,
                stand out, and grow with design that performs.
              </p>
            </div>
          </div>
        </section>
        <section className="bg-[#F5F5F5]">
          <div className="max-w-[1200px] flex flex-col gap-8 pt-12 pb-20 mx-auto">
            <div className="text-center space-y-2">
              <h1 className="font-semibold text-[40px]">Price per page</h1>
              <p className="text-[#707070] max-w-lg leading-6 mx-auto">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
            <ToggleMenu />
            <div className="w-full flex justify-center gap-5">
              {/* Card Start */}
              {data.map((d) => (
                // outer layer
                <div
                  key={d.title}
                  className={`p-[14px] rounded-[20px] border border-transparent shadow-md ${
                    d.isPopular
                      ? "hover:border-white bg-[#0C5E5E]"
                      : "hover:border-[#0C5E5E] bg-white"
                  } w-full`}
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
                            className={` ${
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
        {/* className="py-20 border-red-400 border-2 bg-white justify-center items-center flex" */}
        <section className="py-20 bg-white">
          <div className="text-center">
            <h1 className="text-[40px] font-semibold pb-[10px]">
              They Loved Working With Us
            </h1>
            <p className="max-w-[450px] mx-auto text-lg text-[#707070]">
              From design sprints to full-stack launches, our clients share
              their wins.
            </p>
          </div>
          <Feedbacks />
        </section>
      </main>
    </div>
  );
}
