import { Button } from "@/components/ui/button"
import Navbar from "@/components/Sections/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-primary-background text-primary-foreground relative">
       <div className="h-[2px] w-full bg-main-gradient absolute top-0 z-50"></div>
      <Navbar></Navbar>
      <section className="w-full h-screen">
        <div className="h-[98%] relative bg-[url('/assets/bg-hero.png')] bg:contain md:bg-cover">
          <div className="h-[85px]"></div>
          {/* <div className="h-[2px] w-full bg-main-gradient absolute top-0"></div> */}
          <div className="h-[2px] w-full bg-main-gradient absolute bottom-0"></div>
          <img className="absolute right-0 bottom-[2px] h-[80%] hidden md:block" src="/assets/avatar.png"></img>
          {/* <Button className="px-6 py-0 text-xs font-black rounded uppercase bg-primary/50 border border-primary-foreground">Event Schedule</Button> */}
          <div className="container mx-auto h-[calc(98%-150px)] ">
            <div className="md:pt-32 pt-24 md:pl-24">
              <div className="mb-6 md:mb-3 font-semibold">IEEE Sri Lanka Section Student | YP | WIE CONGRESS </div>
              <div className="font-bold text-[4rem] leading-[4rem] md:text-[6rem] md:leading-[6rem] ">
                <div className="flex-col inline-flex bg-text-gradient text-transparent bg-clip-text">
                  <span>SLSYWC</span>
                  <span>&apos;24</span>
                </div>
              </div>
              <div className="h-24">
                {/* <button>Register</button> */}
              </div>
            </div>
          </div>
          <div className="container flex items-center gap-4">
            <a href="https://www.facebook.com" target="_blank"><img src="/assets/social/fb_logo.svg" alt="" className="h-8"/></a>
            <a href="https://www.facebook.com" target="_blank"><img src="/assets/social/instagram_logo.svg" alt="" className="h-8"/></a>
            <a href="https://www.facebook.com" target="_blank"><img src="/assets/social/linkedin_logo.svg" alt="" className="h-8"/></a>
            <a href="https://www.facebook.com" target="_blank"><img src="/assets/social/x_logo.svg" alt="" className="h-7"/></a>
          </div>
        </div>
      </section>
      <section className="w-full h-screen "></section>
      <section className="w-full h-screen "></section>
      
    </main>
  );
}
