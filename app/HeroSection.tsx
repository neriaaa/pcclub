'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Crosshair } from 'lucide-react';
import { useState, useEffect } from 'react';

const bootSequence = [
  "BIOS Date 06/07/26 20:36:23 Ver 2.01",
  "CPU: Quantum i9-16900K @ 6.2GHz",
  "Memory: 128GB DDR6 OK",
  "Initializing RTX 5090 Neural Drivers... OK",
  "Establishing quantum link... 1ms ping",
  "Connecting to NEXUS_OS...",
  "SYSTEM READY."
];

export default function HeroSection() {
  const [isClient, setIsClient] = useState(false);
  const [bootStep, setBootStep] = useState(0);
  const [isBooted, setIsBooted] = useState(false);

  // Предотвращение ошибки гидратации SSR
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Логика печати текста в терминале
  useEffect(() => {
    if (!isClient) return;
    
    if (bootStep < bootSequence.length) {
      const timer = setTimeout(() => {
        setBootStep(prev => prev + 1);
      }, 250 + Math.random() * 200); // Имитация реальной загрузки
      return () => clearTimeout(timer);
    } else if (bootStep === bootSequence.length) {
      const timer = setTimeout(() => {
        setIsBooted(true);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [bootStep, isClient]);

  if (!isClient) return <section className="min-h-screen bg-background" />;

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <AnimatePresence mode="wait">
        {!isBooted ? (
          <motion.div 
            key="boot-screen"
            exit={{ opacity: 0, scale: 1.2, filter: "blur(20px)" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0 z-50 bg-[#050505] flex flex-col justify-center items-start px-6 md:px-24 font-mono text-cyan text-sm md:text-xl"
          >
            {bootSequence.slice(0, bootStep).map((line, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="mb-2"
              >
                {line}
              </motion.div>
            ))}
            {bootStep < bootSequence.length && (
              <motion.div 
                animate={{ opacity: [1, 0] }} 
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="w-3 h-5 md:w-4 md:h-6 bg-cyan mt-2"
              />
            )}
          </motion.div>
        ) : (
          <motion.div
            key="hero-content"
            initial={{ scaleY: 0.01, scaleX: 0, opacity: 1 }}
            animate={{ scaleY: [0.01, 0.01, 1], scaleX: [0, 1, 1], opacity: 1 }}
            transition={{ duration: 0.8, times: [0, 0.4, 1], ease: "easeInOut" }}
            className="w-full relative z-10 flex flex-col items-center"
          >
            {/* Decorative Orbs */}
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute -top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[120px] mix-blend-screen -z-10"
            />
            <motion.div 
              animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 10, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-1/4 right-1/4 w-96 h-96 bg-cyan/30 rounded-full blur-[120px] mix-blend-screen -z-10"
            />

            <div className="container mx-auto px-6 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8"
              >
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-sm font-medium text-gray-300">42 игрока онлайн сейчас</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
                className="text-6xl md:text-8xl font-bold font-[family-name:var(--font-rajdhani)] mb-6 uppercase tracking-tight"
              >
                Лучший <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan via-primary to-pink text-glow">Cyber Club</span><br />
                в твоем городе
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
                className="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto"
              >
                Топовые ПК на базе RTX 5090, премиальные игровые зоны, VIP-комнаты и масштабные турниры каждый месяц.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
                className="flex flex-col sm:flex-row items-center justify-center gap-6"
              >
                <button className="group relative px-8 py-4 bg-primary text-white font-bold rounded-lg overflow-hidden w-full sm:w-auto transition-transform hover:scale-105">
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                  <span className="relative flex items-center justify-center gap-2">
                    <Crosshair className="w-5 h-5" />
                    Забронировать место
                  </span>
                </button>
                
                <button className="px-8 py-4 rounded-lg border border-white/20 hover:bg-white/5 transition-all duration-300 font-bold w-full sm:w-auto flex items-center justify-center gap-2 glass-panel">
                  Посмотреть цены
                  <ChevronRight className="w-4 h-4" />
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}