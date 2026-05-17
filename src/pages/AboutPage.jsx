import Header from "../components/Header";
import Footer from "../components/Footer";
import aliouImage from "../assets/images/team/aliou.jpg";
import { VALUES } from "../constants";

import {
  Rocket,
  Eye,
  Award,
  HandHeart,
  Lightbulb,
  ShieldCheck

} from "lucide-react";



const teamMembers = [
  {
    name: "Assane KA",
    role: "Fondateur & CEO",
    image: aliouImage,
  },

  {
    name: "Aliou DIALLO",
    role: "Directeur Pédagogique",
    image: aliouImage,
  },

  {
    name: "Mamadou FAYE",
    role: "Lead Full-Stack Dev",
    image: aliouImage,
  },

  {
    name: "Mohamed NDONG",
    role: "UX/UI Design Expert",
    image: aliouImage,
  },
];

export default function AboutPage() {
  return (
    <div className="bg-brand-bg">
      <Header />

      {/* HERO */}
      <section className="relative pt-40 pb-32 overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1600')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-brand-dark/90" />

        <div className="container-app relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Notre Histoire & Notre Engagement
            </h1>

            <p className="text-white/70 text-lg leading-8 max-w-2xl">
              Façonner l'avenir technologique de l'Afrique à travers une
              éducation d'excellence et une innovation constante.
            </p>
          </div>
        </div>
      </section>

      {/* HISTOIRE */}
      <section className="py-28">
        <div className="container-app">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <span className="text-brand-red uppercase mb-5">
                Notre Histoire
              </span>

              <h2 className="text-2xl md:text-3xl font-extrabold text-brand-dark leading-tight mb-8">
                D'une vision locale à un centre d'excellence continental
              </h2>

              <div className="space-y-6 text-brand-muted leading-8">
                <p>
                  Fondé en 2021, Groupe Codeurs est né de la volonté de
                  combler le fossé numérique en Afrique francophone.
                </p>

                <p>
                  Ce qui a commencé comme une petite initiative locale est
                  devenu aujourd'hui un centre de référence pour les métiers du
                  numérique.
                </p>

                <p>
                  Nous avons accompagné des milliers d'étudiants qui occupent
                  désormais des postes clés dans les plus grandes entreprises
                  technologiques.
                </p>

                <p>
                  Chaque ligne de code écrite par nos étudiants est une brique
                  vers la souveraineté technologique du continent africain.
                </p>
              </div>
            </div>

            {/* Right */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200"
                alt=""
                className="rounded-[32px] shadow-2xl object-cover h-[520px] w-full"
              />

              {/* Experience Card */}
              <div className="absolute -bottom-8 right-8 bg-white rounded-3xl shadow-xl px-6 py-5 flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-brand-blue/10 flex items-center justify-center">
                  <span className="text-2xl font-extrabold text-brand-blue">
                    10+
                  </span>
                </div>

                <div>
                  <h4 className="font-bold text-brand-dark">
                    Années d'expérience
                  </h4>

                  <p className="text-sm text-brand-muted">
                    Dans l'éducation tech
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-24 bg-white">
        <div className="container-app">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-brand-bg rounded-[32px] p-10 relative overflow-hidden">
              <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center mb-8">
                <Rocket className="w-7 h-7 text-brand-red" />
              </div>

              <h3 className="text-2xl font-bold text-brand-dark mb-5">
                Notre Mission
              </h3>

              <p className="text-brand-muted leading-8">
                Démocratiser l'accès aux compétences technologiques de pointe en
                offrant des formations immersives et orientées marché.
              </p>

              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-brand-red/5"></div>
            </div>

            {/* Vision */}
            <div className="bg-brand-dark rounded-[32px] p-10 relative overflow-hidden">
              <div className="w-16 h-16 rounded-2xl bg-brand-blue/10 flex items-center justify-center mb-8">
                <Eye className="w-7 h-7 text-brand-blue" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-5">
                Notre Vision
              </h3>

              <p className="text-white/70 leading-8">
                Devenir le premier hub de talents tech en Afrique reconnu pour
                la qualité de ses diplômés et son impact entrepreneurial.
              </p>

              <div className="absolute -top-16 -right-16 w-52 h-52 rounded-full bg-white/5"></div>
            </div>
          </div>
        </div>
      </section>

      {/* VALEURS */}
      <section className="py-28">
        <div className="container-app">
          {/* Heading */}
          <div className="text-center mb-20">
            <span className="text-brand-red uppercase mb-5">
              Ce qui nous définit
            </span>

            <h2 className="text-2xl md:text-3xl font-extrabold text-brand-dark mb-5">
              Nos Valeurs Fondamentales
            </h2>

            <p className="text-brand-muted max-w-2xl mx-auto">
              Ces principes guident chacune de nos actions et notre manière de
              transmettre le savoir.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="bg-white rounded-[28px] p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div
                    className={`w-16 h-16 rounded-2xl ${item.bg} flex items-center justify-center mb-8`}
                  >
                    <Icon className={`w-7 h-7 ${item.color}`} />
                  </div>

                  <h3 className="text-xl font-bold text-brand-dark mb-4">
                    {item.title}
                  </h3>

                  <p className="text-brand-muted leading-7 text-sm">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-28 bg-white">
        <div className="container-app">
          {/* Top */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20">
            <div>
              <span className="text-brand-red uppercase mb-5">
                Notre équipe
              </span>

              <h2 className="text-2xl md:text-3xl font-extrabold text-brand-dark">
                Les visages derrière votre succès
              </h2>
            </div>

            <p className="text-brand-muted max-w-md leading-8">
              Une équipe d'experts passionnés cumulant plusieurs années
              d'expérience dans l'industrie technologique.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="group"
              >
                <div className="overflow-hidden rounded-[28px] mb-5">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-[320px] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <h3 className="text-xl font-bold text-brand-dark mb-2">
                  {member.name}
                </h3>

                <p className="text-brand-red font-medium">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}