import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { COURSES } from '../constants';

export default function Registration() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      // Reset after 5 seconds to show form again (for demo)
      setTimeout(() => setIsSubmitted(false), 8000);
    }, 1500);
  };

  return (
    <div className="pt-20 pb-20 bg-brand-bg min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mt-12 mb-12 italic">
          <h1 className="text-4xl font-display font-bold mb-4 italic">Inscription en ligne</h1>
          <p className="text-gray-600 italic">Prenez la décision qui changera votre avenir. Remplissez le formulaire ci-dessous.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Sidebar Info */}
            <div className="bg-brand-dark text-white p-8 lg:p-12">
              <h3 className="text-xl font-bold mb-6">Pourquoi s'inscrire ?</h3>
              <ul className="space-y-6">
                <li className="flex gap-3">
                  <CheckCircle2 className="text-brand-blue shrink-0" size={20} />
                  <span className="text-sm text-white/70">Accès immédiat aux ressources pédagogiques.</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-brand-blue shrink-0" size={20} />
                  <span className="text-sm text-white/70">Accompagnement par des experts du domaine.</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-brand-blue shrink-0" size={20} />
                  <span className="text-sm text-white/70">Rejoignez une communauté d'apprenants motivés.</span>
                </li>
              </ul>
              
              <div className="mt-20 p-4 border border-white/10 rounded-xl bg-white/5">
                <p className="text-xs text-white/40 uppercase font-bold tracking-widest mb-1">Besoin d'aide ?</p>
                <p className="text-sm font-bold">+229 00 00 00 00</p>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-2 p-8 lg:p-12 relative">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    onSubmit={handleSubmit} 
                    className="space-y-6 italic"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[10px] font-bold text-gray-400 mb-2 uppercase tracking-widest">Nom</label>
                        <input required type="text" className="w-full bg-brand-bg border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-brand-blue outline-none transition-all" placeholder="Votre nom" />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-gray-400 mb-2 uppercase tracking-widest">Prénom</label>
                        <input required type="text" className="w-full bg-brand-bg border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-brand-blue outline-none transition-all" placeholder="Votre prénom" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[10px] font-bold text-gray-400 mb-2 uppercase tracking-widest">Téléphone</label>
                        <input required type="tel" className="w-full bg-brand-bg border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-brand-blue outline-none transition-all" placeholder="+229 00 00 00 00" />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-gray-400 mb-2 uppercase tracking-widest">Email</label>
                        <input required type="email" className="w-full bg-brand-bg border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-brand-blue outline-none transition-all" placeholder="email@exemple.com" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-gray-400 mb-2 uppercase tracking-widest">Formation choisie</label>
                      <select required className="w-full bg-brand-bg border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-brand-blue outline-none transition-all appearance-none cursor-pointer">
                        <option value="">Sélectionnez une formation</option>
                        {COURSES.map(c => <option key={c.id} value={c.id}>{c.title}</option>)}
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-gray-400 mb-2 uppercase tracking-widest">Niveau actuel</label>
                      <select required className="w-full bg-brand-bg border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-brand-blue outline-none transition-all appearance-none cursor-pointer">
                        <option value="debutant">Débutant</option>
                        <option value="intermediaire">Intermédiaire</option>
                        <option value="avance">Avancé</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-gray-400 mb-2 uppercase tracking-widest">Message (Optionnel)</label>
                      <textarea rows={4} className="w-full bg-brand-bg border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-brand-blue outline-none transition-all" placeholder="Avez-vous une question particulière ?"></textarea>
                    </div>

                    <button 
                      disabled={loading}
                      type="submit" 
                      className="btn-primary w-full py-4 flex items-center justify-center gap-2 italic"
                    >
                      {loading ? 'Envoi en cours...' : (
                        <>Envoyer mon inscription <Send size={18} /></>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center p-6 italic"
                  >
                    <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6 italic">
                      <CheckCircle2 size={48} />
                    </div>
                    <h2 className="text-2xl font-bold mb-4 italic">Félicitations !</h2>
                    <p className="text-gray-600 mb-8 italic">
                      Votre inscription a été enregistrée avec succès. Nous vous contacterons bientôt par téléphone ou par email pour finaliser votre dossier.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="text-brand-blue font-bold italic"
                    >
                      Retour au formulaire
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="mt-12 flex items-start gap-4 p-6 bg-white/50 border border-gray-200 rounded-3xl italic">
          <AlertCircle className="text-brand-red shrink-0 italic" />
          <p className="text-sm text-gray-500 leading-relaxed italic">
            En soumettant ce formulaire, vous acceptez d'être recontacté par le Groupe Codeurs pour les besoins de votre inscription. Vos données sont protégées et ne seront jamais partagées.
          </p>
        </div>
      </div>
    </div>
  );
}
