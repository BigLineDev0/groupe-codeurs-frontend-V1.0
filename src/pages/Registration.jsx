import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  GraduationCap,
  Phone,
  Mail,
  Users,
} from "lucide-react";

import { COURSES } from "../constants";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Registration() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
      }, 8000);
    }, 1500);
  };

  return (
    <div className="bg-brand-bg min-h-screen pt-32">
      <div className="container-app pb-24">
        <Header />
        <div className="max-w-3xl mb-16">
          <span className="text-brand-red uppercase mb-5">
            Inscription
          </span>

          <h1 className="text-3xl md:text-4xl font-black text-brand-dark leading-tight mb-6">
            Commencez votre
            <span className="text-brand-red">
              {" "}
              parcours tech
            </span>
          </h1>

          <p className="text-brand-dark/70 text-lg leading-8">
            Rejoignez Groupe Codeurs et développez des
            compétences professionnelles à travers des
            formations pratiques orientées marché.
          </p>
        </div>

        {/* MAIN CARD */}
        <div className="bg-white rounded-[36px] overflow-hidden shadow-2xl border border-gray-100">
          <div className="grid lg:grid-cols-5">
            {/* SIDEBAR */}
            <div className="lg:col-span-2 bg-brand-dark relative overflow-hidden p-10 lg:p-12">
              {/* DECOR */}
              <div className="absolute top-0 right-0 w-52 h-52 bg-brand-red/10 rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="w-20 h-20 rounded-3xl bg-brand-red flex items-center justify-center mb-8 shadow-lg">
                  <GraduationCap className="w-10 h-10 text-white" />
                </div>

                <h2 className="text-xl font-black text-white leading-tight mb-6">
                  Pourquoi rejoindre
                 
                  Groupe Codeurs ?
                </h2>

                <p className="text-white/70 leading-8 mb-10">
                  Une pédagogie moderne centrée sur la
                  pratique, les projets réels et
                  l’accompagnement professionnel.
                </p>

                {/* FEATURES */}
                <div className="space-y-6">
                  {[
                    "Projets réels orientés entreprise",
                    "Coaching par des mentors expérimentés",
                    "Communauté active d’apprenants",
                    "Préparation au marché de l’emploi",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-4"
                    >
                      <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-brand-blue" />
                      </div>

                      <p className="text-white/80 leading-7">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CONTACT */}
                <div className="mt-12 bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-sm">
                  <h3 className="text-white font-bold mb-5">
                    Besoin d’assistance ?
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-white/70">
                      <Phone className="w-5 h-5 text-brand-red" />

                      <span>+221 77 000 00 00</span>
                    </div>

                    <div className="flex items-center gap-3 text-white/70">
                      <Mail className="w-5 h-5 text-brand-red" />

                      <span>contact@groupecodeurs.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FORM */}
            <div className="lg:col-span-3 p-8 lg:p-12">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    onSubmit={handleSubmit}
                    className="space-y-7"
                  >
                    {/* TITLE */}
                    <div className="mb-10">
                      <h2 className="text-xl font-black text-brand-dark mb-3">
                        Formulaire d’inscription
                      </h2>

                      <p className="text-brand-dark/60 leading-7">
                        Remplissez les informations ci-dessous
                        pour réserver votre place.
                      </p>
                    </div>

                    {/* NAMES */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-brand-dark mb-3">
                          Nom
                        </label>

                        <input
                          type="text"
                          required
                          placeholder="Votre nom"
                          className="w-full h-14 rounded-2xl border border-gray-200 bg-brand-bg px-5 outline-none focus:border-brand-red transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-brand-dark mb-3">
                          Prénom
                        </label>

                        <input
                          type="text"
                          required
                          placeholder="Votre prénom"
                          className="w-full h-14 rounded-2xl border border-gray-200 bg-brand-bg px-5 outline-none focus:border-brand-red transition-all"
                        />
                      </div>
                    </div>

                    {/* CONTACT */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-brand-dark mb-3">
                          Téléphone
                        </label>

                        <input
                          type="tel"
                          required
                          placeholder="+221 77 000 00 00"
                          className="w-full h-14 rounded-2xl border border-gray-200 bg-brand-bg px-5 outline-none focus:border-brand-red transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-brand-dark mb-3">
                          Email
                        </label>

                        <input
                          type="email"
                          required
                          placeholder="email@exemple.com"
                          className="w-full h-14 rounded-2xl border border-gray-200 bg-brand-bg px-5 outline-none focus:border-brand-red transition-all"
                        />
                      </div>
                    </div>

                    {/* FORMATION */}
                    <div>
                      <label className="block text-sm font-bold text-brand-dark mb-3">
                        Formation choisie
                      </label>

                      <select
                        required
                        className="w-full h-14 rounded-2xl border border-gray-200 bg-brand-bg px-5 outline-none focus:border-brand-red transition-all"
                      >
                        <option value="">
                          Sélectionnez une formation
                        </option>

                        {COURSES.map((course) => (
                          <option
                            key={course.id}
                            value={course.id}
                          >
                            {course.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* LEVEL */}
                    <div>
                      <label className="block text-sm font-bold text-brand-dark mb-3">
                        Niveau actuel
                      </label>

                      <select
                        required
                        className="w-full h-14 rounded-2xl border border-gray-200 bg-brand-bg px-5 outline-none focus:border-brand-red transition-all"
                      >
                        <option value="">
                          Sélectionnez votre niveau
                        </option>

                        <option value="debutant">
                          Débutant
                        </option>

                        <option value="intermediaire">
                          Intermédiaire
                        </option>

                        <option value="avance">
                          Avancé
                        </option>
                      </select>
                    </div>

                    {/* MESSAGE */}
                    <div>
                      <label className="block text-sm font-bold text-brand-dark mb-3">
                        Message (optionnel)
                      </label>

                      <textarea
                        rows={5}
                        placeholder="Avez-vous une question particulière ?"
                        className="w-full rounded-2xl border border-gray-200 bg-brand-bg p-5 outline-none focus:border-brand-red transition-all resize-none"
                      />
                    </div>

                    {/* BUTTON */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full py-4 text-base flex items-center justify-center gap-3"
                    >
                      {loading ? (
                        "Envoi en cours..."
                      ) : (
                        <>
                          Envoyer mon inscription
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{
                      opacity: 0,
                      scale: 0.95,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    className="h-full flex flex-col items-center justify-center text-center py-20"
                  >
                    <div className="w-28 h-28 rounded-full bg-green-100 flex items-center justify-center mb-8">
                      <CheckCircle2 className="w-14 h-14 text-green-500" />
                    </div>

                    <h2 className="text-4xl font-black text-brand-dark mb-5">
                      Inscription envoyée !
                    </h2>

                    <p className="text-brand-dark/60 leading-8 max-w-xl mb-10">
                      Votre demande d’inscription a été
                      enregistrée avec succès. Notre équipe
                      vous contactera très bientôt pour la
                      suite du processus.
                    </p>

                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="font-bold text-brand-blue hover:text-brand-red transition-colors"
                    >
                      Retour au formulaire
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* DISCLAIMER */}
        <div className="mt-10 bg-white border border-gray-100 rounded-3xl p-6 flex items-start gap-4 shadow-sm">
          <div className="w-12 h-12 rounded-2xl bg-brand-red/10 flex items-center justify-center shrink-0">
            <AlertCircle className="w-6 h-6 text-brand-red" />
          </div>

          <p className="text-sm text-brand-dark/60 leading-7">
            En soumettant ce formulaire, vous acceptez
            d’être contacté par Groupe Codeurs dans le
            cadre de votre inscription. Vos données restent
            strictement confidentielles.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}