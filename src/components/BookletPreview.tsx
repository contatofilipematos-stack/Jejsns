import React, { useState } from 'react';
import { BookOpen, ChevronLeft, ChevronRight, Sparkles, Heart, Star, Cloud } from 'lucide-react';
import { BookletPage } from '../types';

interface BookletPreviewProps {
  coverImageUrl: string;
}

const previewPages: BookletPage[] = [
  {
    pageNumber: 1,
    title: "Querido Deus",
    subTitle: "Capa do Livrinho Ilustrado",
    contentLines: [
      "🌸 Coleção Pequenas Sementes de Fé 🌸",
      "",
      "MINHAS PRIMEIRAS CONVERSAS COM DEUS",
      "",
      "Um guia ilustrado amoroso com orações do dia a dia, o Santo Terço em rimas suaves e lindos desenhos para colorir.",
      "",
      "❤ Ame, Creia e Reze Sorrindo!"
    ],
    illustrationDesc: "Moldura aquarela celeste com anjinhos e estrelas cadentes",
    graphicStyle: "angel"
  },
  {
    pageNumber: 2,
    title: "Minha Oração da Manhã",
    subTitle: "Ao acordar com o coração alegre",
    contentLines: [
      "☀ DEUS PAI:",
      "Obrigado por este lindo dia de sol! Abençoai meus olhinhos para ver o bem, minha boquinha para falar palavras doces, e meus pezinhos para caminhar no vosso amor. Santo Anjo do Senhor, protegei-me hoje. Amém."
    ],
    illustrationDesc: "Sol sorridente sobre nuvens fofas em aquarela",
    graphicStyle: "candle"
  },
  {
    pageNumber: 3,
    title: "O Terço dos Pequeninos",
    subTitle: "Explicado de maneira suave e doce",
    contentLines: [
      "Como rezar o terço com Maria:",
      "✨ Sinal da Cruz: Toque a testa, o peito e os ombros devagar, sentindo o abraço de Jesus.",
      "✨ Continha Branca: Reze 1 Pai Nosso (Agradecendo por nossa linda família).",
      "✨ Continha Azul: Ofereça 1 Ave Maria (Dando um beijinho de amor na Mãezinha do Céu)."
    ],
    illustrationDesc: "Contas do rosário em formato de corações e nuvenzinhas azuis",
    graphicStyle: "rosary"
  },
  {
    pageNumber: 4,
    title: "Coraçãozinho Limpo",
    subTitle: "Preparando a Alma para a Confissão Infantil",
    contentLines: [
      "Perguntinhas doces para fazer com Jesus antes de dormir:",
      "🌸 Guardei meus brinquedos com amor e sem reclamar?",
      "🌸 Ajudei meus amiguinhos na escola?",
      "🌸 Falei a verdade para o papai e a mamãe hoje?",
      "🌸 Rezei para o meu Santo Anjo com carinho?"
    ],
    illustrationDesc: "Um anjinho segurando um coração brilhante de estrelas",
    graphicStyle: "cross"
  },
  {
    pageNumber: 5,
    title: "Atividades e Pintura",
    subTitle: "Brincar e fixar o amor de Deus",
    contentLines: [
      "🎨 O que você vai encontrar no Kit Completo:",
      "• Páginas inteiras de desenhos infantis para colorir",
      "• Ligue os pontos com a pombinha da paz",
      "• Labirinto da ovelhinha perdida voltando ao Bom Pastor",
      "",
      "Colorir o Sagrado ajuda nossas memórias a guardar a fé!"
    ],
    illustrationDesc: "Jesus abraça uma ovelhinha fofa para as crianças pintarem",
    graphicStyle: "dove"
  }
];

export default function BookletPreview({ coverImageUrl }: BookletPreviewProps) {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const nextPage = () => {
    if (currentPageIndex < previewPages.length - 1) {
      setCurrentPageIndex(currentPageIndex + 1);
    }
  };

  const prevPage = () => {
    if (currentPageIndex > 0) {
      setCurrentPageIndex(currentPageIndex - 1);
    }
  };

  const activePage = previewPages[currentPageIndex];

  return (
    <div className="w-full max-w-md mx-auto py-4 font-sans">
      <div className="text-center mb-5">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-sky-pastel-100 text-sky-pastel-700 text-xs font-bold rounded-full border border-sky-pastel-200">
          <BookOpen className="w-3.5 h-3.5" /> DÊ UMA OLHADA NAS PÁGINAS POR DENTRO
        </span>
        <h3 className="text-lg font-bold text-sky-pastel-900 mt-1.5 font-heading">Lúdico, Delicado e de Fácil Leitura</h3>
        <p className="text-xs text-stone-500">Toque ou arraste para folhear o livrinho virtual simulado:</p>
      </div>

      {/* Book Layout Simulator - Light blue, white, feminine look */}
      <div className="relative bg-gradient-to-r from-sky-pastel-100 via-sky-pastel-50 to-sky-pastel-100 p-4 pt-6 pb-9 rounded-3xl shadow-lg border-2 border-sky-pastel-200/80">
        
        {/* Book spine simulation rings (feminine binder style) */}
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-5 bg-gradient-to-r from-white/20 via-sky-pastel-200 to-white/20 z-20 flex flex-col justify-around py-8 pointer-events-none">
          <div className="w-full h-1 bg-sky-pastel-300 rounded"></div>
          <div className="w-full h-1 bg-sky-pastel-300 rounded"></div>
          <div className="w-full h-1 bg-sky-pastel-300 rounded"></div>
          <div className="w-full h-1 bg-sky-pastel-300 rounded"></div>
          <div className="w-full h-1 bg-sky-pastel-300 rounded"></div>
        </div>

        {/* Paper Page */}
        <div className="bg-white min-h-[350px] rounded-2xl shadow-sm border border-sky-pastel-100 p-5 pt-8 flex flex-col justify-between relative overflow-hidden">
          
          {/* Subtle star decorations behind */}
          <div className="absolute top-2 right-2 opacity-15">
            <Star className="w-5 h-5 text-sky-pastel-400 fill-sky-pastel-300" />
          </div>
          <div className="absolute bottom-12 left-2 opacity-15">
            <Cloud className="w-6 h-6 text-sky-pastel-400 fill-sky-pastel-300" />
          </div>

          {/* Golden/Blue border internal frame */}
          <div className="absolute inset-2.5 border border-dashed border-sky-pastel-200 rounded-xl pointer-events-none opacity-60"></div>

          {/* Heading */}
          <div className="z-10 text-center">
            {currentPageIndex === 0 && (
              <div className="mx-auto w-16 h-20 mb-3 bg-sky-pastel-50 border border-sky-pastel-200 rounded-lg shadow-2xs flex items-center justify-center overflow-hidden">
                <img 
                  src={coverImageUrl} 
                  alt="Capa do Livrinho Sementes de Fé" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            )}
            <span className="text-[9px] font-bold text-pink-500 uppercase tracking-wider block font-heading">
              {activePage.subTitle}
            </span>
            <h4 className="text-sm font-bold text-sky-pastel-955 font-heading text-sky-pastel-900 border-b border-dashed border-sky-pastel-200 pb-1 px-3 mt-0.5">
              {activePage.title}
            </h4>
          </div>

          {/* Page Body Text content */}
          <div className="z-10 py-5 px-3 my-auto">
            {activePage.contentLines.map((line, idx) => (
              <p 
                key={idx} 
                className={`text-[11.5px] text-stone-600 leading-relaxed text-center font-sans ${line.trim() === '' ? 'h-2' : ''} ${idx === 2 && currentPageIndex === 0 ? 'text-xs font-bold text-sky-pastel-900' : ''}`}
              >
                {line}
              </p>
            ))}
          </div>

          {/* Bottom illustration indicator description */}
          <div className="z-10 text-center text-[9px] text-sky-pastel-600 bg-sky-pastel-50/70 p-2 rounded-lg border border-sky-pastel-100 flex items-center justify-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-pink-400 fill-pink-300 flex-shrink-0" />
            <span className="font-heading">Versão Física Idealizada: {activePage.illustrationDesc}</span>
          </div>

          {/* Page Number footer */}
          <div className="z-10 flex justify-between items-center text-[8px] font-mono text-stone-400 mt-2 px-1">
            <span>© SEMENTES DE FÉ</span>
            <span className="bg-sky-pastel-100 text-sky-pastel-700 font-bold px-2 py-0.5 rounded-full">Pág. {activePage.pageNumber}</span>
          </div>
        </div>

        {/* Carousel indicators */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-20">
          {previewPages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentPageIndex(idx)}
              className={`w-1.5 h-1.5 rounded-full transition-all ${idx === currentPageIndex ? 'bg-sky-pastel-600 scale-125' : 'bg-sky-pastel-300/40 hover:bg-sky-pastel-300'}`}
              title={`Ver página ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-between items-center mt-3 px-1">
        <button
          onClick={prevPage}
          disabled={currentPageIndex === 0}
          className={`flex items-center gap-1 text-[11px] font-bold py-1.5 px-3 rounded-full border transition ${currentPageIndex === 0 ? 'opacity-30 border-stone-200 text-stone-400' : 'bg-white border-sky-pastel-300 text-sky-pastel-700 hover:bg-sky-pastel-50'}`}
        >
          <ChevronLeft className="w-3.5 h-3.5" /> Anterior
        </button>

        <span className="text-[10px] text-stone-500 font-sans flex items-center gap-1 font-medium">
          <Heart className="w-3 h-3 text-pink-400 fill-pink-300" /> Folheie o PDF
        </span>

        <button
          onClick={nextPage}
          disabled={currentPageIndex === previewPages.length - 1}
          className={`flex items-center gap-1 text-[11px] font-bold py-1.5 px-3.5 rounded-full border transition ${currentPageIndex === previewPages.length - 1 ? 'opacity-30 border-stone-200 text-stone-400' : 'bg-sky-pastel-500 border-sky-pastel-500 text-white hover:bg-sky-pastel-600 shadow-xs'}`}
        >
          Próximo <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
