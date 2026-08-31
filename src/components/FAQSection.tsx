import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "O que eu recebo após a compra?",
      answer: "Você recebe o acesso ao pack com mais de 500 arquivos STL católicos, além dos bônus e do pack de luminárias 3D incluídos na oferta."
    },
    {
      question: "São arquivos físicos ou digitais?",
      answer: "São arquivos digitais. Nada é enviado pelos Correios: você recebe o acesso para baixar os modelos."
    },
    {
      question: "Quantos arquivos STL estão inclusos?",
      answer: "Mais de 500 arquivos STL católicos, além dos modelos do pack de luminárias que entra como bônus."
    },
    {
      question: "Preciso ter uma impressora 3D?",
      answer: "Sim. Os arquivos STL são feitos para serem impressos em uma impressora 3D — sua ou de um serviço de impressão."
    },
    {
      question: "Posso acessar os arquivos depois?",
      answer: "Sim. O acesso é vitalício, então você pode voltar e baixar os modelos quando quiser."
    },
    {
      question: "Como recebo meu acesso?",
      answer: "Após a confirmação do pagamento, você recebe as informações de acesso por e-mail e WhatsApp."
    },
    {
      question: "O pack de luminárias está incluso?",
      answer: "Sim. O pack de luminárias 3D entra como bônus, junto com a coleção de arquivos católicos."
    },
    {
      question: "Existe garantia?",
      answer: "Sim. Você tem 7 dias para conhecer o material, conforme as condições de garantia apresentadas na compra."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-10 px-4 bg-white/60 border-t border-stone-200" id="faq">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center p-2 bg-emerald-100/60 rounded-full mb-3 text-emerald-800">
            <HelpCircle className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black font-heading text-stone-900 tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm mt-1">
            Tire todas as suas dúvidas sobre os arquivos STL e a entrega do material
          </p>
        </div>

        <div className="space-y-3 font-heading">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl border border-stone-200/80 overflow-hidden shadow-xs transition-all duration-200"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-4 text-left flex items-center justify-between gap-4 font-bold text-stone-800 text-sm sm:text-base hover:bg-stone-50/50 transition-colors cursor-pointer"
                >
                  <span className="leading-snug">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-stone-400 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'transform rotate-180 text-emerald-600' : ''
                    }`} 
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-1 text-stone-600 text-xs sm:text-sm leading-relaxed border-t border-stone-100 font-sans animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
