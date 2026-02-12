import React from 'react';
import { AlertCircle, CheckCircle2, CloudFog, Sun } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* The Problem */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="order-2 md:order-1">
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden">
               <div className="absolute top-0 right-0 w-24 h-24 bg-red-100 rounded-bl-full opacity-50"></div>
               <h3 className="font-serif text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                 <AlertCircle className="text-red-500" />
                 A Frustração da Leitura Vazia
               </h3>
               <ul className="space-y-4">
                 {[
                   "Você lê, mas sente que não extraiu nada profundo.",
                   "As palavras parecem antigas e desconectadas da sua realidade.",
                   "Você sente que Deus tem uma mensagem, mas ela está 'trancada'.",
                   "Sua oração fica repetitiva e sem vida.",
                   "Você desiste de entender os Salmos mais complexos."
                 ].map((item, idx) => (
                   <li key={idx} className="flex items-start gap-3 text-gray-600">
                     <CloudFog size={20} className="text-gray-400 shrink-0 mt-1" />
                     <span>{item}</span>
                   </li>
                 ))}
               </ul>
            </div>
          </div>
          <div className="order-1 md:order-2 text-center md:text-left">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Você já sentiu que está lendo a Bíblia "no automático"?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Não há nada pior para um cristão do que abrir a Palavra e sentir... nada. 
              Os Salmos são a farmácia da alma, mas muitas vezes lemos como se fosse um jornal. 
              Sem a chave certa, tesouros espirituais permanecem enterrados diante dos seus olhos.
            </p>
          </div>
        </div>

        {/* Transition */}
        <div className="flex justify-center mb-24">
          <div className="h-16 w-1 bg-gradient-to-b from-gray-200 to-gold-400"></div>
        </div>

        {/* The Solution */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
             <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Imagine ter uma luz sobre cada versículo...
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              O e-book <strong className="text-gold-600">150 Salmos Explicados</strong> é exatamente essa luz. 
              Não é um comentário teológico difícil e acadêmico. É um guia devocional, claro e direto, 
              feito para destravar o significado de cada frase e aplicá-lo no seu dia a dia.
            </p>
            <div className="space-y-3">
               {[
                 "Entendimento imediato do contexto",
                 "Aplicação prática para suas lutas diárias",
                 "Renovação da sua linguagem de oração",
                 "Consolo real nos dias de angústia"
               ].map((item, idx) => (
                 <div key={idx} className="flex items-center gap-3">
                   <CheckCircle2 className="text-green-500 shrink-0" size={20} />
                   <span className="font-medium text-gray-700">{item}</span>
                 </div>
               ))}
            </div>
          </div>
          <div className="relative">
             <div className="absolute inset-0 bg-gold-400 blur-3xl opacity-20 rounded-full"></div>
             <img 
               src="https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=2835&auto=format&fit=crop" 
               alt="Bíblia Aberta com Luz" 
               className="relative rounded-lg shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500"
             />
             <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-xl border-l-4 border-gold-500 max-w-xs">
                <div className="flex items-center gap-2 mb-2">
                  <Sun className="text-gold-500" size={20} />
                  <span className="font-bold text-navy-900 text-sm">Clareza Total</span>
                </div>
                <p className="text-xs text-gray-600 italic">"Foi como tirar uma venda dos meus olhos. O Salmo 91 agora faz todo sentido."</p>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProblemSolution;