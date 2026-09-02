import React, { useState, useEffect, useRef } from 'react';
import { 
  Check, 
  Sparkles, 
  Lock, 
  Gift, 
  ChevronRight, 
  ChevronDown, 
  Clock, 
  Printer,
  ShieldCheck,
  Award,
  FileText,
  CheckCircle2
} from 'lucide-react';
import VSLPlayer from './components/VSLPlayer';
import BookletCarousel from './components/BookletCarousel';
import Testimonials from './components/Testimonials';
import { Product } from './types';

// New high-converting bonus booklets
const BONUS_MISSA_PATH = "https://iili.io/Cyj1LoF.md.jpg";
const BONUS_DEC_PATH = "https://iili.io/Cyj1QMg.md.jpg";

// Single product definition - Oferta R$ 10
const mainProduct: Product = {
  id: 'completo',
  name: 'PACOTE COMPLETO COM BÔNUS',
  badge: 'MAIS ESCOLHIDO',
  imageUrl: 'https://iili.io/CyOf57f.jpg',
  price: 10.00,
  originalPrice: 19.90,
  description: 'Acesso vitalício completo com arquivos prontos para impressão e os 2 bônus exclusivos.',
  features: [
    'Lembrancinha de fé pronta para imprimir',
    'Bônus 1: Lembrancinha Setembro Amarelo',
    'Bônus 2: Lembrancinha de Jesus',
    'Envio imediato no seu WhatsApp e e-mail',
    'Licença para impressão e uso comercial',
    'Acesso vitalício aos arquivos',
    'Garantia incondicional de 7 dias'
  ],
  ctaText: 'QUERO MEU ACESSO AGORA',
  checkoutUrl: 'https://pay.lowify.com.br/checkout?product_id=qc6DQ9'
};

function HeroCTALimitedOffer({ onCTAClick }: { onCTAClick: () => void }) {
  const [timeLeft, setTimeLeft] = useState(12 * 60 + 38);

  useEffect(() => {
    const savedTime = localStorage.getItem('seed_vsl_timer_v2');
    let initialTime = 12 * 60 + 38;
    if (savedTime) {
      const parsed = parseInt(savedTime, 10);
      if (!isNaN(parsed) && parsed > 0) {
        initialTime = parsed;
      }
    }
    setTimeLeft(initialTime);

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          return 12 * 60 + 38;
        }
        const nextVal = prev - 1;
        localStorage.setItem('seed_vsl_timer_v2', nextVal.toString());
        return nextVal;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto px-1 sm:px-0 mt-2">
      <div className="inline-flex items-center gap-2 px-6 py-2 bg-[#fff1f2] border border-[#fecdd3] rounded-full text-[#d11270] font-sans font-semibold text-[11px] sm:text-xs tracking-wider uppercase mb-4 shadow-3xs">
        <Clock className="w-4 h-4 text-[#e11d48] animate-pulse" />
        <span>Oferta por tempo limitado: <strong className="font-extrabold">{formatTime(timeLeft)}</strong></span>
      </div>

      <button
        onClick={() => onCTAClick()}
        className="w-full bg-[#e5007d] hover:bg-[#c40068] active:scale-97 text-white font-heading rounded-[2rem] sm:rounded-[2.5rem] py-4 px-2 xs:px-4 shadow-[0_12px_28px_rgba(229,0,125,0.28)] hover:shadow-[0_14px_32px_rgba(229,0,125,0.35)] transition-all duration-200 cursor-pointer text-center relative overflow-hidden group mb-4.5 animate-pulse-cta"
      >
        <div className="flex flex-col items-center justify-center leading-tight">
          <span className="text-[13px] xs:text-base sm:text-lg font-black uppercase tracking-tight flex items-center justify-center gap-1 sm:gap-1.5 font-heading whitespace-nowrap">
            Quero este material agora <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[3] flex-shrink-0" />
          </span>
          <span className="text-[9.5px] sm:text-[10px] font-bold tracking-widest uppercase text-pink-100 mt-1 opacity-90 whitespace-nowrap">
            Acesso vitalício e imediato
          </span>
        </div>
      </button>

      <div className="flex items-center justify-center gap-5 select-none font-sans opacity-95">
        <div className="flex items-center gap-1.5">
          <Printer className="w-4 h-4 text-pink-500 stroke-[2.2]" />
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-stone-500">
            Imprima e encante
          </span>
        </div>
        <div className="w-[1px] h-3 bg-stone-200"></div>
        <div className="flex items-center gap-1.5">
          <Lock className="w-4 h-4 text-pink-500 stroke-[2.2]" />
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-stone-500">
            Compra 100% segura
          </span>
        </div>
      </div>
    </div>
  );
}

function SectionCTA({ onCTAClick }: { onCTAClick: () => void }) {
  return (
    <div className="flex flex-col items-center w-full max-w-sm sm:max-w-md mx-auto px-4 sm:px-0 mt-6 mb-2">
      <button
        onClick={() => onCTAClick()}
        className="w-full bg-[#e5007d] hover:bg-[#c40068] active:scale-97 text-white font-heading rounded-[2rem] sm:rounded-[2.5rem] py-4 px-2 xs:px-4 shadow-[0_12px_28px_rgba(229,0,125,0.28)] hover:shadow-[0_14px_32px_rgba(229,0,125,0.35)] transition-all duration-200 cursor-pointer text-center relative overflow-hidden group animate-pulse-cta"
      >
        <div className="flex flex-col items-center justify-center leading-tight">
          <span className="text-[13px] xs:text-base sm:text-lg font-black uppercase tracking-tight flex items-center justify-center gap-1 sm:gap-1.5 font-heading whitespace-nowrap">
            Quero este material agora <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[3] flex-shrink-0" />
          </span>
          <span className="text-[9.5px] sm:text-[10px] font-bold tracking-widest uppercase text-pink-100 mt-1 opacity-90 whitespace-nowrap">
            Acesso vitalício e imediato
          </span>
        </div>
      </button>
    </div>
  );
}

export default function App() {
  const [showStickyBtn, setShowStickyBtn] = useState(false);
  const [openGuaranteeFaq, setOpenGuaranteeFaq] = useState<number | null>(null);

  const hasFiredViewContent = useRef(false);

  useEffect(() => {
    if (!hasFiredViewContent.current) {
      hasFiredViewContent.current = true;
      if (typeof (window as any).fbq === 'function') {
        try {
          (window as any).fbq('track', 'ViewContent', {
            content_ids: ['completo'],
            content_type: 'product',
            value: 10,
            currency: 'BRL'
          });
        } catch (e) {
          console.error("Erro ao disparar Meta Pixel ViewContent:", e);
        }
      }
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowStickyBtn(true);
      } else {
        setShowStickyBtn(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Protection against downloading images, right click, drag & drop, and inspect shortcuts
  useEffect(() => {
    const preventContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    const preventDragStart = (e: DragEvent) => {
      e.preventDefault();
      return false;
    };

    const preventKeyShortcuts = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey || e.metaKey) && 
        ['s', 'S', 'u', 'U', 'i', 'I', 'c', 'C', 'p', 'P'].includes(e.key)
      ) {
        e.preventDefault();
      }
      if (e.key === 'F12') {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', preventContextMenu);
    document.addEventListener('dragstart', preventDragStart);
    document.addEventListener('keydown', preventKeyShortcuts);

    return () => {
      document.removeEventListener('contextmenu', preventContextMenu);
      document.removeEventListener('dragstart', preventDragStart);
      document.removeEventListener('keydown', preventKeyShortcuts);
    };
  }, []);

  const buildUrlWithTracking = (baseUrl: string): string => {
    try {
      const urlObj = new URL(baseUrl);
      const trackerParams: Record<string, string> = {};

      // 1. Capture every search param from the current URL
      const currentParams = new URLSearchParams(window.location.search);
      currentParams.forEach((val, key) => {
        if (val && val !== 'undefined' && val !== 'null' && val.trim() !== '') {
          trackerParams[key] = val;
        }
      });

      // 2. Capture all tracking and UTMify keys from LocalStorage
      try {
        for (let i = 0; i < localStorage.length; i++) {
          const rawKey = localStorage.key(i);
          if (rawKey) {
            const val = localStorage.getItem(rawKey);
            if (val && val !== 'undefined' && val !== 'null' && val.trim() !== '') {
              const lower = rawKey.toLowerCase();
              if (
                lower.startsWith('utm_') ||
                lower === 'src' ||
                lower === 'sck' ||
                lower.startsWith('subid') ||
                lower === 'fbclid' ||
                lower === 'gclid' ||
                lower === 'ttclid' ||
                lower === 'xcod' ||
                lower === 'h_src'
              ) {
                if (!trackerParams[rawKey]) {
                  trackerParams[rawKey] = val;
                }
              }

              // Parse JSON stored by UTMify or lead tracking scripts
              if (lower.includes('utmify') || lower.includes('lead') || lower.includes('tracking')) {
                try {
                  const parsed = JSON.parse(val);
                  if (typeof parsed === 'object' && parsed !== null) {
                    Object.keys(parsed).forEach((k) => {
                      const paramVal = parsed[k];
                      if (paramVal && typeof paramVal === 'string' && !trackerParams[k]) {
                        trackerParams[k] = paramVal;
                      }
                    });
                  }
                } catch {
                  // Ignore non-JSON
                }
              }
            }
          }
        }
      } catch (e) {
        console.error("Erro ao ler LocalStorage dinamicamente:", e);
      }

      // 3. Capture all tracking cookies (UTMify, Meta, Google, etc.)
      try {
        const cookies = document.cookie.split(';');
        cookies.forEach((c) => {
          const [rawK, rawV] = c.trim().split('=');
          if (rawK && rawV) {
            const key = rawK.trim();
            const val = decodeURIComponent(rawV.trim());
            const lower = key.toLowerCase();
            if (
              lower.startsWith('utm_') ||
              lower === 'src' ||
              lower === 'sck' ||
              lower.startsWith('subid') ||
              lower === 'fbclid' ||
              lower === 'xcod' ||
              lower.startsWith('_utmify')
            ) {
              if (!trackerParams[key]) {
                trackerParams[key] = val;
              }
            }
          }
        });
      } catch (e) {
        // Ignore cookie parsing error
      }

      // 4. Capture any tracking globals from window (e.g. window.utmify)
      try {
        if ((window as any).utmify && typeof (window as any).utmify === 'object') {
          const u = (window as any).utmify;
          Object.keys(u).forEach((k) => {
            if (typeof u[k] === 'string' && u[k] && !trackerParams[k]) {
              trackerParams[k] = u[k];
            }
          });
        }
      } catch (e) {
        // Ignore window global error
      }

      // 5. Append all parameters to checkout URL
      Object.keys(trackerParams).forEach((key) => {
        urlObj.searchParams.set(key, trackerParams[key]);
      });

      return urlObj.toString();
    } catch (e) {
      console.error("Erro geral ao processar rastreamento de URLs:", e);
      return baseUrl;
    }
  };

  const handleBuyClick = () => {
    // 1. Meta Pixel InitiateCheckout Event
    if (typeof (window as any).fbq === 'function') {
      try {
        (window as any).fbq('track', 'InitiateCheckout', {
          content_name: 'Pacote Completo Lembrancinhas de Fé',
          content_ids: ['completo'],
          content_type: 'product',
          value: 10.00,
          currency: 'BRL'
        });
      } catch (e) {
        console.error("Erro ao disparar Meta Pixel InitiateCheckout:", e);
      }
    }

    // 2. UTMify / Lead tracker custom InitiateCheckout trigger
    try {
      if (typeof (window as any).utmify?.track === 'function') {
        (window as any).utmify.track('InitiateCheckout', {
          value: 10.00,
          currency: 'BRL'
        });
      }
    } catch (e) {
      // Ignore utmify custom event errors
    }

    // 3. Build fully tracked destination URL and redirect
    const finalUrl = buildUrlWithTracking(mainProduct.checkoutUrl || 'https://pay.lowify.com.br/checkout?product_id=qc6DQ9');
    window.location.href = finalUrl;
  };

  const scrollToGallery = () => {
    const section = document.getElementById('conteudo-livro');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPricing = () => {
    const section = document.getElementById('sessao-pagamento');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToBonus = () => {
    const section = document.getElementById('sessao-bonus');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-sky-pastel-50/40 flex flex-col items-center justify-start text-stone-850 antialiased font-sans pb-16">
      
      {/* Main Simulated Phone Canvas Container */}
      <div className="w-full md:max-w-[430px] bg-white min-h-screen flex flex-col justify-between relative shadow-2xl md:border-x md:border-sky-pastel-100/60 overflow-hidden">
        
        <div>
          
          {/* Header Theme */}
          <header className="bg-gradient-to-b from-sky-pastel-100 via-sky-pastel-50 to-white pt-8 pb-10 px-5 text-center relative overflow-hidden text-stone-800">
            <div className="absolute -top-4 -left-10 w-32 h-16 bg-white/80 rounded-full blur-md opacity-70"></div>
            <div className="absolute top-10 -right-16 w-40 h-20 bg-white/60 rounded-full blur-md opacity-80"></div>

            <h1 className="text-[34px] font-black font-heading text-sky-pastel-950 leading-[1.25] tracking-tight max-w-md mx-auto my-5 text-center px-1">
              Lembrancinhas de Fé <br />
              <span className="text-pink-500 inline-block">Prontas para Imprimir</span>
            </h1>

            <p className="text-xs sm:text-[13px] text-stone-600 font-sans mt-2.5 leading-snug max-w-sm mx-auto select-none font-medium">
              Lembrancinhas delicadas e tocantes prontas em alta definição para imprimir, recortar e encantar na sua paróquia, catequese e eventos de fé.
            </p>
          </header>

          {/* VSL SECTION */}
          <section className="px-5 mb-6 relative z-10">
            <VSLPlayer />
          </section>

          {/* DYNAMIC COMPACT HERO CALL TO ACTION (CTA) */}
          <section className="px-5 pb-9 text-center">
            <HeroCTALimitedOffer onCTAClick={scrollToGallery} />
          </section>

          {/* SESSÃO GALERIA DE MODELOS */}
          <section id="conteudo-livro" className="px-5 py-12 bg-sky-50/20 border-t border-b border-stone-100">
            <div className="text-center max-w-sm mx-auto mb-9">
              <span className="text-[11px] font-bold text-pink-600 bg-pink-50 border border-pink-100 px-4 py-1.5 rounded-full uppercase tracking-wider font-heading shadow-3xs inline-block mb-4">
                GALERIA DE MODELOS 🏛️
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#0f172a] font-heading leading-tight tracking-tight">
                Modelos Feitos com Amor e Devoção
              </h3>
            </div>

            {/* Infinite Auto-playing Booklet Pages Carousel */}
            <BookletCarousel />

            <p className="text-xs sm:text-sm text-stone-600 font-sans text-center max-w-xs sm:max-w-sm mx-auto mt-6 leading-relaxed font-medium">
              Lembrancinha pronta em alta definição para impressão, corte e dobra fácil.
            </p>

            {/* SECTION MATCHED CTA */}
            <div className="mt-10 px-4">
              <SectionCTA onCTAClick={scrollToPricing} />
            </div>
          </section>

          {/* SESSÃO BONÛS */}
          <section id="sessao-bonus" className="px-5 py-16 bg-sky-pastel-50/50 border-t border-b border-sky-pastel-100/50">
            <div className="text-center max-w-2xl mx-auto mb-12 animate-[fadeIn_0.5s_ease-out]">
              <div className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-pink-50 text-pink-600 text-[11px] font-bold rounded-full border border-pink-100 uppercase tracking-widest font-heading shadow-3xs mb-4">
                <Gift className="w-4 h-4 text-pink-500 animate-pulse" /> BÔNUS EXCLUSIVOS
              </div>
              <h3 className="text-2xl sm:text-3.5xl font-black text-sky-pastel-950 font-heading leading-tight max-w-xl mx-auto px-2">
                Baixe Hoje e Receba Totalmente Grátis estes <span className="text-pink-500">2 Bônus:</span>
              </h3>
            </div>

            <div className="flex flex-col gap-10 max-w-md mx-auto font-sans">
              
              {/* Bonus 1 */}
              <div className="bg-white rounded-[2.5rem] p-6 sm:p-8 flex flex-col items-center text-center relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:scale-[1.01] transition-transform duration-300 group border border-sky-pastel-100/30">
                <div className="w-full h-64 sm:h-72 select-none flex items-center justify-center mb-6">
                  <img 
                    src={BONUS_MISSA_PATH} 
                    alt="Lembrancinha Setembro Amarelo" 
                    className="max-w-full max-h-full object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,0.12)] group-hover:scale-102 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="w-full bg-[#fdee21] px-4 py-3 rounded-2xl text-center shadow-3xs mb-4 select-none">
                  <span className="text-stone-950 font-black text-sm sm:text-base tracking-tight uppercase font-heading leading-tight block">
                    LEMBRANCINHA SETEMBRO AMARELO
                  </span>
                </div>

                <div className="text-stone-400 tracking-[0.4em] text-[13px] font-bold mb-4 select-none text-center">
                  •••••••••••••
                </div>

                <p className="text-stone-700 text-center text-xs sm:text-[13.5px] leading-relaxed max-w-[310px] mb-6 font-medium">
                  Uma lembrancinha de fé e consolo inspirada no amor de Deus, trazendo mensagens de luz, oração e esperança para acolher os corações e valorizar o dom sagrado da vida.
                </p>

                <div className="border border-emerald-500/75 bg-emerald-50/20 rounded-full py-2.5 px-6 flex items-center justify-center text-xs sm:text-sm select-none w-full max-w-[280px] sm:max-w-[310px] mx-auto mt-auto">
                  <span className="text-emerald-700 font-extrabold text-center tracking-wide">
                    Valor: <span className="line-through text-stone-450 font-normal mx-1">R$ 37,00</span> GRÁTIS
                  </span>
                </div>
              </div>

              {/* Bonus 2 */}
              <div className="bg-white rounded-[2.5rem] p-6 sm:p-8 flex flex-col items-center text-center relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:scale-[1.01] transition-transform duration-300 group border border-sky-pastel-100/30">
                <div className="w-full h-64 sm:h-72 select-none flex items-center justify-center mb-6">
                  <img 
                    src={BONUS_DEC_PATH} 
                    alt="Lembrancinha de Jesus" 
                    className="max-w-full max-h-full object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,0.12)] group-hover:scale-102 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="w-full bg-[#fdee21] px-4 py-3 rounded-2xl text-center shadow-3xs mb-4 select-none">
                  <span className="text-stone-950 font-black text-sm sm:text-base tracking-tight uppercase font-heading leading-tight block">
                    LEMBRANCINHA DE JESUS
                  </span>
                </div>

                <div className="text-stone-400 tracking-[0.4em] text-[13px] font-bold mb-4 select-none text-center">
                  •••••••••••••
                </div>

                <p className="text-stone-700 text-center text-xs sm:text-[13.5px] leading-relaxed max-w-[310px] mb-6 font-medium">
                  Lembrancinha delicada e tocante com a imagem de Jesus para encontros, catequese e momentos de fé.
                </p>

                <div className="border border-emerald-500/75 bg-emerald-50/20 rounded-full py-2.5 px-6 flex items-center justify-center text-xs sm:text-sm select-none w-full max-w-[280px] sm:max-w-[310px] mx-auto mt-auto">
                  <span className="text-emerald-700 font-extrabold text-center tracking-wide">
                    Valor: <span className="line-through text-stone-450 font-normal mx-1">R$ 29,00</span> GRÁTIS
                  </span>
                </div>
              </div>

            </div>

            <div className="mt-10 px-4">
              <SectionCTA onCTAClick={scrollToPricing} />
            </div>
          </section>

          {/* REAL CONFIDENCE TESTIMONIALS */}
          <section id="depoimentos" className="px-5 py-6 bg-white">
            <Testimonials />
          </section>

          {/* SESSÃO DE PAGAMENTO - APENAS O CARD DE R$ 27,00 */}
          <section id="sessao-pagamento" className="px-5 py-12 bg-gradient-to-b from-sky-pastel-50 via-sky-pastel-100/50 to-white">
            <div className="text-center max-w-sm sm:max-w-md mx-auto mb-8 font-heading">
              <span className="text-[10px] sm:text-[11px] font-black bg-[#ffbc0d] text-[#0f172a] px-6 py-2.5 rounded-full uppercase tracking-widest inline-flex items-center gap-1.5 shadow-[0_4px_12px_rgba(255,188,13,0.15)] leading-none">
                OPORTUNIDADE DE HOJE
              </span>
              <h3 className="text-3xl sm:text-4xl font-black text-[#0f172a] mt-4.5 tracking-tight leading-tight">
                Leve o Material Completo
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-2 font-medium">
                Tudo pronto para você baixar, imprimir e montar agora mesmo!
              </p>
            </div>

            <div className="max-w-sm sm:max-w-[420px] mx-auto">
              <div className="bg-white rounded-[2rem] pt-10 pb-8 px-5 sm:px-7 border-[3.5px] border-[#e5007d] shadow-[0_20px_45px_rgba(229,0,125,0.15)] relative overflow-visible flex flex-col justify-between transition-all duration-305">
                <div>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="bg-[#e5007d] text-white font-heading font-black text-xs sm:text-sm tracking-widest px-8 py-2 rounded-full uppercase whitespace-nowrap shadow-sm">
                      {mainProduct.badge}
                    </div>
                  </div>

                  {/* Card Header / Mockup */}
                  <div className="relative select-none flex items-center justify-center mb-6 mt-2">
                    <img 
                      src={mainProduct.imageUrl} 
                      alt={mainProduct.name} 
                      className="w-full max-w-[300px] h-auto object-contain rounded-2xl drop-shadow-[0_12px_24px_rgba(0,0,0,0.08)] hover:scale-[1.02] transition-transform duration-300"
                      referrerPolicy="no-referrer"
                      loading="eager"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (target.src.includes('.md.')) {
                          target.src = 'https://iili.io/CyOf57f.jpg';
                        }
                      }}
                    />
                  </div>

                  {/* Checklist com os novos itens do produto */}
                  <div className="space-y-3 mb-6 font-heading">
                    {mainProduct.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-left border-b border-stone-200/55 pb-2.5 last:border-b-0 last:pb-0">
                        <div className="w-5.5 h-5.5 rounded-full bg-[#22c55e] flex items-center justify-center text-white flex-shrink-0">
                          <Check className="w-3.5 h-3.5 text-white stroke-[4.5]" />
                        </div>
                        <span className="text-[12.5px] sm:text-[13.5px] font-bold text-slate-800 tracking-tight leading-tight">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing */}
                  <div className="text-center font-heading mt-7 mb-6 select-none">
                    <div className="text-stone-500 font-bold text-lg mb-1">
                      De <span className="line-through">R$ {mainProduct.originalPrice.toFixed(2).replace('.', ',')}</span> por apenas
                    </div>
                    <div className="mt-4 mb-2 flex items-baseline justify-center gap-0.5 text-[#00a85a]">
                      <span className="text-3xl font-black">R$</span>
                      <span className="text-6xl font-black">10</span>
                      <span className="text-3xl font-black">,00</span>
                    </div>
                    <div className="text-xs font-semibold text-stone-500 mt-1">
                      Pagamento único • Acesso Vitalício
                    </div>
                  </div>
                </div>

                {/* Checkout Button */}
                <div>
                  <button
                    onClick={handleBuyClick}
                    className="w-full font-heading font-black text-base sm:text-lg py-4.5 rounded-full transition-all duration-150 active:scale-97 cursor-pointer flex items-center justify-center gap-2 uppercase tracking-widest whitespace-nowrap shadow-[0_12px_28px_rgba(0,168,90,0.28)] bg-[#00a85a] hover:bg-[#00924e] text-white animate-pulse-premium-button"
                  >
                    {mainProduct.ctaText}
                  </button>

                  <div className="flex items-center justify-center mt-3 text-stone-600 font-medium text-xs sm:text-sm text-center">
                    <span>Receba o material no seu <strong>WhatsApp</strong> e <strong>E-mail</strong></span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECURE GUARANTEE PLATFORM EMBED */}
          <section className="px-5 py-14 bg-white border-t border-stone-100">
            <div className="max-w-md sm:max-w-[500px] mx-auto bg-[#f3f9fe] border border-sky-100/70 rounded-[2.5rem] p-7 sm:p-10 text-center font-sans shadow-[0_24px_50px_rgba(224,242,254,0.12)]">
              
              <div className="flex justify-center mb-5">
                <img 
                  src="https://iili.io/CSevOoG.md.png" 
                  alt="Garantia Incondicional de 7 Dias" 
                  className="w-32 sm:w-40 h-auto object-contain select-none drop-shadow-sm"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <h4 className="text-xl sm:text-2xl font-black text-[#0f172a] font-heading tracking-tight mb-2">
                Garantia Incondicional de 7 Dias
              </h4>
              <p className="text-xs sm:text-[14px] text-stone-500/90 leading-relaxed font-sans max-w-sm mx-auto mb-8 font-medium">
                Você tem 7 dias completos para conhecer e testar todo o material! Se por qualquer motivo não gostar, devolvemos 100% do seu investimento.
              </p>

              {/* FAQ Oficial */}
              <div className="space-y-3 max-w-md mx-auto">
                {[
                  {
                    id: 1,
                    question: "O que eu recebo após a compra?",
                    answer: "Você recebe os arquivos em alta definição prontos para impressão das Lembrancinhas de Fé, além dos 2 bônus exclusivos (Lembrancinha Setembro Amarelo e Lembrancinha de Jesus)."
                  },
                  {
                    id: 2,
                    question: "São arquivos físicos ou digitais?",
                    answer: "São arquivos digitais em altíssima qualidade (PDF prontos para imprimir em folha comum ou papel especial). Você baixa na hora no computador ou celular."
                  },
                  {
                    id: 3,
                    question: "Posso imprimir quantas vezes quiser e vender?",
                    answer: "Sim! Você tem licença para impressão e uso comercial liberado para imprimir quantas unidades desejar."
                  },
                  {
                    id: 4,
                    question: "Posso acessar os arquivos depois?",
                    answer: "Sim. O acesso é vitalício, você pode baixar hoje ou quando precisar futuramente."
                  },
                  {
                    id: 5,
                    question: "Como recebo meu acesso?",
                    answer: "Após a confirmação do pagamento, você recebe imediatamente o link de acesso por e-mail e WhatsApp."
                  },
                  {
                    id: 6,
                    question: "Existe garantia?",
                    answer: "Sim! Garantia incondicional de 7 dias com devolução total do dinheiro caso não fique satisfeito."
                  }
                ].map((faq) => {
                  const isOpen = openGuaranteeFaq === faq.id;
                  return (
                    <div 
                      key={faq.id} 
                      className="bg-white rounded-2xl border border-sky-100/50 shadow-[0_4px_15px_rgba(15,23,42,0.015)] transition-all duration-300 overflow-hidden text-left"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenGuaranteeFaq(isOpen ? null : faq.id)}
                        className="w-full px-5 py-4 flex justify-between items-center gap-4 cursor-pointer text-left focus:outline-none"
                      >
                        <span className="text-[#0f172a] font-black text-[13px] sm:text-[14px] leading-snug tracking-tight">
                          {faq.question}
                        </span>
                        <div className="w-7 h-7 rounded-full bg-pink-50 flex items-center justify-center flex-shrink-0 text-[#e5007d] transition-all duration-300">
                          <ChevronDown className={`w-3.5 h-3.5 text-[#e5007d] stroke-[3] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                        </div>
                      </button>
                      
                      <div 
                        className="transition-all duration-300 ease-in-out overflow-hidden"
                        style={{
                          maxHeight: isOpen ? '260px' : '0px',
                          opacity: isOpen ? 1 : 0,
                        }}
                      >
                        <div className="px-5 pb-4.5 pt-1.5 border-t border-stone-100/40">
                          <p className="text-[11.5px] sm:text-[12.5px] text-stone-500 font-sans leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </section>

          {/* Footer */}
          <footer className="px-5 py-8 text-center text-xs text-stone-500 bg-white border-t border-stone-100">
            <p className="font-medium">© {new Date().getFullYear()} Lembrancinhas de Fé. Todos os direitos reservados.</p>
            <p className="mt-1 text-[11px] text-stone-400">Material digital protegido. Licença liberada para impressão.</p>
          </footer>

        </div>

      </div>

    </div>
  );
}
