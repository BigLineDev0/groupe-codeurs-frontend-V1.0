import { useState } from 'react';
import { motion } from 'motion/react';
import { Lock, User, Eye, EyeOff } from 'lucide-react';

interface LoginProps {
  onLogin: () => void;
}

export default function Login({ onLogin }: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo credentials: admin / admin
    if (email === 'admin' && password === 'admin') {
      onLogin();
    } else {
      setError('Identifiants invalides (Essayer admin/admin)');
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg flex items-center justify-center p-8">
      <div className="max-w-md w-full">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-12 rounded-[2rem] shadow-2xl relative overflow-hidden border border-gray-100"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-brand-dark"></div>
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-brand-dark mb-3">Administration</h1>
            <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-gray-400">Accès restreint au personnel</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {error && (
              <div className="bg-red-50 text-brand-red p-4 rounded-xl text-xs font-bold uppercase tracking-widest text-center border border-brand-red/10 animate-pulse">
                {error}
              </div>
            )}
            
            <div className="space-y-2">
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest pl-1">Identifiant</label>
              <div className="relative">
                <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" />
                <input 
                  required
                  type="text" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-brand-bg border-none rounded-xl pl-12 pr-4 py-4 focus:ring-2 focus:ring-brand-blue outline-none transition-all placeholder:text-gray-300" 
                  placeholder="admin" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest pl-1">Mot de passe</label>
              <div className="relative">
                <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" />
                <input 
                  required
                  type={showPassword ? 'text' : 'password'} 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-brand-bg border-none rounded-xl pl-12 pr-12 py-4 focus:ring-2 focus:ring-brand-blue outline-none transition-all placeholder:text-gray-300" 
                  placeholder="••••••••" 
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 hover:text-brand-dark transition-colors"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <button type="submit" className="btn-primary w-full py-4 rounded-xl shadow-xl shadow-brand-red/20 active:translate-y-1">
              Se connecter
            </button>
          </form>
          
          <div className="mt-12 text-center">
            <Link to="/" className="text-[10px] uppercase font-bold tracking-widest text-gray-400 hover:text-brand-dark transition-colors">
              ← Retour au site
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
