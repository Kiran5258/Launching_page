import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const LegalLayout = ({ title, children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-indigo-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center gap-2 outline-none">
              <img src={logo} alt="Gigiman Logo" className="h-10 sm:h-12 w-auto object-contain" />
            </Link>
            
            <button 
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors font-medium text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
              {title}
            </h1>
            
            <div className="prose prose-invert prose-indigo max-w-none bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
              {children}
            </div>
            
            <div className="mt-12 text-center text-slate-500 text-sm">
              © {new Date().getFullYear()} Gigiman Inc. All rights reserved.
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default LegalLayout;
