// src/components/CardArtigo.jsx
import React from 'react';
import dataAtualForm from './ComponentDate';

const CardArtigoBlog = ({ artigo }) => {
  return (
    <div className="bg-slate-900 rounded-lg overflow-hidden shadow-lg group transition-transform duration-300 hover:scale-105">
      <a href={`/artigos/${artigo.slugs}`}>
        <img
          className="aspect-video w-full rounded-t-lg object-cover"
          src={artigo.imagemCapa}
          alt={artigo.altCapa}
        />
        <div className="p-6">
          <p className="text-sm text-amber-400 mb-2">{dataAtualForm(artigo.dataPublic)}</p>
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-500 transition-colors">
            {artigo.titulo}
          </h3>
          <p className="text-slate-400 text-base">
            {artigo.subtitulo}
          </p>
        </div>
      </a>
    </div>
  );
};

export default CardArtigoBlog;