import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Mariana Souza",
      role: "Mãe e Dona de Casa",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
      text: "Eu lia os Salmos há 20 anos e nunca tinha enxergado a profundidade que esse guia me mostrou. É como se eu estivesse lendo pela primeira vez. O Salmo 91 ganhou uma nova cor na minha vida e trouxe paz para minha casa."
    },
    {
      name: "Pr. Ricardo Mendes",
      role: "Líder de Pequenos Grupos",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop",
      text: "Minhas ministrações mudaram completamente. O material é teologicamente seguro, mas com uma linguagem que toca o coração. Uso toda semana para preparar os estudos da célula. Recomendo de olhos fechados."
    },
    {
      name: "Ana Beatriz",
      role: "Estudante Universitária",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop",
      text: "Estava passando por uma crise de ansiedade muito forte e não conseguia orar. A explicação do Salmo 40 foi o remédio que minha alma precisava. Aprendi a transformar minha dor em oração através deste guia."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-gold-600 font-bold tracking-widest text-sm uppercase mb-2 block">
            Histórias Reais
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-navy-900 mb-6">
            Vidas Transformadas pela Palavra
          </h2>
          <div className="w-24 h-1 bg-gold-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 text-gold-200 fill-gold-100" size={40} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-gold-500 fill-gold-500" />
                ))}
              </div>

              <p className="text-gray-600 italic mb-8 leading-relaxed relative z-10">
                "{t.text}"
              </p>

              <div className="flex items-center gap-4 mt-auto border-t border-gray-100 pt-6">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-gold-400"
                />
                <div>
                  <h4 className="font-bold text-navy-900 text-sm">{t.name}</h4>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;