import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import setaE from '../../../public/imagens/seta_esquerda64.png';
import setaD from '../../../public/imagens/seta_direita64.png';
import img1 from '../../../public/imagens/img_cr_03.jpeg';
import img2 from '../../../public/imagens/img_cr_17.png';
import img3 from '../../../public/imagens/img_cr_14.jpeg';

// 1. Defina os dados dos seus slides em um array
const imgSlide = [img1, img2, img3];
const slides = [
    {
        title: 'Mergulhe em nosso universo de conhecimento.',
        text: 'Descubra artigos exclusivos, análises detalhadas e as últimas tendências que estão moldando o futuro da engenharia civil.',
        button: '/about',
    },
    {
        title: 'Sua ferramenta de sucesso está aqui.',
        text: 'Transforme a complexidade dos cálculos em resultados concretos. Nossos simuladores foram criados para simplificar sua jornada e levar suas habilidades para o próximo nível.',
        button: '/simuladores',
    },
    {
        title: 'Expanda seus horizontes.',
        text: 'Descubra a seleção de livros essenciais para a sua carreira. Encontre o conhecimento que vai te guiar em cada passo da sua jornada profissional.',
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
        const autoPlayInterval = setInterval(goToNext, 12000);

        return () => clearInterval(autoPlayInterval);
    }, [currentIndex]);

    return (
        <div
            style={{backgroundImage: `url(${imgSlide[currentIndex]})`}}
            className="relative h-[92svh] w-full bg-cover bg-center transition-all duration-1000 max-lg:h-[400px] max-lg:bg-bottom"
        >
            <button
                onClick={goToPrevious}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 ml-5 h-60 w-20 flex items-center justify-center bg-slate-500/30 rounded-xl
                   hover:bg-slate-600/30 transition-opacity duration-300 max-lg:h-30 max-lg:w-10 max-lg:top-8/10"
            >
                <img src={setaE} alt="Anterior" className="w-6" />
            </button>


            <div
                key={currentIndex}
                className="h-full flex flex-col p-4 animate-fade-in-up space-y-6 items-center bg-slate-800/50"
            >
                <h1 className="absolute top-1/5 text-2xl md:text-6xl lg:text-7xl font-semibold drop-shadow-lg text-amber-400
                 uppercase text-center">
                    {slides[currentIndex].title}
                </h1>
                <p className="absolute text-center top-2/6 mt-5 xl:top-3/6 max-w-[90%] text-lg md:text-2lg lg:text-3xl drop-shadow-md text-slate-200 font-bold">
                    {slides[currentIndex].text}
                </p>
                <button className='absolute top-4/5 w-90 h-20 mr-5 font-semibold border-4 border-amber-400 overflow-hidden hover:bg-amber-400 duration-400
                group rounded-full cursor-pointer max-md:w-45 max-md:h-10 max-md:2/3 max-lg:w-60 max-lg:h-15 max-lg:3/5'
                >
                    <span className='absolute inset-0 bg-amber-400 translate-x-[-100%] 
                    group-hover:translate-x-0 rounded-full transition-transform duration-400'></span>

                    <NavLink className='relative z-10 text-amber-400  text-3xl font-semibold
                    group-hover:text-slate-200 transition-colors duration-400 max-lg:text-xl'
                    to={slides[currentIndex].button}>
                        Acessar Conteudos
                    </NavLink>
                </button>
            </div>

            <button
                onClick={goToNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 mr-5 h-60 w-20 flex items-center justify-center bg-slate-500/30 rounded-xl
                   hover:bg-slate-600/30 transition-opacity duration-300 max-lg:h-30 max-lg:w-10 max-lg:top-8/10"
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
