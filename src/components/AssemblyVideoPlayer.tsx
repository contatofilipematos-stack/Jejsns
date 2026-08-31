import React from 'react';

export default function AssemblyVideoPlayer() {
  const videoId = "1203608757";
  const embedUrl = `https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&title=0&byline=0&portrait=0&muted=1`;

  return (
    <div className="w-full max-w-[290px] mx-auto aspect-[9/16] rounded-[2.5rem] overflow-hidden shadow-[0_16px_36px_rgba(3,105,161,0.15)] border-3 border-sky-200 bg-stone-950 transition-all duration-300 hover:shadow-[0_20px_45px_rgba(3,105,161,0.25)]">
      <iframe
        className="w-full h-full"
        src={embedUrl}
        title="Como Montar o Livrinho"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}
