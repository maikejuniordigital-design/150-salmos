import React from 'react';
import { ArrowDown, BookOpen } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToOffer = () => {
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="relative bg-navy-900 text-white overflow-hidden min-h-screen flex items-center justify-center">
      {/* Background Texture Overlay - Imagem substituída conforme prompt: Bíblia aberta, luz suave, revelação */}
      <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1507434965515-61970f2bd7c6?q=80&w=2500&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
      
      {/* Gradiente ajustado para permitir que a 'luz' da imagem passe, mantendo legibilidade */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/90 via-navy-900/75 to-navy-900"></div>

      <div className="container mx-auto px-4 py-16 relative z-10 flex flex-col items-center text-center max-w-4xl">
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gold-500/20 border border-gold-500/40 text-gold-400 text-sm font-semibold uppercase tracking-wider animate-fade-in-up">
          <BookOpen size={16} />
          <span>Lançamento Exclusivo</span>
        </div>

        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white drop-shadow-lg">
          150 Salmos Explicados <br />
          <span className="text-gold-400 italic">Versículo por Versículo</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl leading-relaxed font-light">
          Descubra os segredos espirituais ocultos em cada oração, elimine a confusão e transforme sua vida devocional em uma fonte inesgotável de sabedoria e paz.
        </p>

        <button 
          onClick={scrollToOffer}
          className="group relative bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold py-4 px-10 rounded-full text-lg shadow-[0_0_20px_rgba(197,160,40,0.5)] transition-all transform hover:scale-105 active:scale-95 flex items-center gap-3"
        >
          QUERO ENTENDER OS SALMOS AGORA
          <ArrowDown className="animate-bounce" size={20} />
        </button>

        <div className="mt-12 flex items-center gap-4 text-sm text-gray-400">
          <div className="flex -space-x-2">
            {[1,2,3,4].map(i => (
              <img key={i} src={`https://picsum.photos/40/40?random=${i}`} alt="User" className="w-8 h-8 rounded-full border-2 border-navy-900" />
            ))}
          </div>
          <p>Junte-se a mais de 12.000 leitores abençoados</p>
        </div>
      </div>
    </header>
  );
};

export default Hero;