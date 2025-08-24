import React from 'react';

// O componente agora aceita a prop 'size' que pode ser 'small', 'default', ou 'large'
function CardHome({ name, conteudo, image, size = 'default' }) {
  
  // Mapeamento dos tamanhos para classes do Tailwind
  const sizeStyles = {
    small: 'w-64 h-80',
    default: 'w-80 h-100', // Tamanho padrão que você estava usando
    large: 'w-175 h-210', // Usando valor arbitrário para altura
  };

  return (
    <div
      className={`
        my-5
        ${sizeStyles[size]} 
        relative flex flex-col justify-between
        bg-zinc-800 rounded-xl overflow-hidden shadow-lg 
        border border-zinc-700 group
        transition-all duration-500 ease-in-out
        hover:shadow-2xl hover:shadow-amber-500/20 hover:scale-105
      `}
    >
      {/* 1. Imagem de fundo e Overlay separados para melhor controle */}
      <div 
        style={{ backgroundImage: `url(${image})` }}
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

      {/* 2. Conteúdo posicionado sobre a imagem com z-index */}
      <div className="relative z-10 flex flex-col h-full p-6 text-white">
        {/* Header com o Título */}
        <header>
          <h1 className="text-amber-400 font-bold text-2xl uppercase tracking-wider drop-shadow-md">
            {name}
          </h1>
        </header>

        {/* Conteúdo principal */}
        <main className="mt-4 flex-grow">
          <p className="text-zinc-200 text-base">
            {conteudo}
          </p>
        </main>

        {/* Botão no rodapé */}
        <footer className="mt-4">
          <button className="w-full h-12 bg-amber-400 text-zinc-900 font-bold uppercase rounded-lg
                           transition-all duration-300
                           hover:bg-amber-500 hover:scale-105">
            Saiba mais
          </button>
        </footer>
      </div>
    </div>
  );
}

export default CardHome;