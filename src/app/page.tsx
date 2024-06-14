import { Metadata } from "next";
import BestSellers from "./components/BestSellers";
import CtaSection from "./components/CtaSection";
import Hero from "./components/Hero";
import WhyUs from "./components/WhyUs";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Unoplast, the Leading Water Tanks Provider in Lebanon"
};

export default function Home() {
  return (
    <>
      <Hero/>
      <WhyUs/>
      <BestSellers/>
      <CtaSection/>
    </>
  );
}
