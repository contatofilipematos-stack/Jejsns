import React from 'react';

export const SACRED_ART_MODELS = [
  {
    id: 1,
    alt: 'Lembrancinha com Meninas - Setembro Amarelo',
    url: 'https://iili.io/CyXmJ5b.md.jpg',
  },
  {
    id: 2,
    alt: 'Lembrancinha de Fé 1',
    url: 'https://iili.io/CyXrNgp.md.png',
  },
  {
    id: 3,
    alt: 'Lembrancinha de Fé 2',
    url: 'https://iili.io/CyXrvet.md.png',
  },
  {
    id: 4,
    alt: 'Lembrancinha de Fé 3',
    url: 'https://iili.io/CyXrw1R.md.png',
  },
  {
    id: 5,
    alt: 'Lembrancinha de Fé 4',
    url: 'https://iili.io/CyXredN.md.png',
  },
];

// Duplicamos a lista para criar um loop infinito contínuo e suave sem cortes
const CAROUSEL_ITEMS = [...SACRED_ART_MODELS, ...SACRED_ART_MODELS];

export const BookletCarousel: React.FC = () => {
  return (
    <div className="w-full relative overflow-hidden py-3 select-none">
      {/* Suaves máscaras de desvanecimento nas bordas claras da página */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-sky-50/70 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-sky-50/70 to-transparent z-10" />

      {/* Faixa animada contínua e suave (marquise automática sem botões) */}
      <div className="flex w-max gap-3 sm:gap-4.5 animate-infinite-scroll hover:[animation-play-state:paused]">
        {CAROUSEL_ITEMS.map((item, idx) => (
          <div
            key={`${item.id}-${idx}`}
            className="flex-shrink-0 w-[185px] xs:w-[210px] sm:w-[250px] md:w-[275px] aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden bg-white shadow-md border border-stone-200/70 transform-gpu transition-transform duration-300"
          >
            <img
              src={item.url}
              alt={item.alt}
              className="w-full h-full object-cover select-none pointer-events-none block"
              loading={idx < 4 ? 'eager' : 'lazy'}
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookletCarousel;
