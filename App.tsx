import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import Packages from './components/Packages';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import AIChat from './components/AIChat';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-sand-50 text-slate-900 font-sans selection:bg-sand-200 selection:text-slate-900">
      <Navigation />
      
      <main>
        <Hero />
        <Features />
        <Packages />
        <Gallery />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-serif font-bold">AZURE SANDS</h3>
              <p className="text-slate-400 text-xs uppercase tracking-widest mt-2">Maldives • Est. 2024</p>
            </div>
            
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter size={20} /></a>
            </div>

            <div className="text-right md:text-right text-slate-500 text-sm">
              <p>&copy; {new Date().getFullYear()} Azure Sands Resorts.</p>
              <p className="mt-1 text-xs">Designed by Gemini Senior Engineer.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* AI Concierge Widget */}
      <AIChat />
    </div>
  );
};

export default App;