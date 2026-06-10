'use client';

import { motion, useScroll, useSpring } from "framer-motion";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import GallerySection from "./GallerySection";
import FeaturesSection from "./FeaturesSection";
import PricingSection from "./PricingSection";
import ContactSection from "./ContactSection";

export default function Home() {
  // Анимированный Scroll Progress Bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="relative w-full flex flex-col flex-1 overflow-hidden">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan via-primary to-pink transform-origin-left z-50"
        style={{ scaleX }}
      />
      
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <FeaturesSection />
      <PricingSection />
      <ContactSection />
    </main>
  );
}
