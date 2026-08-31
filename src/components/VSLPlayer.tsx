import React from 'react';

interface VSLPlayerProps {
  onVideoComplete?: () => void;
}

export default function VSLPlayer({ onVideoComplete }: VSLPlayerProps) {
  // Direct embedding of the provided Vimeo video (Vimeo ID: 1222572391)
  const videoId = "1222572391";
  const embedUrl = `https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&title=0&byline=0&portrait=0`;

  return (
    <div className="w-full max-w-[290px] mx-auto aspect-[9/16] rounded-3xl overflow-hidden shadow-xl border-3 border-sky-pastel-100 bg-stone-950">
      <iframe
        className="w-full h-full"
        src={embedUrl}
        title="Apresentação do Livrinho"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}
