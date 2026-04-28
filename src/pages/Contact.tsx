import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Facebook, MessageCircle, Clock } from 'lucide-react';

export default function Contact() {
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
            Contactez <span className="text-brand-blue italic">Nous</span>
          </motion.h1>
          <p className="text-white/70 max-w-2xl mx-auto italic">
            Une question ? Un projet ? N'hésitez pas à nous écrire ou à passer nous voir directement à notre centre.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-24 bg-brand-bg">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Info Cards */}
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-brand-blue">
                <div className="w-12 h-12 bg-brand-blue/10 text-brand-blue rounded-lg flex items-center justify-center mb-6">
                  <Phone size={24} />
                </div>
                <h3 className="font-bold mb-2">Téléphone</h3>
                <p className="text-gray-600 font-medium">+229 00 00 00 00</p>
                <p className="text-[10px] uppercase font-bold text-gray-400 mt-2 tracking-widest">Disponible 8h - 18h</p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-brand-red">
                <div className="w-12 h-12 bg-brand-red/10 text-brand-red rounded-lg flex items-center justify-center mb-6">
                  <Mail size={24} />
                </div>
                <h3 className="font-bold mb-2">Email</h3>
                <p className="text-gray-600 font-medium">contact@groupecodeurs.com</p>
                <p className="text-[10px] uppercase font-bold text-gray-400 mt-2 tracking-widest">Réponse sous 24h</p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-brand-dark">
                <div className="w-12 h-12 bg-brand-dark/10 text-brand-dark rounded-lg flex items-center justify-center mb-6">
                  <Clock size={24} />
                </div>
                <h3 className="font-bold mb-2">Horaires</h3>
                <p className="text-gray-600 font-medium">Lundi au Samedi</p>
                <p className="text-[10px] uppercase font-bold text-gray-400 mt-2 tracking-widest">8h à 18h</p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-xl border border-gray-100 h-full relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-brand-red"></div>
                <h2 className="text-3xl font-bold text-brand-dark mb-10">Envoyez-nous un message</h2>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="italic">
                    <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider italic">Votre Nom</label>
                    <input required type="text" className="w-full bg-brand-bg border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-blue outline-none transition-all italic" placeholder="Jean Dupont" />
                  </div>
                  <div className="italic">
                    <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider italic">Votre Email</label>
                    <input required type="email" className="w-full bg-brand-bg border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-blue outline-none transition-all italic" placeholder="jean@email.com" />
                  </div>
                  <div className="md:col-span-2 italic">
                    <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider italic">Sujet</label>
                    <input required type="text" className="w-full bg-brand-bg border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-blue outline-none transition-all italic" placeholder="Information formation Web" />
                  </div>
                  <div className="md:col-span-2 italic">
                    <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider italic">Message</label>
                    <textarea rows={6} className="w-full bg-brand-bg border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-blue outline-none transition-all italic" placeholder="Dites-nous tout..."></textarea>
                  </div>
                  <div className="md:col-span-2 italic">
                    <button type="submit" className="btn-primary py-4 w-full flex items-center justify-center gap-2 italic">
                      Envoyer le message <Send size={18} />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] bg-gray-200 relative italic">
        <div className="absolute inset-0 flex items-center justify-center italic">
          <div className="text-center italic">
            <MapPin size={48} className="text-brand-red mx-auto mb-4 italic" />
            <h3 className="text-2xl font-bold italic">Notre Emplacement</h3>
            <p className="text-gray-500 italic">Cotonou, Bénin — Quartier Fidjrossè</p>
            <div className="mt-4 italic">
                <span className="text-xs bg-white px-4 py-1 rounded-full border border-gray-300 italic">Carte Interactive Google Maps</span>
            </div>
          </div>
        </div>
        {/* Real iframe Google Maps would go here */}
        <div className="absolute inset-0 bg-brand-dark/10 italic"></div>
      </section>
    </div>
  );
}
