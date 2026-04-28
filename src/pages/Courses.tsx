import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Clock, BookOpen, GraduationCap, ArrowRight, Check } from 'lucide-react';
import { COURSES } from '../constants';
import { cn } from '../lib/utils';

export default function Courses() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-brand-dark text-white py-24">
        <div className="container mx-auto px-4 text-center italic">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6 italic"
          >
            Nos <span className="text-brand-blue italic">Formations</span>
          </motion.h1>
          <p className="text-white/70 max-w-2xl mx-auto italic">
            Des programmes complets, pratiques et adaptés à tous les niveaux pour vous lancer dans le monde du numérique.
          </p>
        </div>
      </section>

      {/* Courses List */}
      <section className="py-24 bg-brand-bg">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COURSES.map((course, idx) => {
              const borderColors = ['border-brand-blue', 'border-brand-red', 'border-brand-dark'];
              return (
                <motion.div 
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={cn(
                    "bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border-l-4",
                    borderColors[idx % 3]
                  )}
                >
                  <div className="h-48 overflow-hidden">
                    <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-brand-dark">{course.title}</h3>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 bg-gray-100 px-2 py-1 rounded">
                        {course.duration}
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                      {course.description}
                    </p>
                    <ul className="space-y-2 mb-8">
                      {course.programme.slice(0, 3).map((p, i) => (
                        <li key={i} className="text-xs font-medium text-gray-600 flex items-center gap-2">
                          <Check size={12} className="text-brand-blue" /> {p}
                        </li>
                      ))}
                      <li className="text-xs text-brand-red font-bold">+ et plus encore</li>
                    </ul>
                    <Link to="/inscription" className="btn-primary w-full block text-center">
                      M'inscrire
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Info Banner */}
      <section className="py-20 bg-brand-dark text-white">
        <div className="container mx-auto px-4 text-center italic">
          <h3 className="text-2xl font-bold mb-6 italic">Vous avez des questions sur nos programmes ?</h3>
          <Link to="/contact" className="btn-secondary italic">
            Contactez-nous
          </Link>
        </div>
      </section>
    </div>
  );
}
