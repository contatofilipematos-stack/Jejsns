import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ShieldCheck } from 'lucide-react';

export const TESTIMONIAL_IMAGES = [
  {
    id: 1,
    alt: 'Depoimento de Cliente 1',
    url: 'https://iili.io/CyN9qKl.md.jpg',
  },
  {
    id: 2,
    alt: 'Depoimento de Cliente 2',
    url: 'https://iili.io/CyN9FVf.md.jpg',
  },
  {
    id: 3,
    alt: 'Depoimento de Cliente 3',
    url: 'https://iili.io/CyN9KP4.md.jpg',
  },
  {
    id: 4,
    alt: 'Depoimento de Cliente 4',
    url: 'https://iili.io/CyN93oG.md.jpg',
  },
  {
    id: 5,
    alt: 'Depoimento de Cliente 5',
    url: 'https://iili.io/CyN9Bl2.md.jpg',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const totalImages = TESTIMONIAL_IMAGES.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  }, [totalImages]);

  // Transição automática constante (3.5 segundos por imagem)
  useEffect(() => {
    timerRef.current = setInterval(() => {
      nextSlide();
    }, 3500);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [nextSlide]);

  return (
    <div className="w-full max-w-lg mx-auto py-8 px-4 font-sans">
      <div className="text-center mb-6">
        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-emerald-50 text-emerald-700 text-[11px] font-bold rounded-full border border-emerald-100 uppercase tracking-wider font-heading shadow-3xs mb-3">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 fill-emerald-100" /> DEPOIMENTOS REAIS E ESPONTÂNEOS
        </span>
        <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading leading-snug tracking-tight">
          Quem Já Adquiriu Recomenda!
        </h3>
        <p className="text-[12.5px] sm:text-xs text-stone-500 mt-2 font-sans max-w-xs mx-auto leading-relaxed">
          Veja mensagens enviadas por quem já está imprimindo e lucrando com as peças de arte sacra:
        </p>
      </div>

      {/* Carrossel automático sem botões com proporção dinâmica e cantos arredondados */}
      <div className="w-full max-w-md mx-auto overflow-hidden">
        <div className="relative w-full overflow-hidden rounded-2xl sm:rounded-3xl shadow-sm border border-stone-100">
          <div 
            className="flex w-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {TESTIMONIAL_IMAGES.map((img, idx) => (
              <div 
                key={img.id} 
                className="w-full flex-shrink-0 flex items-center justify-center"
              >
                <img
                  src={img.url}
                  alt={img.alt}
                  className="w-full h-auto object-contain select-none block"
                  loading={idx === 0 ? "eager" : "lazy"}
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
