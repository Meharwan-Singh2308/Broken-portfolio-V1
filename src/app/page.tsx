"use client"

import Hero from "@/components/Hero";
import MarqueeLanguages from "@/components/MarqueeLanguages MarqueeLanguages";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";


export default function Home() {
  return (
   <div className="w-screen bg-[#1E1A1A] h-full overflow-x-hidden">
    <Navbar></Navbar>
    <Hero></Hero>
    <MarqueeLanguages></MarqueeLanguages>
      <Skills></Skills>
   </div>
  );
}
