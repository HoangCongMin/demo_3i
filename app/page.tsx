import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionOneRTL from "@/components/About/AboutSectionOneRTL";
import Services from "@/components/Services";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import LocationSystem from "@/components/LocationSystem";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <AboutSectionOne />
      <AboutSectionOneRTL />
      {/* <AboutSectionTwo /> */}
      <Services />
      <Features />
      <Video />
      <Brands />
      {/* <Testimonials /> */}
      <Pricing />
      <Blog />
      <Contact />
      <LocationSystem />
    </>
  );
}