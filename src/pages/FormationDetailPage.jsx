import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import {
  Clock3,
  CalendarDays,
  BadgeCheck,
  GraduationCap,
  BookOpen,
  Wallet,
  CheckCircle2,
  MonitorPlay,
  Users,
  BriefcaseBusiness,
} from "lucide-react";

export default function FormationDetailPage() {
  const modules = [
    "Introduction au développement web",
    "HTML5 / CSS3 / Tailwind CSS",
    "JavaScript Moderne ES6+",
    "React.js & composants",
    "Backend Node.js & Express",
    "API REST & authentification",
    "PostgreSQL & bases de données",
    "Déploiement & DevOps",
    "Projet final professionnel",
  ];

  const careers = [
    "Développeur Frontend",
    "Développeur Backend",
    "Développeur Full-Stack",
    "Intégrateur Web",
    "Freelance React",
    "Développeur JavaScript",
  ];

  return (
    <div className="bg-brand-bg text-brand-dark">
      <Header />
      {/* HERO */}
      <section className="relative overflow-hidden bg-brand-dark">
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/95 to-brand-dark/80" />

        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600')",
          }}
        />

        <div className="container-app relative pt-36 pb-24">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* LEFT */}
            <div>
              <span className="text-brand-blue uppercase mb-10">
                Développement Web
              </span>

              <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-10">
                Développement Web
                <span className="text-brand-red"> Full-Stack</span>
              </h1>

              <p className="text-white/70 text-lg leading-8 mb-10 max-w-2xl">
                Maîtrisez React.js, Node.js, PostgreSQL et les
                architectures web modernes à travers des projets
                concrets orientés entreprise.
              </p>

              <div className="flex flex-wrap gap-5">
                <button className="btn-primary">
                  S'inscrire maintenant
                </button>

                <button className="btn-secondary">
                  Télécharger le programme
                </button>
              </div>
            </div>

            {/* RIGHT CARD */}
            <div className="bg-white rounded-[32px] p-8 shadow-2xl">
              <h3 className="text-2xl font-extrabold mb-8">
                Informations rapides
              </h3>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="card-utility">
                  <Clock3 className="w-7 h-7 text-brand-blue mb-4" />

                  <p className="text-sm text-brand-muted mb-1">
                    Durée
                  </p>

                  <h4 className="font-bold text-lg">
                    6 Mois
                  </h4>
                </div>

                <div className="card-utility">
                  <GraduationCap className="w-7 h-7 text-brand-blue mb-4" />

                  <p className="text-sm text-brand-muted mb-1">
                    Niveau
                  </p>

                  <h4 className="font-bold text-lg">
                    Débutant à Avancé
                  </h4>
                </div>

                <div className="card-utility">
                  <CalendarDays className="w-7 h-7 text-brand-blue mb-4" />

                  <p className="text-sm text-brand-muted mb-1">
                    Horaire
                  </p>

                  <h4 className="font-bold text-lg">
                    Soir & Weekend
                  </h4>
                </div>

                <div className="card-utility">
                  <BadgeCheck className="w-7 h-7 text-brand-blue mb-4" />

                  <p className="text-sm text-brand-muted mb-1">
                    Certification
                  </p>

                  <h4 className="font-bold text-lg">
                    Attestation incluse
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24">
        <div className="container-app">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* TEXT */}
            <div>
              <span className="text-brand-red uppercase mb-5">
                À propos de la formation
              </span>

              <h2 className="text-2xl md:text-3xl font-black mb-8 leading-tight">
                Une formation pensée
                <br />
                pour le marché professionnel
              </h2>

              <p className="text-brand-muted leading-8 mb-6">
                Cette formation vous accompagne étape par étape
                dans l’apprentissage des technologies modernes du
                web.
              </p>

              <p className="text-brand-muted leading-8 mb-6">
                Vous développerez des applications complètes,
                apprendrez les bonnes pratiques professionnelles,
                le travail collaboratif et les architectures
                utilisées en entreprise.
              </p>

              <div className="space-y-4 mt-8">
                {[
                  "Projets réels orientés entreprise",
                  "Accompagnement par des mentors",
                  "Méthodologie agile & Git/Github",
                  "Préparation à l’emploi et freelance",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-brand-red" />

                    <span className="font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* IMAGE */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200"
                alt="Formation"
                className="rounded-[32px] shadow-2xl w-full object-cover"
              />

              <div className="absolute -bottom-8 -left-8 bg-white rounded-3xl p-6 shadow-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-brand-red/10 flex items-center justify-center">
                    <Users className="w-8 h-8 text-brand-red" />
                  </div>

                  <div>
                    <h3 className="text-3xl font-black">
                      100+
                    </h3>

                    <p className="text-brand-muted">
                      Étudiants formés
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMME */}
      <section className="py-24 bg-white">
        <div className="container-app">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-red uppercase mb-5">
              Programme complet
            </span>

            <h2 className="text-2xl md:text-3xl font-black mb-6">
              Ce que vous allez apprendre
            </h2>

            <p className="text-brand-muted leading-8">
              Une progression pédagogique structurée pour vous
              amener du niveau débutant à professionnel.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {modules.map((module, index) => (
              <div
                key={module}
                className="bg-brand-bg rounded-3xl p-7 flex items-start gap-5 border border-gray-100 hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-red text-white flex items-center justify-center font-black text-lg shrink-0">
                  {index + 1}
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">
                    Module {index + 1}
                  </h3>

                  <p className="text-brand-muted">
                    {module}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TARIFS */}
      <section className="py-24">
        <div className="container-app">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* PRICING */}
            <div className="bg-white rounded-[32px] p-10 shadow-xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-brand-red/10 flex items-center justify-center">
                  <Wallet className="w-8 h-8 text-brand-red" />
                </div>

                <div>
                  <h2 className="text-xl md:text-2xl font-black">
                    Tarification
                  </h2>

                  <p className="text-brand-muted">
                    Paiement flexible
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-gray-200 pb-5">
                  <span className="font-medium">
                    Frais d'inscription
                  </span>

                  <span className="text-xl font-black text-brand-red">
                    10 000 FCFA
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-gray-200 pb-5">
                  <span className="font-medium">
                    Mensualité
                  </span>

                  <span className="text-xl font-black text-brand-red">
                    7 500 FCFA
                  </span>
                </div>

                <div className="flex items-center justify-between pb-2">
                  <span className="font-medium">
                    Durée totale
                  </span>

                  <span className="text-xl font-bold">
                    6 mois
                  </span>
                </div>
              </div>

              <button className="btn-primary w-full mt-10 py-4">
                Commencer maintenant
              </button>
            </div>

            {/* HORAIRES */}
            <div className="bg-brand-dark rounded-[32px] p-10 text-white shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
                  <MonitorPlay className="w-8 h-8 text-brand-blue" />
                </div>

                <div>
                  <h2 className="text-3xl font-black">
                    Organisation
                  </h2>

                  <p className="text-white/60">
                    Déroulement des cours
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="font-bold text-xl mb-3">
                    Horaires
                  </h3>

                  <p className="text-white/70 leading-8">
                    Lundi au Vendredi :
                    <br />
                    18h00 - 21h00
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-xl mb-3">
                    Méthodologie
                  </h3>

                  <p className="text-white/70 leading-8">
                    Sessions pratiques, projets réels,
                    challenges techniques et accompagnement
                    personnalisé.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-xl mb-3">
                    Certification
                  </h3>

                  <p className="text-white/70 leading-8">
                    Une attestation professionnelle certifiée
                    vous sera délivrée à la fin de la formation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DÉBOUCHÉS */}
      <section className="py-24 bg-white">
        <div className="container-app">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-red uppercase mb-5">
              Débouchés
            </span>

            <h2 className="text-2xl md:text-3xl font-black mb-6">
              Opportunités de carrière
            </h2>

            <p className="text-brand-muted leading-8">
              Après cette formation, vous pourrez intégrer le
              marché professionnel ou travailler en freelance.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {careers.map((career) => (
              <div
                key={career}
                className="bg-brand-bg rounded-3xl p-8 text-center hover:shadow-lg transition-all"
              >
                <div className="w-16 h-16 rounded-2xl bg-brand-red/10 flex items-center justify-center mx-auto mb-6">
                  <BriefcaseBusiness className="w-8 h-8 text-brand-red" />
                </div>

                <h3 className="font-bold text-lg">
                  {career}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container-app">
          <div className="bg-brand-dark rounded-[40px] px-8 py-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-brand-red/10 rounded-full blur-3xl" />

            <div className="relative max-w-3xl mx-auto">

              <h2 className="text-2xl md:text-4xl font-black text-white leading-tight mb-8">
                Prêt à lancer votre carrière tech ?
              </h2>

              <p className="text-white/70 text-lg leading-8 mb-10">
                Rejoignez des centaines d’étudiants formés
                aux métiers du numérique et construisez votre
                avenir dès aujourd’hui.
              </p>

              <Link to="inscription" className="btn-primary text-base px-10 py-4">
                S'inscrire à la formation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}