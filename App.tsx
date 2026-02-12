import React from 'react';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import TargetAudience from './components/TargetAudience';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import { Book, Heart } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans text-gray-900 antialiased selection:bg-gold-200 selection:text-navy-900">
      {/* Navigation (Simple) */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 py-3 shadow-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2 font-serif font-bold text-navy-900 text-xl">
             <Book className="text-gold-500" />
             <span>Salmos<span className="text-gold-500">Explicados</span></span>
          </div>
          <a 
            href="https://pay.kiwify.com.br/gcZ9e6r"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-navy-900 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-navy-800 transition-colors"
          >
            Comprar Agora
          </a>
        </div>
      </nav>

      {/* Main Sections */}
      <Hero />
      <ProblemSolution />
      
      {/* Target Audience / Qualification */}
      <TargetAudience />
      
      {/* Social Proof - Testimonials */}
      <Testimonials />
      
      {/* Transition Quote */}
      <section className="bg-navy-900 text-white py-16 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-navy-900 via-gold-500 to-navy-900 opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <p className="text-2xl font-serif italic text-gold-200 mb-4">"Lâmpada para os meus pés é a tua palavra, e luz para o meu caminho."</p>
          <p className="text-sm uppercase tracking-widest text-gray-400">Salmos 119:105</p>
        </div>
      </section>

      {/* Offer */}
      <Pricing />
      <FAQ />

      {/* Footer */}
      <footer className="bg-navy-900 text-gray-400 py-12 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-6 text-gold-500">
            <Book size={24} />
          </div>
          <p className="mb-4">&copy; {new Date().getFullYear()} Salmos Explicados. Todos os direitos reservados.</p>
          <p className="text-sm flex items-center justify-center gap-1">
            Feito com <Heart size={12} className="text-red-500" fill="currentColor" /> e Propósito.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;