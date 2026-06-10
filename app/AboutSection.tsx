'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section className="py-32 relative overflow-hidden" id="about">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-rajdhani)] uppercase mb-6">
            Киберспорт <span className="text-primary text-glow">Нового Уровня</span>
          </h2>
          <div className="flex flex-col md:flex-row gap-8">
            <motion.p 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 text-gray-400 text-lg leading-relaxed"
            >
              NEXUS CYBER LOUNGE — это не просто компьютерный клуб. Это экосистема для геймеров, киберспортсменов и стримеров. Мы объединили топовое железо, продуманную эргономику и уникальный дизайн в стиле киберпанк.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex-1 text-gray-400 text-lg leading-relaxed"
            >
              Здесь каждый найдет свое место: от уютных зон с консолями для отдыха с друзьями до профессиональных изолированных буткемпов для тренировок команд перед турнирами.
            </motion.p>
          </div>
        </motion.div>

        {/* Визуальная заглушка (можно заменить на фото интерьера) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full h-64 md:h-96 rounded-3xl glass-panel relative overflow-hidden flex items-center justify-center group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-cyan/20 z-10 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
          <h3 className="text-3xl md:text-5xl font-bold text-white/50 tracking-widest uppercase z-20 group-hover:scale-110 transition-transform duration-700 text-center">
            [ Изображение Интерьера ]
          </h3>
        </motion.div>
      </div>
    </section>
  );
}