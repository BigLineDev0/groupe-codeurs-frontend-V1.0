import { motion } from 'motion/react';
import { Star, Quote, UserCircle } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export default function Testimonials() {
  return (
    <div className="pt-20 bg-brand-bg">
      {/* Header */}
      <section className="bg-brand-dark text-white py-24 border-b border-white/10">
        <div className="container mx-auto px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
          >
            Ils nous font <span className="text-brand-blue">confiance</span>
          </motion.h1>
          <p className="text-white/50 max-w-2xl mx-auto uppercase text-xs font-bold tracking-[0.3em]">
            Découvrez les retours d'expérience de nos apprenants
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 bg-brand-bg">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-brand-blue flex flex-col h-full hover:shadow-xl transition-all"
              >
                <div className="flex gap-1 text-yellow-400 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-600 mb-8 flex-grow leading-relaxed italic">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-4 pt-6 border-t border-gray-50">
                  <div className="w-10 h-10 bg-brand-blue/10 text-brand-blue rounded-full flex items-center justify-center font-bold text-xs uppercase">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark">{t.name}</h4>
                    <p className="text-[10px] uppercase font-bold text-brand-blue tracking-widest">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="container mx-auto px-8 text-center">
            <span className="badge-red mb-6">Immersion</span>
            <h2 className="text-4xl font-bold text-brand-dark mb-16 px-4">Témoignages Vidéos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="aspect-video bg-brand-dark rounded-3xl flex items-center justify-center shadow-2xl relative overflow-hidden group">
                    <div className="absolute inset-0 bg-brand-dark/40 group-hover:bg-brand-dark/20 transition-colors z-10"></div>
                    <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Video cover" />
                    <button className="w-20 h-20 bg-brand-red text-white rounded-full flex items-center justify-center relative z-20 hover:scale-110 transition-transform shadow-xl">
                        <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                    </button>
                </div>
                <div className="aspect-video bg-brand-dark rounded-3xl flex items-center justify-center shadow-2xl relative overflow-hidden group">
                    <div className="absolute inset-0 bg-brand-blue/40 group-hover:bg-brand-blue/20 transition-colors z-10"></div>
                    <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Video cover" />
                    <button className="w-20 h-20 bg-brand-blue text-white rounded-full flex items-center justify-center relative z-20 hover:scale-110 transition-transform shadow-xl">
                        <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                    </button>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
