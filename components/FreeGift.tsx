import React from 'react';
import { Download, Gift, Star } from 'lucide-react';

const FreeGift: React.FC = () => {
  const handleDownload = () => {
    // In a real scenario, this would trigger a file download or open a modal
    alert("O download do seu Guia Gratuito iniciará em instantes!");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gold-50 to-white border-y border-gold-200">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="bg-white rounded-2xl shadow-xl border border-gold-100 p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 relative overflow-hidden">
          
          {/* Decorative Background Element */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-gold-400 opacity-10 rounded-full blur-3xl"></div>
          
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900/5 border border-navy-900/10 text-navy-900 text-xs font-bold uppercase tracking-wider mb-4">
              <Gift size={14} className="text-gold-600" />
              Presente Exclusivo para Você
            </div>
            
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Guia de Estudo Rápido dos Salmos
            </h2>
            
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Quer começar a sentir a mudança agora mesmo? Preparamos um material especial com os <strong className="text-gold-600">7 Salmos de Refúgio</strong> explicados de forma resumida para momentos de urgência.
            </p>

            <ul className="mb-8 space-y-2 text-left inline-block">
              {['Leitura em 5 minutos', 'Ideal para momentos de ansiedade', 'Formato PDF leve e prático'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-700 text-sm font-medium">
                  <Star size={14} className="text-gold-500 fill-gold-500" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button 
                onClick={handleDownload}
                className="flex items-center justify-center gap-3 bg-navy-900 hover:bg-navy-800 text-white px-8 py-4 rounded-lg font-bold shadow-lg shadow-navy-900/20 transition-all transform hover:-translate-y-1"
              >
                <Download size={20} />
                BAIXAR GUIA GRATUITO
              </button>
            </div>
            <p className="mt-4 text-xs text-gray-400 italic">
              *Ao baixar, você comprova a qualidade do nosso material completo.
            </p>
          </div>

          {/* Visual Representation */}
          <div className="w-full md:w-1/3 flex justify-center z-10">
            <div className="relative group cursor-pointer" onClick={handleDownload}>
              <div className="absolute inset-0 bg-gold-500 blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-white border-2 border-gray-100 p-2 rounded shadow-2xl transform rotate-3 group-hover:rotate-0 transition-all duration-500">
                <div className="bg-navy-900 h-64 w-48 rounded flex flex-col items-center justify-center text-center p-4 border border-white/10">
                   <div className="w-16 h-16 rounded-full bg-gold-500/20 flex items-center justify-center mb-4 text-gold-400">
                     <Download size={32} />
                   </div>
                   <h3 className="font-serif text-gold-400 text-xl leading-tight mb-2">Guia Rápido</h3>
                   <p className="text-gray-400 text-xs uppercase tracking-widest">Salmos de Refúgio</p>
                   <div className="mt-8 w-12 h-1 bg-gold-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FreeGift;