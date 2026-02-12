import React from 'react';
import { Check, X, Users } from 'lucide-react';

const TargetAudience: React.FC = () => {
  const forWhom = [
    "Cristãos que leem a Bíblia mas sentem dificuldade de entender a profundidade dos textos.",
    "Líderes de Células e Pequenos Grupos que precisam de material rico e confiável para ministrar.",
    "Pessoas que enfrentam ansiedade, medo ou luto e buscam conforto real nas Escrituras.",
    "Novos convertidos que desejam começar a vida devocional com o pé direito.",
    "Quem sente que sua oração se tornou repetitiva e busca renovar seu diálogo com Deus."
  ];

  const notForWhom = [
    "Teólogos acadêmicos que buscam exegese técnica avançada do hebraico (este é um guia devocional prático).",
    "Pessoas que procuram uma 'fórmula mágica' ou amuleto da sorte sem o compromisso de ler e meditar.",
    "Quem acredita que já sabe tudo sobre a Bíblia e não está disposto a aprender nada novo."
  ];

  return (
    <section className="py-20 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-navy-50 rounded-full mb-4">
            <Users className="text-navy-900" size={24} />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Este Guia foi escrito para você?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nosso objetivo é transformar vidas através da clareza. Para garantir que este produto atenda às suas expectativas, veja abaixo se ele se encaixa no seu perfil.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* PARA QUEM É */}
          <div className="bg-navy-900 rounded-2xl p-8 md:p-10 shadow-xl text-white relative overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500 opacity-10 rounded-full blur-3xl -mr-10 -mt-10"></div>
            
            <h3 className="text-2xl font-serif font-bold text-gold-400 mb-8 border-b border-gray-700 pb-4">
              SIM, este guia é para você se:
            </h3>
            
            <ul className="space-y-6">
              {forWhom.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="bg-green-500/20 p-1 rounded-full mt-1 shrink-0">
                    <Check size={18} className="text-green-400" strokeWidth={3} />
                  </div>
                  <span className="text-gray-200 font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* PARA QUEM NÃO É */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-10 border border-gray-200 text-gray-800 relative">
             <h3 className="text-2xl font-serif font-bold text-gray-400 mb-8 border-b border-gray-200 pb-4">
              NÃO, este guia não é para:
            </h3>

            <ul className="space-y-6">
              {notForWhom.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 opacity-70">
                  <div className="bg-red-100 p-1 rounded-full mt-1 shrink-0">
                    <X size={18} className="text-red-500" strokeWidth={3} />
                  </div>
                  <span className="text-gray-600 font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-gold-500 text-sm text-gray-600 italic">
              <strong>Nota:</strong> Valorizamos a transparência. Queremos que você faça um investimento que realmente vá usar e amar.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;