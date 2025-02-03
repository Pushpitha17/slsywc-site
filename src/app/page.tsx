import { Button } from "@/components/ui/button"
import Navbar from "@/components/Sections/Navbar"
import Link from "next/link"
import Welcome from "@/components/Sections/Welcome"
import FAQ from "@/components/Sections/FAQ"
import Countdown from "@/components/Sections/Countdown"
import Theme from "@/components/Sections/Theme"
import Sponsors from "@/components/Sections/Sponsors"
import PastEvents from "@/components/Sections/PastEvents"
import Organized from "@/components/Sections/Organized"
import Footer from "@/components/Sections/Footer"
import Team from "@/components/Sections/Team"
import Hotel from "@/components/Sections/Hotel"
import { MapPin, CalendarDays } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-primary-background text-primary-foreground relative">
      <div className="h-[5px] w-full bg-main-gradient absolute top-0 z-50"></div>
      <Navbar></Navbar>
      <section className="w-full" id="home">
        <div className="h-[100svh] md:h-[100vh] relative bg-[url('/assets/new-mobile-bg.jpg')] md:bg-[url('/assets/Home.jpg')] md:bg-cover">
          <div className="h-[69px] md:h-[85px]"></div>
          <img
            className="absolute right-0 bottom-0 mx-auto h-[50%] max-w-full lg:hidden vh-less-600:h-[40%]"
            src="/assets/hero_graphic.png"
          ></img>
          <div className="container mx-auto md:h-[calc(98%-150px)] ">
            <div className="md:pt-24 pt-12 md:pl-24">
              <div className="mb-6 md:mb-3 font-semibold text-center md:text-start">
                IEEE Sri Lanka Section Students | YP | WIE Congress{" "}
              </div>
              <div className="font-bold text-[3.5rem] leading-[4rem] md:text-[6rem] md:leading-[6rem] text-center md:text-start">
                <div className="md:flex-col inline-flex bg-[linear-gradient(to_right,#2563eb,#2DD4BF,#2563eb,#2DD4BF,#2563eb)] text-transparent bg-clip-text bg-[length:200%_auto] animate-gradient-animation">
                  <span>SLSYWC</span>
                  <span>&apos;25</span>
                </div>
              </div>
              <div className="pt-6 text-[#dcdde1]">
                <div className="flex space-x-2 py-2">
                  <MapPin color="#2563eb"></MapPin>
                  <div className="font-bold">
                    Cinnamon Life City of Dreams, Colombo
                  </div>
                </div>
                <div className="flex space-x-2">
                  <CalendarDays color="#2563eb" />
                  <div className="font-bold">Oct 4th | 5th | 6th 2025</div>
                </div>
              </div>
              <div className="py-6 text-start md:text-start">
                {/* registration closed */}
                {/* <div className="py-2 text-blue-500 font-medium">
                  Registrations Closed.
                </div> */}

                {/* register open */}
                {/* <Link href={"/register"} className="z-50">
                  {" "}
                  <Button
                    size={"lg"}
                    variant={"outline"}
                    className="py-2 px-6 text-red-500 font-medium border border-red-700 rounded-[8px] text-md uppercase"
                  >
                    Register to SLSYWC&apos;24
                  </Button>
                </Link> */}
              </div>
            </div>
          </div>
          <div className="md:absolute md:inline-block bottom-10 left-[10%] hidden">
            <div className="flex items-center gap-4 ">
              <a href="https://www.facebook.com/IEEESLSYWC/" target="_blank">
                <img src="/assets/social/fb_logo.svg" alt="" className="h-8" />
              </a>
              <a
                href="https://www.instagram.com/ieeeslsywc/?hl=en"
                target="_blank"
              >
                <img
                  src="/assets/social/instagram_logo.svg"
                  alt=""
                  className="h-8"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/ieee-slsywc/?originalSubdomain=lk"
                target="_blank"
              >
                <img
                  src="/assets/social/linkedin_logo.svg"
                  alt=""
                  className="h-8"
                />
              </a>
              <a href="https://x.com/ieeeslsywc" target="_blank">
                <img src="/assets/social/x_logo.svg" alt="" className="h-7" />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="min-h-screen bg-[url('/assets/bg-sections.jpg')] bg-cover"> */}
      <Countdown targetDate="Sep 14, 2024, 8:00:00 AM" />
      <div className="min-h-screen bg-cover">
        <Welcome />
        <Theme />
        <Hotel />
        <Sponsors />
        <PastEvents />
        <Organized />
        <Team />
        <FAQ />
        <Footer></Footer>
        {/* <Countdown/> */}
      </div>
    </main>
  )
}
