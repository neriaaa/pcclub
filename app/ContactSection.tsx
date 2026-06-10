'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Send } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="py-32 relative" id="contacts">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-rajdhani)] uppercase mb-4">
            Выйти на <span className="text-cyan text-glow">Связь</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Ждем тебя 24/7. Забронируй ПК заранее или задай нам любой вопрос.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Контактная информация */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="glass-panel p-8 rounded-3xl space-y-6 neon-border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Локация</h4>
                  <p className="text-gray-400">ул. Кибернетиков, 2077, Нео-Сити</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan/20 flex items-center justify-center text-cyan">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Телефон</h4>
                  <p className="text-gray-400">+7 (999) 123-45-67</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-pink/20 flex items-center justify-center text-pink">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Режим работы</h4>
                  <p className="text-gray-400">Круглосуточно (24/7)</p>
                </div>
              </div>
            </div>

            {/* Стилизованная Карта */}
            <div className="w-full h-48 glass-panel rounded-3xl overflow-hidden relative flex items-center justify-center group cursor-pointer">
               <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=55.7558,37.6173&zoom=14&size=800x400&maptype=roadmap&style=feature:all|element:labels.text.fill|color:0xffffff&style=feature:all|element:labels.text.stroke|color:0x000000&style=feature:all|element:labels.icon|visibility:off&style=feature:administrative|element:geometry.fill|color:0x000000&style=feature:administrative|element:geometry.stroke|color:0x144b53&style=feature:landscape|element:all|color:0x08304b&style=feature:poi|element:geometry|color:0x0c4152&style=feature:road.highway|element:geometry.fill|color:0x000000&style=feature:road.highway|element:geometry.stroke|color:0x0b434f&style=feature:road.arterial|element:geometry.fill|color:0x000000&style=feature:road.arterial|element:geometry.stroke|color:0x0b3d51&style=feature:road.local|element:geometry|color:0x000000&style=feature:transit|element:all|color:0x146474&style=feature:water|element:all|color:0x021019')] bg-cover bg-center opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
               <div className="relative z-10 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(124,58,237,0.8)] group-hover:scale-110 transition-transform">
                 <MapPin className="w-6 h-6" />
               </div>
            </div>
          </motion.div>

          {/* Форма бронирования */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="glass-panel p-8 rounded-3xl neon-border"
          >
            <h3 className="text-2xl font-bold mb-6">Забронировать ПК</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Твое Имя</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="CyberNinja" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Telegram / Телефон</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan transition-colors" placeholder="@username" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Дата</label>
                  <input type="date" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-pink transition-colors [color-scheme:dark]" />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Время</label>
                  <input type="time" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-pink transition-colors [color-scheme:dark]" />
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Тариф / Зона</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors [&>option]:bg-surface">
                  <option>Стандарт</option>
                  <option>VIP Bootcamp</option>
                  <option>PS5 Zone</option>
                </select>
              </div>
              <button className="w-full py-4 mt-4 bg-gradient-to-r from-primary to-cyan text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300 group">
                Отправить заявку
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}