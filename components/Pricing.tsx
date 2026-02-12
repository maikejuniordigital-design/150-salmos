import React from 'react';
import { Check, ShieldCheck, ArrowRight } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="oferta" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-900 mb-4">
            Seu Investimento Espiritual
          </h2>
          <p className="text-lg text-gray-600">
            Quanto vale ter clareza na voz de Deus através dos Salmos?
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 relative">
           {/* Ribbon */}
           <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-8 py-2 transform rotate-45 translate-x-8 translate-y-4 shadow-md">
             OFERTA RELÂMPAGO
           </div>

           <div className="grid md:grid-cols-2">
             <div className="p-10 bg-navy-900 text-white flex flex-col justify-center">
                <h3 className="font-serif text-2xl mb-6 text-gold-400">O que você recebe:</h3>
                <ul className="space-y-4">
                  {[
                    "E-book 150 Salmos Explicados (PDF)",
                    "Guia de Oração Diária (Bônus)",
                    "Acesso Imediato via E-mail",
                    "Leitura Otimizada para Celular",
                    "Mapa Mental dos Temas (Bônus)",
                    "Atualizações Vitalícias"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-200">
                      <div className="bg-gold-500/20 p-1 rounded-full">
                        <Check size={14} className="text-gold-400" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
             </div>

             <div className="p-10 flex flex-col items-center justify-center bg-gray-50">
               <span className="text-gray-500 line-through text-lg mb-2">De R$ 97,00</span>
               <div className="flex items-baseline gap-1 mb-2">
                 <span className="text-2xl font-bold text-navy-900">Por apenas</span>
               </div>
               <div className="text-6xl font-bold text-navy-900 mb-2 tracking-tight">
                 R$ 27<span className="text-2xl">,00</span>
               </div>
               <span className="text-green-600 font-bold bg-green-100 px-3 py-1 rounded-full text-sm mb-8">
                 Pagamento Único
               </span>

               <a 
                 href="https://pay.kiwify.com.br/gcZ9e6r"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg text-lg shadow-lg shadow-green-600/30 transition-all transform hover:scale-105 mb-4 flex justify-center items-center gap-2 group cursor-pointer"
               >
                 SIM! QUERO ENTENDER CADA VERSÍCULO
                 <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
               </a>
               
               <p className="text-xs text-gray-500 text-center flex items-center justify-center gap-1">
                 <ShieldCheck size={14} /> Compra 100% Segura e Criptografada
               </p>
             </div>
           </div>
        </div>

        {/* Guarantee */}
        <div className="mt-12 bg-white border-2 border-dashed border-gray-300 rounded-xl p-6 flex flex-col md:flex-row items-center gap-6 max-w-2xl mx-auto">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/2822/2822557.png" 
            alt="Garantia" 
            className="w-20 h-20 opacity-80" 
          />
          <div className="text-center md:text-left">
            <h4 className="font-bold text-navy-900 text-xl mb-2">Garantia Incondicional de 7 Dias</h4>
            <p className="text-sm text-gray-600">
              Se você sentir que este guia não trouxe clareza espiritual para sua vida, devolvemos 100% do seu dinheiro. Sem perguntas, sem letras miúdas. O risco é todo nosso.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;