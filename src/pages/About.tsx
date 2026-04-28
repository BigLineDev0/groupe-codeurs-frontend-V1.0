import { motion } from 'motion/react';
import { Target, Flag, Lightbulb, CheckCircle2 } from 'lucide-react';

export default function About() {
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
            À propos de <span className="text-brand-blue">Groupe Codeurs</span>
          </motion.h1>
          <p className="text-white/50 max-w-2xl mx-auto uppercase text-xs font-bold tracking-[0.3em]">
            L'excellence numérique au service de votre avenir
          </p>
        </div>
      </section>

      {/* History */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <span className="badge-red mb-6">Notre Histoire</span>
              <h2 className="text-3xl font-bold text-brand-dark mb-8">Un engagement pour l'excellence</h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Groupe Codeurs a été créé dans le but de former les jeunes aux compétences numériques et de faciliter leur insertion professionnelle. 
                </p>
                <p>
                  Depuis sa création, le centre s'engage à offrir des formations de qualité adaptées aux besoins du marché. Nous avons débuté avec une poignée d'étudiants passionnés et sommes aujourd'hui un centre reconnu pour son excellence pédagogique au Bénin.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative group">
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800"
                alt="Histoire" 
                className="rounded-3xl shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute -inset-4 border-2 border-brand-red opacity-10 rounded-3xl -z-10 group-hover:opacity-20 transition-opacity"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision & Values */}
      <section className="py-24 bg-brand-bg">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-12 rounded-3xl shadow-sm border-l-4 border-brand-red"
            >
              <div className="w-14 h-14 bg-brand-red/10 text-brand-red rounded-xl flex items-center justify-center mb-8">
                <Target size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-brand-dark">Notre Mission</h3>
              <p className="text-gray-500 leading-relaxed">
                Former des personnes compétentes dans le domaine de l'informatique et contribuer au développement des compétences numériques dans la communauté.
              </p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-12 rounded-3xl shadow-sm border-l-4 border-brand-blue"
            >
              <div className="w-14 h-14 bg-brand-blue/10 text-brand-blue rounded-xl flex items-center justify-center mb-8">
                <Flag size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-brand-dark">Notre Vision</h3>
              <p className="text-gray-500 leading-relaxed">
                Devenir un centre de formation de référence dans le domaine du numérique, reconnu tant au niveau national qu'international.
              </p>
            </motion.div>
          </div>

          <div className="bg-brand-dark text-white p-12 lg:p-20 rounded-[3rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 rounded-full blur-3xl"></div>
            <div className="relative z-10 text-center">
              <h3 className="text-2xl font-bold mb-16 tracking-widest uppercase text-brand-blue">Nos Valeurs Directrices</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                {[
                  { title: 'Professionnalisme', icon: <CheckCircle2 className="mx-auto mb-4 text-brand-red" /> },
                  { title: 'Innovation', icon: <Lightbulb className="mx-auto mb-4 text-brand-blue" /> },
                  { title: 'Partage du savoir', icon: <Users className="mx-auto mb-4 text-brand-secondary" /> },
                  { title: 'Responsabilité', icon: <ShieldCheck className="mx-auto mb-4 text-white/50" /> },
                ].map((val, i) => (
                  <motion.div key={i} whileHover={{ scale: 1.05 }}>
                    {val.icon}
                    <h4 className="font-bold text-sm uppercase tracking-widest">{val.title}</h4>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
