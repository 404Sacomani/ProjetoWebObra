import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import setaE from '../../../public/imagens/seta_esquerda64.png';
import setaD from '../../../public/imagens/seta_direita64.png';
import img1 from '../../../public/imagens/img_cr_01.png';

// 1. Defina os dados dos seus slides em um array
const slides = [
    {
        image: '../../../public/imagens/img_cr_15.jpeg',
        title: 'Artigos da Engenharia',
        text: 'Transformamos suas ideias em realidade com design e tecnologia de ponta. Transformamos suas ideias em realidade com design e tecnologia de ponta.',
        button: '/about',
    },
    {
        image: '../../../public/imagens/img_cr_17.png',
        title: 'Explore Nossos Simuladores',
        text: 'Descubra ferramentas interativas para calcular e resolver problemas da engenharia civil. Aprenda na prática e amplie seus conhecimentos.',
        button: '/simuladores',
    },
    {
        image: '../../../public/imagens/img_cr_14.jpeg',
        title: 'Acabamento de Qualidade',
        text: 'Detalhes que fazem a diferença, garantindo a excelência em cada metro quadrado.',
        button: '/service',
    },
];

function CarrosselHome() {

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
            className="relative h-[92svh] w-full bg-cover bg-center transition-all duration-1000 max-lg:h-[500px] max-lg:bg-bottom"
        >
            <button
                onClick={goToPrevious}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 ml-5 h-40 w-12 flex items-center justify-center bg-black/20 rounded-xl
                   hover:bg-black/40 transition-opacity duration-300 max-lg:h-30 max-lg:w-10 max-lg:top-6/7"
            >
                <img src={setaE} alt="Anterior" className="w-6" />
            </button>


            <div
                key={currentIndex}
                className="h-[92svh] ml-30 flex flex-col p-4 animate-fade-in-up space-y-6 max-lg:ml-5 max-lg:p-1"
            >
                <h1 className="mt-60 text-3xl md:text-6xl lg:text-7xl font-extrabold drop-shadow-lg text-amber-400 max-lg:mt-10
                 uppercase">
                    {slides[currentIndex].title}
                </h1>
                <p className="mt-4 max-w-2xl text-lg md:text-2lg lg:text-xl drop-shadow-md text-white max-lg:mt-2">
                    {slides[currentIndex].text}
                </p>
                <button className='absolute top-3/5 w-90 h-20 mr-5 font-semibold border-4 border-amber-400 overflow-hidden hover:bg-amber-400 duration-400
                group rounded-full cursor-pointer max-md:w-45 max-md:h-10 max-md:2/3 max-lg:w-60 max-lg:h-15 max-lg:3/5'
                >
                    <span className='absolute inset-0 bg-amber-400 translate-x-[-100%] 
                    group-hover:translate-x-0 rounded-full transition-transform duration-400'></span>

                    <NavLink className='relative z-10 text-amber-400  text-3xl font-semibold
                    group-hover:text-white transition-colors duration-400 max-lg:text-xl'
                    to={slides[currentIndex].button}>
                        Acessar Conteudos
                    </NavLink>
                </button>
            </div>

            <button
                onClick={goToNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 mr-5 h-40 w-12 flex items-center justify-center bg-black/20 rounded-xl
                   hover:bg-black/40 transition-opacity duration-300 max-lg:h-30 max-lg:w-10 max-lg:top-6/7"
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

export default CarrosselHome;
