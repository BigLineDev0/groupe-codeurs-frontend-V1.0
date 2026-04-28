import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Award, Zap, Users, ShieldCheck, Star } from 'lucide-react';
import { COURSES, TESTIMONIALS } from '../constants';
import { cn } from '../lib/utils';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section - Clean Utility 60/40 Layout */}
      <section className="min-h-[85vh] grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-gray-200">
        {/* Left Hero Area (60%) */}
        <div className="lg:col-span-7 p-8 lg:p-20 flex flex-col justify-center bg-white">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="badge-red mb-6 self-start"
          >
            Formation Professionnelle 2026
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-brand-dark leading-[1.1] mb-8"
          >
            Formez-vous aux métiers du <span className="text-brand-blue">numérique</span> avec Groupe Codeurs
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-lg md:text-xl mb-10 max-w-xl leading-relaxed"
          >
            Nous formons les jeunes et les professionnels en bureautique, infographie et développement web avec des méthodes pratiques et accessibles.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/inscription" className="btn-primary py-4 px-10 text-base flex items-center justify-center gap-2 shadow-xl shadow-brand-red/20 active:translate-y-1">
              S'inscrire maintenant
            </Link>
            <Link to="/formations" className="btn-outline flex items-center justify-center gap-2 active:translate-y-1">
              Voir les formations
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 0.6 }}
            className="mt-16 flex items-center space-x-12"
          >
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-brand-dark">+500</span>
              <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Apprenants</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-brand-dark">100%</span>
              <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Pratique</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-brand-dark">Certifié</span>
              <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Diplôme d'état</span>
            </div>
          </motion.div>
        </div>

        {/* Right Preview Area (40%) */}
        <div className="lg:col-span-5 bg-brand-dark/5 p-8 lg:p-12 flex items-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200" 
              className="w-full h-full object-cover" 
              alt="bg"
            />
          </div>
          <div className="grid grid-cols-1 gap-6 w-full relative z-10">
            {COURSES.map((course, idx) => {
              const borderClasses = [
                'border-brand-blue',
                'border-brand-red',
                'border-brand-dark'
              ];
              return (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + (idx * 0.1) }}
                  className={cn(
                    "bg-white p-6 rounded-xl shadow-sm border-l-4 flex items-start space-x-5 group hover:shadow-xl transition-all",
                    borderClasses[idx % borderClasses.length]
                  )}
                >
                  <div className={cn(
                    "p-3 rounded-lg flex-shrink-0 transition-colors",
                    idx === 0 ? "bg-brand-blue/10 text-brand-blue" :
                    idx === 1 ? "bg-brand-red/10 text-brand-red" :
                    "bg-brand-dark/10 text-brand-dark"
                  )}>
                    {idx === 0 && <Award size={24} />}
                    {idx === 1 && <Zap size={24} />}
                    {idx === 2 && <ShieldCheck size={24} />}
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-dark mb-1">{course.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed mb-3">
                      {course.description.split('.')[0]}.
                    </p>
                    <Link to="/formations" className={cn(
                      "text-[10px] uppercase font-bold flex items-center group-hover:gap-2 transition-all",
                      idx === 0 ? "text-brand-blue" :
                      idx === 1 ? "text-brand-red" :
                      "text-brand-dark"
                    )}>
                      Détails <ArrowRight size={12} className="ml-1" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Presentation */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-8">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 space-y-8">
              <span className="badge-red">Notre Mission</span>
              <h2 className="text-4xl font-bold text-brand-dark">Qui sommes-nous ?</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Groupe Codeurs est un centre de formation en informatique dédié à l'apprentissage des compétences numériques. Nous accompagnons les jeunes, étudiants et professionnels dans leur parcours de formation afin de leur permettre d'acquérir des compétences pratiques et recherchées sur le marché du travail.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 bg-brand-bg rounded-xl border-l-4 border-brand-blue">
                  <h4 className="font-bold text-sm mb-1">Impact local</h4>
                  <p className="text-xs text-gray-500">Formation adaptée aux besoins du marché africain.</p>
                </div>
                <div className="p-4 bg-brand-bg rounded-xl border-l-4 border-brand-red">
                  <h4 className="font-bold text-sm mb-1">Qualité</h4>
                  <p className="text-xs text-gray-500">Programmes certifiés et formateurs experts.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800"
                  className="rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                  alt="Students"
                />
                <div className="absolute -inset-4 border-2 border-brand-blue rounded-3xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Divider */}
      <section className="bg-brand-dark py-16 text-white overflow-hidden">
        <div className="container mx-auto px-8 flex flex-wrap justify-between gap-12 font-bold uppercase tracking-[0.2em] text-[10px] opacity-60">
          <span>Expertise Numérique</span>
          <span>Formation Certifiée</span>
          <span>Accompagnement VIP</span>
          <span>Réseau Professionnel</span>
          <span>Excellence Pédagogique</span>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-bg relative">
        <div className="container mx-auto px-8 text-center">
          <div className="max-w-4xl mx-auto bg-white p-12 lg:p-20 rounded-[3rem] shadow-xl relative z-10 border border-gray-100 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-brand-red"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-8 tracking-tight">Inscrivez-vous dès aujourd'hui</h2>
            <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
              Commencez votre formation et développez vos compétences numériques. Rejoignez le centre de référence Groupe Codeurs.
            </p>
            <Link to="/inscription" className="btn-primary py-5 px-12 text-lg rounded-2xl shadow-xl shadow-brand-red/20 active:scale-95">
              M'inscrire maintenant
            </Link>
          </div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl -z-0"></div>
          <div className="absolute top-0 left-0 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl -z-0"></div>
        </div>
      </section>
    </div>
  );
}
