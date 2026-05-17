import { Award, Code2, Database, HandHeart, Lightbulb, PenTool, ShieldCheck } from "lucide-react";

export const COURSES = [
  {
    id: 'bureautique',
    title: 'Bureautique',
    duration: '3 mois',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
    description: 'Maîtrisez les outils essentiels pour le travail en entreprise : Word, Excel, PowerPoint et Internet.',
    programme: ['Word', 'Excel', 'PowerPoint', 'Internet', 'Impression'],
    price: 'Accessible',
    target: 'Débutants',
    certificate: true
  },
  {
    id: 'infographie',
    title: 'Infographie',
    duration: '3 mois',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800',
    description: 'Apprenez à créer des designs professionnels, des logos et des affiches publicitaires.',
    programme: ['Photoshop', 'Illustrator', 'Création de logos', 'Affiches publicitaires', 'Design graphique'],
    price: 'Accessible',
    target: 'Débutants',
    certificate: true
  },
  {
    id: 'dev-web',
    title: 'Développement Web',
    duration: '6 mois',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
    description: 'Devenez développeur web et créez des sites modernes et responsives de A à Z.',
    programme: ['HTML', 'CSS', 'JavaScript', 'React', 'Projets réels'],
    price: 'Accessible',
    target: 'Débutants',
    certificate: true
  }
];


export const FORMATIONS = [
  {
    icon: PenTool,
    title: "UX/UI Design & Figma",
    desc: "Maîtrisez la conception d'interfaces modernes centrées utilisateur.",
    duration: "12 Semaines",
    level: "Intermédiaire",
    featured: false,
  },

  {
    icon: Code2,
    title: "Développement Web Full-Stack",
    desc: "Devenez développeur React, Node.js et bases de données modernes.",
    duration: "24 Semaines",
    level: "Débutant à Pro",
    featured: true,
  },

  {
    icon: Database,
    title: "Data Science & IA",
    desc: "Apprenez Python, Machine Learning et analyse de données.",
    duration: "20 Semaines",
    level: "Avancé",
    featured: false,
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Binetou Diouf',
    text: "Grâce à Groupe Codeurs, j'ai appris la bureautique et j'ai pu obtenir un emploi dans une entreprise.",
    role: 'Apprenante en Bureautique'
  },
  {
    id: 2,
    name: 'Moussa Sy.',
    text: "La formation en infographie m'a permis de créer mes propres designs et de travailler en freelance.",
    role: 'Apprenant en Infographie'
  },
  {
    id: 3,
    name: 'Fatou Ndiaye',
    text: "J'ai appris le développement web et je peux maintenant créer des sites internet.",
    role: 'Apprenant en Dév Web'
  }
];

export const VALUES = [
  {
    icon: Award,
    title: "Excellence",
    desc: "Nous visons la perfection dans chaque module de formation et chaque projet étudiant.",
    color: "text-brand-red",
    bg: "bg-red-50",
  },

  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "L'agilité est dans notre ADN. Nous adaptons nos programmes aux dernières tendances du marché.",
    color: "text-brand-blue",
    bg: "bg-blue-50",
  },

  {
    icon: ShieldCheck,
    title: "Intégrité",
    desc: "Transparence et honnêteté sont les piliers de notre relation avec nos étudiants.",
    color: "text-green-500",
    bg: "bg-green-50",
  },

  {
    icon: HandHeart,
    title: "Engagement",
    desc: "Nous accompagnons chaque talent jusqu'à son succès professionnel.",
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
];



