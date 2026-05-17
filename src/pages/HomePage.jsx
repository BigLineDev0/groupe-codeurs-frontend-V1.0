import Header from "../components/Header";
import Footer from "../components/Footer";

import {
  Users,
  GraduationCap,
  TrendingUp,
  Clock3,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { FORMATIONS, TESTIMONIALS } from "../constants";

const stats = [
  {
    icon: Users,
    value: "1000+",
    label: "Étudiants formés",
  },
  {
    icon: GraduationCap,
    value: "50+",
    label: "Formations expertes",
  },
  {
    icon: TrendingUp,
    value: "95%",
    label: "Taux de réussite",
  },
];


export default function HomePage() {
  return (
    <div className="bg-brand-bg">
      <Header />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 to-brand-dark/70" />

        {/* Content */}
        <div className="container-app relative z-10 pt-32 pb-40 md:pb-52">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-brand-blue/10 border border-brand-blue/20 px-4 py-2 text-sm font-medium text-brand-blue mb-6">
              Excellence en Tech
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-8">
              Maîtrisez les{" "}
              <span className="text-brand-red">
                Compétences
              </span>{" "}
              de Demain
            </h1>

            <p className="text-white/70 text-base md:text-lg leading-8 max-w-2xl mb-10">
              Rejoignez la nouvelle génération de leaders technologiques africains.
            </p>

            <div className="flex flex-wrap gap-5">
              <button className="btn-primary">
                S'inscrire maintenant
              </button>

              <button className="btn-secondary">
                Voir les formations
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative z-20 -mt-24 md:-mt-32 px-4">
        <div className="container-app">
          <div className="bg-white rounded-[32px] shadow-2xl grid grid-cols-1 md:grid-cols-3 overflow-hidden">
            {stats.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="
              flex flex-col items-center
              py-10 px-6
              border-b md:border-b-0 md:border-r
              border-gray-100
              last:border-r-0
            "
                >
                  <div className="w-16 h-16 rounded-2xl bg-brand-blue/10 flex items-center justify-center mb-5">
                    <Icon className="w-7 h-7 text-brand-blue" />
                  </div>

                  <h3 className="text-2xl font-extrabold text-brand-dark">
                    {item.value}
                  </h3>

                  <p className="text-brand-muted mt-2 text-sm text-center">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-16 md:h-24" />

      {/* FORMATIONS */}
      <section className="py-24">
        <div className="container-app">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-extrabold text-brand-dark leading-tight">
              Formations à la Une
            </h2>

            <p className="section-subtitle">
              Découvrez nos programmes les plus demandés.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FORMATIONS.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className={`rounded-[32px] p-8 transition-all duration-300 hover:-translate-y-2 ${item.featured
                    ? "bg-brand-dark text-white shadow-2xl"
                    : "bg-white border border-gray-100 shadow-sm"
                    }`}
                >
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${item.featured
                      ? "bg-brand-red"
                      : "bg-brand-blue/10"
                      }`}
                  >
                    <Icon
                      className={`w-7 h-7 ${item.featured
                        ? "text-white"
                        : "text-brand-blue"
                        }`}
                    />
                  </div>

                  <h3 className={`text-xl font-bold mb-4 ${item.featured
                    ? "text-white"
                    : "text-brand-dark"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`leading-7 mb-8 ${item.featured
                      ? "text-white/70"
                      : "text-brand-muted"
                      }`}
                  >
                    {item.desc}
                  </p>

                  <div className="space-y-3 mb-10">
                    <div className="flex items-center gap-3 text-sm">
                      <Clock3 className="w-4 h-4" />
                      {item.duration}
                    </div>

                    <div className="flex items-center gap-3 text-sm">
                      <Sparkles className="w-4 h-4" />
                      {item.level}
                    </div>
                  </div>

                  <button
                    className={`w-full py-4 rounded-2xl font-semibold transition-all ${item.featured
                      ? "bg-brand-red text-white"
                      : "border border-gray-200 text-brand-dark hover:bg-brand-dark hover:text-white"
                      }`}
                  >
                    S'inscrire
                  </button>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-14">
            <button className="inline-flex items-center gap-2 text-brand-dark font-semibold hover:text-brand-red">
              Voir tout le catalogue
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-white">
        <div className="container-app">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-extrabold text-brand-dark leading-tight">
              Témoignages de nos apprenants
            </h2>

            <p className="section-subtitle">
              Découvrez les retours de nos anciens apprenants.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((item) => (
              <div
                key={item.name}
                className="card p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-brand-red flex items-center justify-center text-white font-bold">
                    {item.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>

                  <div>
                    <h3 className="font-bold text-md">
                      {item.name}
                    </h3>

                    <p className="text-brand-red text-sm font-medium">
                      {item.role}
                    </p>
                  </div>
                </div>

                <p className="text-brand-muted leading-8">
                  "{item.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container-app">
          <div className="bg-gradient-to-r from-brand-dark to-[#2D2A7A] rounded-[40px] px-8 md:px-20 py-20 text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight mb-6">
              Prêt à transformer votre avenir ?
            </h2>

            <p className="text-white/70 max-w-2xl mx-auto leading-8 mb-10">
              Commencez votre voyage vers une carrière technologique réussie.
            </p>

            <button className="btn-primary">
              Commencer ma formation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}