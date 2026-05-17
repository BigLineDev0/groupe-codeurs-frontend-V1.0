import Header from "../components/Header";
import Footer from "../components/Footer";
import { COURSES } from '../constants';
import { Link } from "react-router-dom";

import {
  Search,
  Clock3,
  Check,
} from "lucide-react";

const categories = [
  "Toutes les formations",
  "Infomatique Bureautique",
  "Développement Web",
  "Marketing Digital",
  "Infographie",
  "Design UX/UI",
];

function FormationCard({ formation }) {
  return (
    <div className="card overflow-hidden rounded-[30px] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.06)] hover:shadow-[0_16px_40px_rgba(15,23,42,0.12)]">
      <div className="relative h-[230px] overflow-hidden">
        <img
          src={formation.image}
          alt={formation.title}
          className="h-full w-full object-cover"
        />

        <span
          className="absolute left-4 top-4 rounded-full px-3 py-1 text-[11px] font-bold tracking-wide text-white bg-brand-blue"
        >
          {formation.target}
        </span>
      </div>

      <div className="p-6">
        <div className="mb-4 flex items-center gap-2 text-sm font-medium text-brand-blue">
          <Clock3 size={16} />
          <span>{formation.duration}</span>
        </div>

        <h3 className="mb-3 text-[16px] leading-tight font-bold text-brand-dark md:text-[18px]">
          {formation.title}
        </h3>

        <p className="min-h-[96px] text-[15px] leading-7 text-brand-muted">
          {formation.description}
        </p>
        <ul className="space-y-2 mb-8">
            {formation.programme.slice(0, 3).map((p, i) => (
              <li key={i} className="text-xs font-medium text-gray-600 flex items-center gap-2">
                <Check size={12} className="text-brand-blue" /> {p}
              </li>
            ))}
            <li className="text-xs text-brand-red font-bold">+ et plus encore</li>
          </ul>

        <div className="my-6 h-px w-full bg-gray-100" />

        <div className="flex items-center justify-between gap-4">
          <Link to="/formation/detail" className="rounded-2xl border border-gray-200 text-brand-dark hover:bg-brand-dark hover:text-white px-6 py-3 text-sm font-semibold transition-all duration-300 hover:opacity-90 hover:shadow-lg active:scale-95">
            Voir details
          </Link>

          <Link to="/inscription" className="rounded-2xl bg-brand-red px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:opacity-90 hover:shadow-lg active:scale-95">
            S'inscrire
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function FormationsPage() {
  return (
    <div className="bg-brand-bg">
      <Header/>
    <main className="bg-[#F5F6FA]">
      {/* Hero Section */}
      <section className="border-b border-gray-100 bg-white pt-30 pb-10">
        <div className="container-app">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-brand-dark">
                Nos Formations
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-brand-muted">
                Développez les compétences techniques les plus recherchées sur le marché
                africain et international.
              </p>
            </div>

            <div className="relative w-full max-w-md">
              <Search
                size={18}
                className="absolute top-1/2 left-5 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                placeholder="Rechercher une formation..."
                className="h-14 w-full rounded-2xl border border-gray-200 bg-white pl-14 pr-5 text-sm outline-none transition-all duration-300 focus:border-brand-blue"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="mt-10 flex flex-wrap gap-4">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`rounded-full border px-7 py-3 text-sm font-medium transition-all duration-300 ${
                  index === 0
                    ? "border-brand-dark bg-brand-dark text-white shadow-lg shadow-brand-dark/20"
                    : "border-gray-200 bg-white text-brand-dark hover:border-brand-dark"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Formations Grid */}
      <section className="py-14">
        <div className="container-app">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {COURSES.map((formation) => (
              <FormationCard key={formation.id} formation={formation} />
            ))}
          </div>

          {/* Load More */}
          <div className="mt-16 flex justify-center">
            <button className="rounded-full border border-gray-200 bg-white px-10 py-4 text-sm font-semibold text-brand-dark shadow-sm transition-all duration-300 hover:shadow-lg">
              Charger plus de formations
            </button>
          </div>
        </div>
      </section>
    </main>
     <Footer />
  </div>
  );
}
