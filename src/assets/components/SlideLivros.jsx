import React, { useState } from 'react';
import CardLivros from '../components/CardLivros';

function SlideLivros({ livrosHome }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Calcula o número de itens visíveis em diferentes tamanhos de tela
    const getItemsPerPage = () => {
        if (window.innerWidth >= 1024) return 4; // lg
        if (window.innerWidth >= 768) return 3; // md
        if (window.innerWidth >= 640) return 2; // sm
        return 1; // default
    };

    const itemsPerPage = getItemsPerPage();
    const maxIndex = Math.max(0, livrosHome.length - itemsPerPage);

    const handleNext = () => {
        setCurrentIndex(prevIndex => Math.min(prevIndex + 1, maxIndex));
    };

    const handlePrev = () => {
        setCurrentIndex(prevIndex => Math.max(prevIndex - 1, 0));
    };

    return (
        <div className='py-10 bg-slate-800'>
            <div className='w-[90%] container mx-auto px-4'>
                <div className="flex flex-col items-center justify-center mb-10 md:mb-12">
                    <h1 className="text-xl md:text-2xl lg:text-4xl font-black uppercase text-slate-200 drop-shadow-lg tracking-wider">
                        Últimos adicionados
                    </h1>
                    <div className="w-24 h-1 bg-white mt-4 rounded-full"></div>
                </div>

                <div className="relative">
                    <div className="flex overflow-hidden">
                        <div
                            className="w-full flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
                        >
                            {livrosHome.map((card) => (
                                <div
                                    key={card.slug}
                                    className={`flex-none w-full sm:w-1/4 md:w-1/3 lg:w-1/4 p-2`}
                                >
                                    <CardLivros
                                        title={card.title}
                                        autor={card.autor}
                                        image={card.img}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={handlePrev}
                        disabled={currentIndex === 0}
                        className="w-11 h-35 md:w-12 md:h-40 2xl:w-15 2xl:h-60 absolute top-1/2 -left-3 md:-left-12 lg:-left-15 2xl:-left-20 transform -translate-y-1/2 bg-gray-700/50 text-white p-2 rounded-full disabled:opacity-30
                        hover:scale-105 transition-transform duration-300"
                    >
                        &#10094; {/* Seta para a esquerda */}
                    </button>

                    <button
                        onClick={handleNext}
                        disabled={currentIndex >= maxIndex}
                        className="w-11 h-35 md:w-12 md:h-40 2xl:w-15 2xl:h-60 absolute top-1/2 -right-3 md:-right-12 lg:-right-15 2xl:-right-20 transform -translate-y-1/2 bg-gray-700/50 text-white p-2 rounded-full disabled:opacity-30
                        hover:scale-105 transition-transform duration-300"
                    >
                        &#10095; {/* Seta para a direita */}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SlideLivros;