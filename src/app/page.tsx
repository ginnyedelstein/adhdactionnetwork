import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import Foundation from "@/src/components/Foundation";
import Programmes from "@/src/components/Programmes";
import HowItWorks from "@/src/components/HowItWorks";
import Testimonials from "@/src/components/Testimonials";
import CTABanner from "@/src/components/CTABanner";
import Partners from "@/src/components/Partners";
import Team from "@/src/components/Team";
import Footer from "@/src/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Foundation />
      <Programmes />
      <HowItWorks />
      <Team />
      <Testimonials />
      <CTABanner />
      <Partners />
      <Footer />
    </main>
  );
}
