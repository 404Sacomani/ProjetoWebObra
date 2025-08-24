import React, { useState, useEffect } from 'react';

import setaE from '../../../public/imagens/seta_esquerda64.png';
import setaD from '../../../public/imagens/seta_direita64.png';
import img1 from '../../../public/imagens/imageEnsino.jpeg';

const slides = [
    {
        image: {img1},
        title: 'Artigos da Engenharia',
        text: 'Transformamos suas ideias em realidade com design e tecnologia de ponta. Transformamos suas ideias em realidade com design e tecnologia de ponta.',
    },
    {
        image: '../../../public/imagens/imageEnsino.jpeg',
        title: 'Construção Sustentável',
        text: 'Compromisso com o futuro, utilizando materiais e processos ecológicos.',
    },
    {
        image: '../../../public/imagens/imageEnsino.jpeg',
        title: 'Acabamento de Qualidade',
        text: 'Detalhes que fazem a diferença, garantindo a excelência em cada metro quadrado.',
    },
];

function Carousel() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    useEffect(() => {
        const autoPlayInterval = setInterval(goToNext, 5000);

        return () => clearInterval(autoPlayInterval);
    }, [currentIndex]);

    return (
        <div
            style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
            className="relative h-[92svh] w-full bg-cover bg-center transition-all duration-1000"
        >
            <button
                onClick={goToPrevious}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 ml-5 h-40 w-12 flex items-center justify-center bg-black/20 rounded-xl
                   hover:bg-black/40 transition-opacity duration-300"
            >
                <img src={setaE} alt="Anterior" className="w-6" />
            </button>


            <div
                key={currentIndex}
                className="h-[92svh] ml-30 flex flex-col p-4 animate-fade-in-up space-y-6"
            >
                <h1 className="mt-60 text-5xl md:text-7xl font-bold drop-shadow-lg text-amber-400">
                    {slides[currentIndex].title}
                </h1>
                <p className="mt-4 max-w-2xl text-lg md:text-xl drop-shadow-md text-white">
                    {slides[currentIndex].text}
                </p>
                <button className='absolute top-3/5 w-90 h-20 mr-5 font-semibold border-4 border-amber-400 overflow-hidden 
                group rounded-full cursor-pointer'
                >
                    <span className='absolute inset-0 bg-amber-400 translate-x-[-100%] 
                    group-hover:translate-x-0 rounded-full transition-transform duration-400'></span>

                    <span className='relative z-10 text-amber-400  text-2xl font-semibold
                    group-hover:text-white transition-colors duration-400'>
                        Acessar Conteudos
                    </span>
                </button>
            </div>

            <button
                onClick={goToNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 mr-5 h-40 w-12 flex items-center justify-center bg-black/20 rounded-xl
                   hover:bg-black/40 transition-opacity duration-300"
            >
                <img src={setaD} alt="Próximo" className="w-6" />
            </button>

            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-3">
                {slides.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => setCurrentIndex(slideIndex)}
                        className={`h-3 w-3 rounded-full cursor-pointer transition-colors duration-300
                        ${currentIndex === slideIndex ? 'bg-white' : 'bg-white/50'}`}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default Carousel;
