import Link from "next/link";
export default function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(/hero_bg.svg)`,
        backgroundSize: "130% auto",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center 80%",
      }}
      className="text-white bg-[#0B1414] h-screen"
    >
      <header className="absolute right-50 left-50">
        <nav className="flex items-center justify-between py-5 max-w-6xl mx-auto">
          <h1 className="arima-font font-semibold text-3xl">design forge</h1>
          <div className="flex items-center gap-8">
            <ul className="flex gap-2 arima-font items-center bg-gradient-to-r from-[#0B4040]/50 to-[#0D2A2A] text-sm font-medium rounded-full max-w-max px-2">
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
            <button className="rounded-full cursor-pointer hover:bg-[#EBFFFF] hover:text-[#0C5E5E] active:scale-95  transition-all duration-200 px-5 py-[10px] font-bold border-[1px]">
              Book a call
            </button>
          </div>
        </nav>
      </header>
      <main className="pt-[106]">
        <div className="max-w-3xl mx-auto text-center pt-12 flex flex-col gap-2 items-center">
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
            <button className="rounded-full cursor-pointer hover:bg-[#00F5F5] active:scale-95  transition-all duration-200 px-5 py-[10px] font-bold bg-white text-black">View Price</button>
            <button className="rounded-full border cursor-pointer active:scale-95  transition-all duration-200 px-5 py-[10px] font-bold hover:bg-white hover:text-[#0C5E5E]">Free ui ux audit</button>
          </div>
          <div>
            
          </div>
        </div>
      </main>
    </div>
  );
}
