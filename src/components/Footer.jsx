import {
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Mail,
  Twitter,
  Code2,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-20 pb-8">
      <div className="container-app">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-14 border-b border-white/10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-brand-red flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>

              <h3 className="text-xl font-bold text-white">
                Groupe Codeurs
              </h3>
            </div>

            <p className="text-white/70 text-sm leading-7">
              Le centre de formation d'excellence pour les métiers du numérique
              à Mbour.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3 mt-6">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <button
                  key={index}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-red transition-all"
                >
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-5">
              Liens rapides
            </h4>

            <ul className="space-y-3">
              {[
                "Accueil",
                "Nos formations",
                "À propos",
                "Témoignages",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Formations */}
          <div>
            <h4 className="text-lg font-bold text-white mb-5">
              Formations
            </h4>

            <ul className="space-y-3">
              {[
                "Développement Web",
                "UX/UI Design",
                "Informatique Bureautique",
                "Marketing Digital",
                "Infographie",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-white mb-5">
              Contact
            </h4>

            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-brand-red mt-0.5" />
                <p className="text-white/70 text-sm">
                  Mbour, Sénégal
                </p>
              </div>

              <div className="flex gap-3">
                <Phone className="w-5 h-5 text-brand-red" />
                <p className="text-white/70 text-sm">
                  +221 77 123 45 67
                </p>
              </div>

              <div className="flex gap-3">
                <Mail className="w-5 h-5 text-brand-red" />
                <p className="text-white/70 text-sm">
                  contact@groupecodeurs.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            © 2026 Groupe Codeurs. Tous droits réservés.
          </p>

          <div className="flex gap-6">
            <a href="#" className="text-white/50 text-sm hover:text-white">
              Conditions d'utilisation
            </a>

            <a href="#" className="text-white/50 text-sm hover:text-white">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}