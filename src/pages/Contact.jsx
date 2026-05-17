import {
  Mail,
  Phone,
  MapPin,
  Send,
  Facebook,
  MessageCircle,
  Linkedin,
  Instagram,
} from "lucide-react";

import Footer from "../components/Footer";
import Header from "../components/Header";

const contactInfo = [
  {
    icon: MapPin,
    title: "Notre Siège",
    value: "Mbour, Sénégal",
    bg: "bg-red-50",
    color: "text-brand-red",
  },
  {
    icon: Phone,
    title: "Téléphone",
    value: "+221 77 123 45 67",
    bg: "bg-sky-50",
    color: "text-sky-500",
  },
  {
    icon: Mail,
    title: "Email",
    value: "contact@groupecodeurs.com",
    bg: "bg-green-50",
    color: "text-green-500",
  },
];

const socials = [
  { icon: Facebook },
  { icon: Linkedin },
  { icon: Instagram },
];

export default function Contact() {
  return (
    <div className="bg-brand-bg min-h-screen">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden pt-28 md:pt-36 pb-20 md:pb-28">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1600')",
          }}
        />

        <div className="absolute inset-0 bg-brand-dark/90" />

        <div className="container-app relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-brand-blue/20 bg-brand-blue/10 px-4 py-2 text-sm font-medium text-brand-blue mb-5">
              Parlons de votre projet
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5">
              Contactez-Nous
            </h1>

            <p className="text-white/70 text-base md:text-lg leading-7 md:leading-8 max-w-2xl">
              Une question sur nos formations ? Un besoin spécifique pour votre
              entreprise ? Nos experts sont à votre écoute pour vous
              accompagner.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-14 md:py-20">
        <div className="container-app">
          <div className="grid gap-8 lg:grid-cols-[340px_1fr] xl:grid-cols-[380px_1fr] items-start">
            {/* LEFT COLUMN */}
            <div className="space-y-6">
              {/* CONTACT CARD */}
              <div className="card rounded-[28px] p-5 sm:p-7 md:p-8">
                <h2 className="text-xl font-bold mb-8">
                  Informations de contact
                </h2>

                <div className="space-y-8">
                  {contactInfo.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="flex gap-4 sm:gap-5 items-start"
                      >
                        <div
                          className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shrink-0 ${item.bg}`}
                        >
                          <Icon className={`w-5 h-5 ${item.color}`} />
                        </div>

                        <div className="min-w-0">
                          <h4 className="font-bold text-brand-dark mb-1">
                            {item.title}
                          </h4>

                          <p className="text-brand-muted break-words leading-7">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="h-px bg-gray-100 my-8"></div>

                {/* SOCIAL */}
                <div>
                  <h4 className="font-bold mb-5">
                    Suivez-nous sur les réseaux
                  </h4>

                  <div className="flex flex-wrap gap-3">
                    {socials.map((social, index) => {
                      const Icon = social.icon;

                      return (
                        <a
                          key={index}
                          href="#"
                          className="w-11 h-11 rounded-2xl bg-brand-bg flex items-center justify-center text-brand-dark hover:bg-brand-red hover:text-white transition-all duration-300"
                        >
                          <Icon className="w-5 h-5" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* SUPPORT CARD */}
              <div className="rounded-[28px] bg-brand-red p-5 sm:p-7 md:p-8 text-white shadow-xl">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>

                  <span className="font-medium">
                    Support disponible
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-4">
                  Besoin d'une réponse rapide ?
                </h3>

                <p className="text-white/80 leading-7 mb-7">
                  Nos conseillers sont disponibles du Lundi au Samedi de 08:00 à
                  18:00.
                </p>

                <button className="w-full sm:w-auto bg-white text-brand-red px-6 py-4 rounded-2xl font-bold inline-flex items-center justify-center gap-3 hover:scale-[1.02] transition-all duration-300">
                  <MessageCircle className="w-5 h-5" />
                  Chatter sur WhatsApp
                </button>
              </div>
            </div>

            {/* FORM CARD */}
            <div className="card rounded-[28px] p-5 sm:p-7 md:p-10">
              <h2 className="text-xl font-bold mb-8">
                Envoyez-nous un message
              </h2>

              <form className="space-y-6">
                {/* ROW */}
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-semibold mb-3">
                      Nom Complet
                    </label>

                    <input
                      type="text"
                      placeholder="Votre prénom et nom"
                      className="w-full h-14 rounded-2xl border border-gray-200 bg-brand-bg px-5 outline-none transition-all focus:border-brand-red"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-3">
                      Adresse Email
                    </label>

                    <input
                      type="email"
                      placeholder="Votre email"
                      className="w-full h-14 rounded-2xl border border-gray-200 bg-brand-bg px-5 outline-none transition-all focus:border-brand-red"
                    />
                  </div>
                </div>

                {/* SUBJECT */}
                <div>
                  <label className="block text-sm font-semibold mb-3">
                    Sujet
                  </label>

                  <select className="w-full h-14 rounded-2xl border border-gray-200 bg-brand-bg px-5 outline-none transition-all focus:border-brand-red">
                    <option>Renseignement Formation</option>
                    <option>Inscription</option>
                    <option>Partenariat</option>
                    <option>Support Technique</option>
                  </select>
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="block text-sm font-semibold mb-3">
                    Votre Message
                  </label>

                  <textarea
                    rows="6"
                    placeholder="Comment pouvons-nous vous aider ?"
                    className="w-full rounded-2xl border border-gray-200 bg-brand-bg p-5 resize-none outline-none transition-all focus:border-brand-red"
                  />
                </div>

                {/* CHECKBOX */}
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1 h-5 w-5 accent-brand-red shrink-0"
                  />

                  <span className="text-sm text-brand-muted leading-6">
                    J'accepte que mes données soient traitées conformément à la
                    politique de confidentialité.
                  </span>
                </label>

                <button
                  type="submit"
                  className="w-full h-14 md:h-16 rounded-2xl bg-brand-red text-white font-bold text-base md:text-lg hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center gap-3"
                >
                  Envoyer le message
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="pb-16 md:pb-24">
        <div className="container-app">
          <div className="overflow-hidden rounded-xl shadow-sm border border-gray-100 h-[320px] sm:h-[420px] md:h-[500px]">
            <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3864.2947987634793!2d-16.966715125786497!3d14.410161981712553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec18a7ee84ebc45%3A0xf520f41906c8f8d6!2sECOLE%20CHEIKH%20MBABA%20SOW%20(%C3%89COLE%202)!5e0!3m2!1sfr!2ssn!4v1779048699531!5m2!1sfr!2ssn" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}