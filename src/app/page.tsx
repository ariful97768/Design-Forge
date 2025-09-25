import Navbar from "@/components/navbar";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function Home() {
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
      </main>
    </div>
  );
}
