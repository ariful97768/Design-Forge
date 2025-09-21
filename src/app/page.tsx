import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(/hero_bg.svg)`,
        backgroundSize: "160% auto",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center 100%",
      }}
      className="bg-[#0B1414]"
    >
      <header>
        <Navbar />
      </header>
      <main className="pt-[106]">
        <div id="#home" className="max-w-3xl mx-auto relative text-white">
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
        </div>
        <div
          id="servicesContainer"
          className="flex mt-15 mx-auto max-w-[1440px] max-h-[540px] overflow-hidden "
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
        </div>
      </main>
    </div>
  );
}
