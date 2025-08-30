import React from 'react';

function CardHome({ name, conteudo, image, alt, size = 'default' }) {
  const sizeClasses = {
    small: 'w-64 h-80',
    default: 'w-full md:w-80 lg:h-96',
    large: 'w-full md:w-[600px] h-100 md:h-[500px] lg:h-[840px]',
  };

  const headerClasses = size === 'large' 
    ? 'w-full h-40 bg-white/85 flex flex-col items-center justify-center space-y-3 shadow-xl shadow-black/30'
    : 'w-full h-20 bg-white/85 flex flex-col items-center justify-center shadow-xl shadow-black/30';

  return (
    <div
      className={`
        ${sizeClasses[size] || sizeClasses.default}
        my-5 relative flex flex-col justify-between
        bg-zinc-800 rounded-lg overflow-hidden shadow-xl
        border-2 border-amber-400 group
        transition-all duration-500 ease-in-out
        hover:shadow-2xl hover:shadow-amber-500/30 hover:scale-105
        cursor-pointer
      `}
    >
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        aria-label={alt}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/35"></div>

      <header className={`relative z-10 ${headerClasses}`}>
        <h1 className="text-amber-500 font-extrabold text-2xl lg:text-3xl tracking-wide drop-shadow-md text-center">
          {name}
        </h1>
        {size === 'large' && (
          <h2 className="text-red-800 font-bold text-sm lg:text-base tracking-widest text-center mt-1">
            Última Publicação
          </h2>
        )}
      </header>
      
      <main className="relative z-10 p-6 flex flex-col justify-end text-white flex-grow">
        <p className="font-semibold text-base lg:text-lg">
          {conteudo}
        </p>
      </main>

      <footer className="relative z-10 w-full">
        <a className="block w-full py-4 text-center bg-amber-400 text-amber-50 font-semibold uppercase transition-colors duration-200 hover:bg-amber-500">
          Leia mais
        </a>
      </footer>
    </div>
  );
}

export default CardHome;