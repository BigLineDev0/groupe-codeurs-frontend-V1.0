import { Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import WhatsAppButton from './components/common/WhatsAppButton';
import ScrollToTop from './components/common/ScrollToTop';

// Pages

import Registration from './pages/Registration';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import Login from './pages/Login';
import HomePage from './pages/HomePage';
import FormationPage from './pages/FormationPage';
import Header from './components/Header';
import AboutPage from './pages/AboutPage';
import FormationDetailPage from './pages/FormationDetailPage';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/a-propos" element={<AboutPage />} />
          <Route path="/formations" element={<FormationPage />} />
          <Route path="/formation/detail" element={<FormationDetailPage />} />
          <Route path="/inscription" element={<Registration />} />
          <Route path="/temoignages" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login onLogin={() => setIsAuthenticated(true)} />} />
          <Route 
            path="/admin" 
            element={isAuthenticated ? <Admin /> : <Navigate to="/login" />} 
          />
        </Routes>
      </main>
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
}
