import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Rocket } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../../lib/utils';

const navLinks = [
  { name: 'Accueil', path: '/' },
  { name: 'À propos', path: '/a-propos' },
  { name: 'Formations', path: '/formations' },
  { name: 'Inscription', path: '/inscription' },
  { name: 'Témoignages', path: '/temoignages' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="bg-brand-dark text-white px-8 py-4 flex justify-between items-center shadow-md sticky top-0 z-50">
      <Link to="/" className="flex items-center space-x-2 group">
        <div className="w-10 h-10 bg-brand-red rounded flex items-center justify-center font-bold text-xl transition-transform group-hover:scale-105">GC</div>
        <span className="text-xl font-bold tracking-tight uppercase">Groupe <span className="text-brand-blue">Codeurs</span></span>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center space-x-8">
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) => cn(
              "nav-link pb-1",
              isActive && "nav-link-active"
            )}
          >
            {link.name}
          </NavLink>
        ))}
        <Link to="/inscription" className="btn-primary">
          S'inscrire
        </Link>
      </div>

      {/* Mobile Toggle */}
      <button 
        className="lg:hidden text-white p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-brand-dark border-t border-white/10 lg:hidden shadow-2xl"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) => cn(
                    "text-sm uppercase font-bold tracking-widest px-4 py-2 rounded-lg transition-colors",
                    isActive ? "bg-brand-blue text-white" : "hover:bg-white/10"
                  )}
                >
                  {link.name}
                </NavLink>
              ))}
              <Link to="/inscription" className="btn-primary text-center py-3">
                S'inscrire
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
