import React from "react";
import { HeroSection, HeroDark } from "@/app/home/HeroSection";
import Skills from "./home/Skills";
import Reports from "./home/CustomReports";
import { CarouselSpacing } from "@/app/home/Card";
export default function Home() {
  return (
    <>
      <HeroSection />
      <HeroDark />
      <Skills />
      <Reports />
      <CarouselSpacing />
    </>
  );
}
