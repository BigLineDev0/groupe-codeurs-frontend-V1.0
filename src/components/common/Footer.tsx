import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Send, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 px-8 py-4 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase font-bold tracking-widest text-gray-400 gap-4">
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 text-center md:text-left">
        <span>CONTACT: +221 33 800 00 00</span>
        <span>EMAIL: contact@groupecodeurs.com</span>
        <span>ADRESSE: Dakar, Plateau</span>
      </div>
      <div className="text-center md:text-right">
        © {new Date().getFullYear()} GROUPE CODEURS — TOUS DROITS RÉSERVÉS
      </div>
    </footer>
  );
}
