import { useState } from "react";
import { Menu, X, Code2 } from "lucide-react";
import { NavLink, Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "Formations", href: "/formations" },
    { name: "À propos", href: "/a-propos" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md border-b border-gray-100">
      <div className="container-app h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-brand-red flex items-center justify-center shadow-lg">
            <Code2 className="w-5 h-5 text-white" />
          </div>

          <div>
            <h2 className="text-lg font-extrabold text-brand-dark leading-none">
              Groupe Codeurs
            </h2>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) =>
                isActive
                  ? "nav-link nav-link-active"
                  : "nav-link"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Link to="/inscription" className="btn-primary">
            S'inscrire
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-brand-dark"
        >
          {menuOpen ? (
            <X className="w-7 h-7" />
          ) : (
            <Menu className="w-7 h-7" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-6 space-y-5">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className="block text-brand-dark font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}

          <Link
            to="/inscription"
            className="btn-primary w-full block text-center"
          >
            S'inscrire
          </Link>
        </div>
      )}
    </header>
  );
}