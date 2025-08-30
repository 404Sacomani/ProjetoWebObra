import { useState, useEffect } from 'react';
import CarrosselHome from '../components/CarrosselHome';
import BarSocial from '../components/BarSocial';
import CardHome from '../components/CardHome';
import imageEnsino from '../../../public/imagens/img_cr_10.jpeg'; // Caminho local para o background
import imgLivro from '../../../public/imagens/img_cr_18.jpeg'; // Caminho local para o background
import api from '../../services/api';
import LoadingSpin from '../components/LoadingSpin';
import CardSimu from '../components/CardSimu';

function HomePage() {
  const simuHome = [
    {
      "titulo": "Cálculo I",
      "desc": "Simulador para o estudo e aprofundamento em Cálculo Diferencial e Integral I.",
      "slug": "simulador-calculo-I"
    },
    {
      "titulo": "Soma de Carga",
      "desc": "Ferramenta para cálculo e análise de cargas em projetos de engenharia.",
      "slug": "simulador-soma-carga"
    },
    {
      "titulo": "Cálculo II",
      "desc": "Apoio didático para Cálculo Diferencial e Integral II, com foco em aplicações.",
      "slug": "simulador-calculo-II"
    }
  ];

  const [artigos, setArtigos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchArtigos() {
      try {
        const dataArtigo = await api.get('/homeArtigo');

        if (!dataArtigo.data) {
          throw new Error('Falha ao carregar conteúdo.');
        }

        setArtigos(dataArtigo.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchArtigos();
  }, []);

  if (error) {
    return (
      <div className='w-full min-h-screen bg-slate-900 flex flex-col items-center justify-center p-8 text-red-600 font-semibold text-center'>
        <h1 className='text-3xl md:text-5xl mb-6'>Erro ao carregar o conteúdo!</h1>
        <p className='text-xl md:text-2xl mb-8'>Por favor, tente novamente mais tarde.</p>
        <LoadingSpin />
      </div>
    );
  }

  const artigoEmDestaque = artigos[0];
  const outrosArtigos = artigos.slice(1);

  return (
    <>
      <CarrosselHome />
      <BarSocial />

      <div className='flex flex-col w-full items-center bg-slate-950'> 

        {/*------------ Seção de Simuladores --------------------------------------------------------------------*/}
        <section className="py-16 md:py-20 w-full bg-slate-950 text-white">
          <div className="flex flex-col items-center justify-center mb-10 md:mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-amber-400 drop-shadow-md tracking-widest text-center">
              Simuladores
            </h1>
            <div className="w-20 h-1 mt-4 bg-amber-400 rounded-full"></div>
          </div>

          <div className="w-full mx-auto px-4"> 
            <div className="flex justify-center space-x-6 lg:space-x-8 py-5">
              {simuHome.map((simuCard) => (
                <div 
                  className="" 
                  key={simuCard.slug}>
                  <div className="h-full transform transition-all duration-300 hover:scale-[1.03]"> 
                    <CardSimu
                      titulo={simuCard.titulo}
                      desc={simuCard.desc}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Seção de Banner "Aprenda Engenharia Civil" */}
        <div 
          style={{ backgroundImage: `url(${imageEnsino})` }}
          className='w-full bg-cover bg-center bg-fixed shadow-2xl shadow-slate-900/50 
                     h-[350px] md:h-[450px] lg:h-[550px] flex flex-col items-center justify-center 
                     my-16 md:my-20 bg-blend-screen transition-all duration-500'
        >
          <div className='w-full h-full bg-slate-900/60 flex flex-col items-center justify-center text-white p-4 md:p-8'>
            <h1 className='text-3xl md:text-5xl lg:text-6xl font-black text-amber-400 text-center mb-6 md:mb-8 drop-shadow-lg'>
              Aprenda Engenharia Civil
            </h1>
            <p className='text-base md:text-xl lg:text-2xl font-semibold text-sky-200 text-center max-w-3xl leading-relaxed'>
              Descubra as últimas tendências do mercado, artigos exclusivos, livros e recomendações de materiais essenciais para a sua carreira em engenharia.
            </p>
          </div>
        </div>

        {/* Seção de Artigos em Destaque */}
        <section className="py-16 md:py-20 px-4 md:px-8 w-full bg-slate-950 text-white">
          <div className="flex flex-col items-center justify-center mb-10 md:mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-amber-400 drop-shadow-lg tracking-wider">
              Artigos em Destaque
            </h1>
            <div className="w-24 h-1 bg-amber-400 mt-4 rounded-full"></div>
          </div>

          {loading || artigos.length === 0 ? (
            <div className="flex justify-center items-center h-96">
              <LoadingSpin />
            </div>
          ) : (
            <div className="flex flex-col items-center w-full max-w-7xl mx-auto">
              <div className="w-full flex flex-col lg:flex-row lg:space-x-8">
                <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
                  <CardHome
                    key={artigoEmDestaque.slugs}
                    name={artigoEmDestaque.titulo}
                    image={artigoEmDestaque.imagemCapa}
                    alt={artigoEmDestaque.altCapa}
                    conteudo={artigoEmDestaque.subtitulo}
                    size="large"
                  />
                </div>

                <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8">
                  {outrosArtigos.map((post) => (
                    <CardHome
                      key={post.slugs}
                      name={post.titulo}
                      image={post.imagemCapa}
                      alt={post.altCapa}
                      conteudo={post.subtitulo}
                      size="default"
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Seção de Livros */}
        <div 
          style={{ backgroundImage: `url(${imgLivro})` }}
          className='w-full bg-cover bg-center bg-fixed shadow-2xl shadow-slate-900/50 
                     h-[250px] md:h-[350px] lg:h-[450px] flex flex-col items-center justify-center 
                     my-16 md:my-20 bg-blend-overlay bg-black/50 transition-all duration-500'
        >
          <div className='w-full h-full flex flex-col items-center justify-center text-white p-4 md:p-8'>
            <h1 className='text-2xl md:text-4xl lg:text-5xl font-black text-white text-center mb-4 drop-shadow-md'>
              Procurando algo para ler?
            </h1>
            <h2 className='text-xl md:text-2xl lg:text-3xl font-semibold text-white text-center mb-8 drop-shadow-sm'>
              Descubra os melhores livros de <span className='text-amber-400 font-extrabold'>Engenharia</span> aqui!
            </h2>
            <button
              className='w-full max-w-xs md:max-w-md py-3 md:py-4 bg-amber-400 text-white rounded-full 
                         text-lg md:text-xl font-bold uppercase tracking-wider 
                         hover:bg-amber-500 transition-colors duration-300 transform hover:scale-105 shadow-lg'
            >
              Buscar um livro
            </button>
          </div>
        </div>

      </div>
    </>
  );
}

export default HomePage;