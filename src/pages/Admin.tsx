import { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Download, Trash2, Edit, Eye, Filter, Plus, Users, GraduationCap, Clock } from 'lucide-react';
import { COURSES } from '../constants';

// Mock Data
const INITIAL_REGISTRATIONS = [
  { id: 1, firstName: 'Ahmad', lastName: 'Idriss', phone: '+229 90 00 11 22', course: 'Bureautique', date: '2026-04-15', status: 'Inscrit' },
  { id: 2, firstName: 'Béatrice', lastName: 'Tossou', phone: '+229 97 12 34 56', course: 'Infographie', date: '2026-04-20', status: 'En attente' },
  { id: 3, firstName: 'Clément', lastName: 'Fadé', phone: '+229 66 77 88 99', course: 'Développement Web', date: '2026-04-25', status: 'Inscrit' },
  { id: 4, firstName: 'Désiré', lastName: 'Glele', phone: '+229 61 00 22 33', course: 'Bureautique', date: '2026-04-27', status: 'En attente' },
];

export default function Admin() {
  const [registrations, setRegistrations] = useState(INITIAL_REGISTRATIONS);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCourse, setFilterCourse] = useState('All');

  const filteredData = registrations.filter(reg => {
    const matchesSearch = `${reg.firstName} ${reg.lastName} ${reg.phone}`.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterCourse === 'All' || reg.course === filterCourse;
    return matchesSearch && matchesFilter;
  });

  const handleDelete = (id: number) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet inscrit ?')) {
      setRegistrations(registrations.filter(r => r.id !== id));
    }
  };

  const exportData = () => {
    const csv = [
      ['ID', 'Nom', 'Prénom', 'Téléphone', 'Formation', 'Date', 'Statut'].join(','),
      ...filteredData.map(r => [r.id, r.lastName, r.firstName, r.phone, r.course, r.date, r.status].join(','))
    ].join('\n');
    
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `inscrits-groupe-codeurs-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  return (
    <div className="bg-brand-bg min-h-screen pt-24 pb-12 italic">
      <div className="container mx-auto px-4 italic">
        {/* Header Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 italic">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-6 italic">
            <div className="w-14 h-14 bg-brand-blue/10 text-brand-blue rounded-2xl flex items-center justify-center italic">
              <Users size={28} />
            </div>
            <div>
              <p className="text-gray-400 text-xs font-bold uppercase italic">Total Inscrits</p>
              <h3 className="text-3xl font-bold italic">{registrations.length}</h3>
            </div>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-6 italic">
            <div className="w-14 h-14 bg-brand-red/10 text-brand-red rounded-2xl flex items-center justify-center italic">
              <GraduationCap size={28} />
            </div>
            <div>
              <p className="text-gray-400 text-xs font-bold uppercase italic">Formations Actives</p>
              <h3 className="text-3xl font-bold italic">{COURSES.length}</h3>
            </div>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-6 italic">
            <div className="w-14 h-14 bg-brand-dark/10 text-brand-dark rounded-2xl flex items-center justify-center italic">
              <Clock size={28} />
            </div>
            <div>
              <p className="text-gray-400 text-xs font-bold uppercase italic">Dernière Inscription</p>
              <h3 className="text-xl font-bold italic">Aujourd'hui</h3>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 overflow-hidden italic">
          {/* Toolbar */}
          <div className="p-8 border-bottom border-gray-100 flex flex-col lg:flex-row lg:items-center justify-between gap-6 italic">
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto italic">
              <div className="relative w-full sm:w-80 italic">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 italic" />
                <input 
                  type="text" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Rechercher un inscrit..."
                  className="w-full bg-brand-bg border-none rounded-xl pl-12 pr-4 py-3 outline-none focus:ring-2 focus:ring-brand-blue transition-all italic"
                />
              </div>
              <div className="flex items-center gap-2 bg-brand-bg rounded-xl px-4 py-3 w-full sm:w-auto italic">
                <Filter size={18} className="text-gray-400 italic" />
                <select 
                  value={filterCourse}
                  onChange={(e) => setFilterCourse(e.target.value)}
                  className="bg-transparent border-none outline-none text-sm font-medium italic cursor-pointer"
                >
                  <option value="All">Toutes les formations</option>
                  {COURSES.map(c => <option key={c.id} value={c.title}>{c.title}</option>)}
                </select>
              </div>
            </div>

            <div className="flex items-center gap-4 italic font-bold">
              <button 
                onClick={exportData}
                className="flex items-center gap-2 px-6 py-3 bg-brand-bg rounded-xl hover:bg-gray-200 transition-colors text-sm font-bold italic"
              >
                <Download size={18} /> Exporter CSV
              </button>
              <button className="flex items-center gap-2 btn-primary px-6 py-3 text-sm italic shadow-lg shadow-brand-red/20 font-bold">
                <Plus size={18} /> Ajouter Manuel
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto italic">
            <table className="w-full text-left border-collapse italic">
              <thead>
                <tr className="bg-brand-bg/50 italic">
                  <th className="px-8 py-5 text-xs font-bold text-gray-500 uppercase tracking-wider italic">Inscrit</th>
                  <th className="px-8 py-5 text-xs font-bold text-gray-500 uppercase tracking-wider italic">Contact</th>
                  <th className="px-8 py-5 text-xs font-bold text-gray-500 uppercase tracking-wider italic">Formation</th>
                  <th className="px-8 py-5 text-xs font-bold text-gray-500 uppercase tracking-wider italic">Date</th>
                  <th className="px-8 py-5 text-xs font-bold text-gray-500 uppercase tracking-wider italic">Statut</th>
                  <th className="px-8 py-5 text-xs font-bold text-gray-500 uppercase tracking-wider italic">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 italic">
                {filteredData.length > 0 ? (
                  filteredData.map((reg) => (
                    <motion.tr 
                      key={reg.id} 
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="hover:bg-brand-bg/30 transition-colors italic"
                    >
                      <td className="px-8 py-6 italic">
                        <div className="font-bold text-brand-dark italic">{reg.firstName} {reg.lastName}</div>
                        <div className="text-xs text-gray-400 italic">ID: #{reg.id}</div>
                      </td>
                      <td className="px-8 py-6 text-sm text-gray-600 italic">{reg.phone}</td>
                      <td className="px-8 py-6 italic">
                        <span className="px-3 py-1 bg-brand-blue/10 text-brand-blue text-xs font-bold rounded-full italic uppercase">
                          {reg.course}
                        </span>
                      </td>
                      <td className="px-8 py-6 text-sm text-gray-500 italic">{reg.date}</td>
                      <td className="px-8 py-6 italic">
                        <span className={`flex items-center gap-1.5 text-xs font-bold italic ${
                          reg.status === 'Inscrit' ? 'text-green-500' : 'text-orange-500'
                        }`}>
                          <div className={`w-1.5 h-1.5 rounded-full ${
                             reg.status === 'Inscrit' ? 'bg-green-500' : 'bg-orange-500'
                          } italic`}></div>
                          {reg.status}
                        </span>
                      </td>
                      <td className="px-8 py-6 italic">
                        <div className="flex items-center gap-3 italic">
                          <button className="p-2 text-gray-400 hover:text-brand-blue hover:bg-brand-blue/5 rounded-lg transition-all italic" title="Voir">
                            <Eye size={18} />
                          </button>
                          <button className="p-2 text-gray-400 hover:text-brand-dark hover:bg-gray-100 rounded-lg transition-all italic" title="Modifier">
                            <Edit size={18} />
                          </button>
                          <button 
                            onClick={() => handleDelete(reg.id)}
                            className="p-2 text-gray-400 hover:text-brand-red hover:bg-brand-red/5 rounded-lg transition-all italic" 
                            title="Supprimer"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="px-8 py-20 text-center text-gray-400 italic">
                      Aucun inscrit trouvé pour votre recherche.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Footer Info */}
          <div className="p-8 bg-brand-bg/20 text-xs text-gray-400 border-t border-gray-100 italic">
            Affichage de {filteredData.length} inscrits sur {registrations.length} au total.
          </div>
        </div>
      </div>
    </div>
  );
}
