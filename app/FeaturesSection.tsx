'use client';

import { motion } from 'framer-motion';
import { Cpu, Wifi, Monitor, Gamepad2, Trophy, Crown } from 'lucide-react';

const features = [
  { icon: Cpu, title: 'RTX 5090 Gaming PC', desc: 'Максимальный FPS в любых новинках. Процессоры i9 последнего поколения.' },
  { icon: Monitor, title: '360Hz Мониторы', desc: 'Плавность, которая решает исходы матчей. ZOWIE и ASUS ROG.' },
  { icon: Wifi, title: 'Пинг 1ms', desc: 'Выделенный оптический канал 10 Гбит/с. Никаких лагов.' },
  { icon: Crown, title: 'VIP Комнаты', desc: 'Изолированные буткемпы для команд со своей климатической зоной.' },
  { icon: Gamepad2, title: 'PS5 Zone', desc: 'Огромные 4K ТВ, удобные диваны и все последние эксклюзивы.' },
  { icon: Trophy, title: 'Турниры', desc: 'Еженедельные ланы с реальным призовым фондом и трансляциями.' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
};

export default function FeaturesSection() {
  return (
    <section className="py-32 relative z-10" id="features">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-rajdhani)] uppercase mb-4">
            Наш <span className="text-cyan text-glow">Арсенал</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Мы не экономим на железе. Играй на лучшем оборудовании, доступном на рынке.</p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-panel p-8 rounded-2xl neon-border group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-6 text-primary group-hover:text-cyan group-hover:bg-cyan/20 transition-colors duration-300">
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}