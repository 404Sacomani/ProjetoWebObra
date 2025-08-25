import React from 'react';

function CardHome({ name, conteudo, image, size = 'default' }) {
  
  const sizeStyles = {
    small: 'w-64 h-80',
    default: 'w-full h-100 md:h-150 xl:w-80 xl:h-100', 
    large: 'w-full h-100 md:h-150 xl:w-175 xl:h-210', 
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
      <div 
        style={{ backgroundImage: `url(${image})` }}
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

      <div className="relative z-10 flex flex-col h-full p-6 text-white">
        <header>
          <h1 className="text-amber-400 font-extrabold text-2xl md:text-4xl lg:text-2xl uppercase tracking-wider drop-shadow-md max-lg:text-center">
            {name}
          </h1>
        </header>

        <main className="mt-4 flex-grow">
          <p className="font-bold max-md:text-lg max-lg:text-3xl text-white text-base">
            {conteudo}
          </p>
        </main>

        <footer className="mt-4">
          <button className="w-full h-12 bg-amber-400 text-amber-50 font-bold uppercase rounded-lg
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
