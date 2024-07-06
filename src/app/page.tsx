import { Button } from "@/components/ui/button"
import Navbar from "@/components/Sections/Navbar";
import Link from "next/link";
import Welcome from "@/components/Sections/Welcome";
import FAQ from "@/components/Sections/FAQ";
import Countdown from "@/components/Sections/Countdown";
import Theme from "@/components/Sections/Theme";
import Sponsors from "@/components/Sections/Sponsors";
import PastEvents from "@/components/Sections/PastEvents";
import Organized from "@/components/Sections/Organized";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-primary-background text-primary-foreground relative">
       <div className="h-[2px] w-full bg-main-gradient absolute top-0 z-50"></div>
      <Navbar></Navbar>
      <section className="w-full">
        <div className="h-[100svh] md:h-[100vh] relative bg-[url('/assets/bg-hero-mobile.jpg')] md:bg-[url('/assets/bg-hero.jpg')] md:bg-cover">
          <div className="h-[69px] md:h-[85px]"></div>
          <img className="absolute right-0 bottom-0 mx-auto h-[50%] max-w-full lg:hidden" src="/assets/hero_graphic.png"></img>
          <div className="container mx-auto md:h-[calc(98%-150px)] ">
            <div className="md:pt-32 pt-16 md:pl-24">
              <div className="mb-6 md:mb-3 font-semibold text-center md:text-start">IEEE Sri Lanka Section Students | YP | WIE Congress </div>
              <div className="font-bold text-[4rem] leading-[4rem] md:text-[6rem] md:leading-[6rem] text-center md:text-start">
                <div className="flex-col inline-flex bg-[linear-gradient(to_right,#0060dd,#04e4fe,#0060dd,#04e4fe,#0060dd)] text-transparent bg-clip-text bg-[length:200%_auto] animate-gradient-animation">
                  <span>SLSYWC</span>
                  <span>&apos;24</span>
                </div>
              </div>
              <div className="py-6 text-center md:text-start">
                <button className="py-2 px-6 text-red-500 font-medium border border-red-700 rounded-[8px] text-md uppercase">Registrations Opening Soon</button>
              </div>
            </div>
          </div>
          <div className="md:absolute w-full bottom-10 hidden">
            <div className="container flex items-center gap-4 ">
            <a href="https://www.facebook.com" target="_blank"><img src="/assets/social/fb_logo.svg" alt="" className="h-8"/></a>
            <a href="https://www.facebook.com" target="_blank"><img src="/assets/social/instagram_logo.svg" alt="" className="h-8"/></a>
            <a href="https://www.facebook.com" target="_blank"><img src="/assets/social/linkedin_logo.svg" alt="" className="h-8"/></a>
            <a href="https://www.facebook.com" target="_blank"><img src="/assets/social/x_logo.svg" alt="" className="h-7"/></a>
            </div>

          </div>
        </div>
      </section>
      <div className="min-h-screen bg-[url('/assets/bg-sections.jpg')] bg-cover">
        <Welcome />
        <Theme />
        <Sponsors />
        <PastEvents />
        <Organized/>
        <FAQ />
        {/* <Countdown/> */}
      </div>

      
    </main>
  );
}
