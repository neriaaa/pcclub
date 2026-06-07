'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Стандарт",
    price: "150",
    period: "₽ / час",
    features: ["ПК RTX 4070 Ti", "Монитор 240Hz", "Общий зал", "Базовая периферия"],
    highlight: false,
  },
  {
    name: "VIP Bootcamp",
    price: "300",
    period: "₽ / час",
    features: ["ПК RTX 5090", "Монитор 360Hz Zowie", "Изолированная комната", "Премиум периферия", "Напиток в подарок"],
    highlight: true,
  },
  {
    name: "Ночь (Пакет)",
    price: "900",
    period: "₽ / 10 часов",
    features: ["С 22:00 до 08:00", "Случайный ПК (от 4070)", "Энергетик в баре", "Доступ в лаунж зону"],
    highlight: false,
  }
];

export default function PricingSection() {
  return (
    <section className="py-32 relative" id="pricing">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-rajdhani)] text-center uppercase mb-20">
          Выбери свой <span className="text-pink text-glow">Уровень</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className={`relative rounded-3xl p-8 glass-panel flex flex-col ${
                plan.highlight ? 'border-primary/50 shadow-[0_0_30px_rgba(124,58,237,0.3)] scale-105 z-10' : 'border-white/10'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-pink text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                  Популярный выбор
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-center mb-2">{plan.name}</h3>
              <div className="text-center mb-8 flex items-end justify-center gap-1">
                <span className="text-5xl font-bold">{plan.price}</span>
                <span className="text-gray-400 text-lg mb-1">{plan.period}</span>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3 text-gray-300">
                    <div className="w-5 h-5 rounded-full bg-cyan/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-cyan" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-bold transition-all duration-300 ${
                plan.highlight 
                  ? 'bg-gradient-to-r from-primary to-pink hover:shadow-lg hover:shadow-primary/50 text-white' 
                  : 'bg-white/10 hover:bg-white/20 text-white'
              }`}>
                Выбрать тариф
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}