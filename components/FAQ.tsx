import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      q: "Como vou receber o material?",
      a: "Assim que o pagamento for confirmado, você receberá um e-mail com o link para baixar o E-book e todos os bônus imediatamente."
    },
    {
      q: "O material é católico ou evangélico?",
      a: "O guia é estritamente bíblico, focado no texto original dos Salmos e sua aplicação devocional. Serve para qualquer cristão que ama a Palavra de Deus."
    },
    {
      q: "Posso ler no celular?",
      a: "Sim! O arquivo PDF é formatado para se adaptar perfeitamente a telas de celulares, tablets e computadores, permitindo leitura confortável em qualquer lugar."
    },
    {
      q: "E se eu não gostar?",
      a: "Você tem 7 dias de garantia total. Basta nos enviar um e-mail e devolvemos seu dinheiro integralmente."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-serif text-3xl font-bold text-center text-navy-900 mb-12">
          Perguntas Frequentes
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg border border-gray-200 overflow-hidden cursor-pointer transition-all hover:border-gold-400"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="p-5 flex justify-between items-center bg-white">
                <h3 className="font-bold text-gray-800">{faq.q}</h3>
                {openIndex === index ? <ChevronUp className="text-gold-500" /> : <ChevronDown className="text-gray-400" />}
              </div>
              {openIndex === index && (
                <div className="p-5 pt-0 text-gray-600 bg-white animate-fade-in">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;