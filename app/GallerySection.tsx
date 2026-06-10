'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Image as ImageIcon, ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  { id: 1, url: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1920', title: 'Main Arena' },
  { id: 2, url: 'https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?auto=format&fit=crop&q=80&w=1920', title: 'VIP Bootcamp' },
  { id: 3, url: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=1920', title: 'PS5 Lounge' },
  { id: 4, url: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=1920', title: 'Streaming Room' },
  { id: 5, url: 'https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?auto=format&fit=crop&q=80&w=1920', title: 'Cyber Bar' },
];

export default function GallerySection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -current.offsetWidth / 1.5 : current.offsetWidth / 1.5;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-32 relative overflow-hidden" id="gallery">
      <div className="container mx-auto px-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-rajdhani)] uppercase mb-4 flex items-center gap-4">
            <ImageIcon className="w-10 h-10 text-primary" />
            Локации <span className="text-cyan text-glow">Клуба</span>
          </h2>
          <p className="text-gray-400">Листай галерею или используй кнопки для навигации.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex gap-4"
        >
          <button onClick={() => scroll('left')} className="p-3 rounded-full border border-white/10 bg-surface/40 hover:bg-white/10 transition-colors text-white">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={() => scroll('right')} className="p-3 rounded-full border border-white/10 bg-surface/40 hover:bg-white/10 transition-colors text-white">
            <ChevronRight className="w-6 h-6" />
          </button>
        </motion.div>
      </div>

      {/* Горизонтальный скролл с привязкой (Snap) */}
      <div className="pl-6 md:pl-16">
        <motion.div 
          ref={scrollRef}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 pr-6 [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: 'none' }}
        >
          {images.map((img) => (
            <div 
              key={img.id} 
              className="snap-center shrink-0 w-[85vw] md:w-[60vw] lg:w-[40vw] h-[400px] md:h-[500px] rounded-3xl overflow-hidden relative group cursor-pointer border border-white/10"
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 z-10" />
              <img src={img.url} alt={img.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-20">
                <h3 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-rajdhani)] uppercase tracking-wider">{img.title}</h3>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}