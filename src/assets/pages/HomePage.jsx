import { useState, useEffect } from 'react';
import CarrosselHome from '../components/CarrosselHome';
import BarSocial from '../components/BarSocial';
import CardHome from '../components/CardHome';
import CardSimu from '../components/CardSimu';
import SlideLivros from '../components/SlideLivros';
import imgLivro from '../../../public/imagens/img_cr_12.png';
import api from '../../services/api';
import LoadingSpin from '../components/LoadingSpin';


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

  const livrosHome = [
    {
      'img': "https://lh3.googleusercontent.com/aida-public/AB6AXuCo3Qj8h4HnXBoAln6fNl5n0mhCtn4qGmxjcOjwhu2kc2QNrhBD9sx0_5vfsLe6gmo-3ARupq1QBwizNs6tkhqjLdcdDz-yMCjRb62MM5n1mwxJ6R5Ii6EyOvYx4e1ycx4IflHZXbr73UaSJjUGmyYRGcOaG5LryVBgabATfyXhudsq98Ticr3VExrId4cLRycTw4DS0QCTeXWXstF6BaEHms4WfUmQaEVgNkjVtcoKaIm7adyR9FkkOp8RtuAw8P2LSGSSs4k7fAE",
      'title': 'Livro numero 1',
      'autor': 'Algusto silkva lopes',
      'slug': 'livro-n-1'
    },
    {
      'img': 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7cYqOA9S682644PghurtpBeU20CT9VYNj7FXX0GbmxomoY4zCoLTKLr_U7Z4OzbfvTLg_sTAL5P27xc8D2JLVeB2GRqjOkLtIEPse4wH6oDILwDW7TslT0nsJc-CX9vRFEHuzL4XgbXVpo5szZHRuY5Msv1S9oFK3aZ4n9b3cJuOBMc8t0anCvHk5UfJ_F3QqknXy14HdPGkiiRqAsrinudAJRPc01X4fwMv1dASxhqQdxZNBYQDAv4A2cZaS12O_JyFlx8mhXxM',
      'title': 'Livro numero 2',
      'autor': 'Carlos magnus silva',
      'slug': 'livro-n-2'
    },
    {
      'img': 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7l39Nifs7IahdEHyqplC_P05-4nD1zg8sOhSniG9y9CgBMAa-VyK3CbQcY0dBcmKl-ZaZo3nHAxw8qf5niDEholtVWkTA7D04-owq5tXP1IB-v5Na_udOGTq6nVdAIlv9n3pwUhm-bHCr2_NQvL2wnXtvFVcEybZ6hv3GxnlpjHC5f8TXQzJCOxT4RtRfa8Uw7EbYzXEaZbveDskmWtkVCI9kc5m5E0PaeYOSVXTlmT88AYf3GrNBf0QvfAheJy2-LaofCTeEQHg',
      'title': 'Livro numero 3',
      'autor': 'Gilberto nunes ded souza',
      'slug': 'livro-n-3'
    },
    {
      'img': 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7cYqOA9S682644PghurtpBeU20CT9VYNj7FXX0GbmxomoY4zCoLTKLr_U7Z4OzbfvTLg_sTAL5P27xc8D2JLVeB2GRqjOkLtIEPse4wH6oDILwDW7TslT0nsJc-CX9vRFEHuzL4XgbXVpo5szZHRuY5Msv1S9oFK3aZ4n9b3cJuOBMc8t0anCvHk5UfJ_F3QqknXy14HdPGkiiRqAsrinudAJRPc01X4fwMv1dASxhqQdxZNBYQDAv4A2cZaS12O_JyFlx8mhXxM',
      'title': 'Livro numero 4',
      'autor': 'Gustavo lima sampaio',
      'slug': 'livro-n-4'
    },
    {
      'img': "https://lh3.googleusercontent.com/aida-public/AB6AXuCo3Qj8h4HnXBoAln6fNl5n0mhCtn4qGmxjcOjwhu2kc2QNrhBD9sx0_5vfsLe6gmo-3ARupq1QBwizNs6tkhqjLdcdDz-yMCjRb62MM5n1mwxJ6R5Ii6EyOvYx4e1ycx4IflHZXbr73UaSJjUGmyYRGcOaG5LryVBgabATfyXhudsq98Ticr3VExrId4cLRycTw4DS0QCTeXWXstF6BaEHms4WfUmQaEVgNkjVtcoKaIm7adyR9FkkOp8RtuAw8P2LSGSSs4k7fAE",
      'title': 'Livro numero 5',
      'autor': 'Algusto silkva lopes',
      'slug': 'livro-n-5'
    },
    {
      'img': 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7cYqOA9S682644PghurtpBeU20CT9VYNj7FXX0GbmxomoY4zCoLTKLr_U7Z4OzbfvTLg_sTAL5P27xc8D2JLVeB2GRqjOkLtIEPse4wH6oDILwDW7TslT0nsJc-CX9vRFEHuzL4XgbXVpo5szZHRuY5Msv1S9oFK3aZ4n9b3cJuOBMc8t0anCvHk5UfJ_F3QqknXy14HdPGkiiRqAsrinudAJRPc01X4fwMv1dASxhqQdxZNBYQDAv4A2cZaS12O_JyFlx8mhXxM',
      'title': 'Livro numero 6',
      'autor': 'Carlos magnus silva',
      'slug': 'livro-n-6'
    },
    {
      'img': 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7l39Nifs7IahdEHyqplC_P05-4nD1zg8sOhSniG9y9CgBMAa-VyK3CbQcY0dBcmKl-ZaZo3nHAxw8qf5niDEholtVWkTA7D04-owq5tXP1IB-v5Na_udOGTq6nVdAIlv9n3pwUhm-bHCr2_NQvL2wnXtvFVcEybZ6hv3GxnlpjHC5f8TXQzJCOxT4RtRfa8Uw7EbYzXEaZbveDskmWtkVCI9kc5m5E0PaeYOSVXTlmT88AYf3GrNBf0QvfAheJy2-LaofCTeEQHg',
      'title': 'Livro numero 7',
      'autor': 'Gilberto nunes ded souza',
      'slug': 'livro-n-7'
    },
    {
      'img': 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7cYqOA9S682644PghurtpBeU20CT9VYNj7FXX0GbmxomoY4zCoLTKLr_U7Z4OzbfvTLg_sTAL5P27xc8D2JLVeB2GRqjOkLtIEPse4wH6oDILwDW7TslT0nsJc-CX9vRFEHuzL4XgbXVpo5szZHRuY5Msv1S9oFK3aZ4n9b3cJuOBMc8t0anCvHk5UfJ_F3QqknXy14HdPGkiiRqAsrinudAJRPc01X4fwMv1dASxhqQdxZNBYQDAv4A2cZaS12O_JyFlx8mhXxM',
      'title': 'Livro numero 8',
      'autor': 'Gustavo lima sampaio',
      'slug': 'livro-n-8'
    }
  ]

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
      <div className='w-full min-h-screen bg-slate-900 flex flex-col items-center justify-center p-8 text-amber-400 font-semibold text-center'>
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
      {/*------------ Seção de Simuladores --------------------------------------------------------------------*/}

      <section className="py-16 bg-slate-800">
        <div className='container mx-auto px-4'>
          <div className="flex flex-col items-center justify-center mb-10 md:mb-12">
            <h1 className="text-xl md:text-4xl lg:text-5xl font-black uppercase text-slate-200 drop-shadow-lg tracking-wider">
              simuladores em Destaque
            </h1>
            <div className="w-24 h-1 bg-white mt-4 rounded-full"></div>
          </div>
          {loading ? (
            <div className="flex justify-center items-center h-96">
              <LoadingSpin />
            </div>
          ) : (
            <div className="">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {simuHome.map((simuCard, index) => (
                  <div
                    className=""
                    key={simuCard.slug}>
                    <div className="">
                      <CardSimu
                        titulo={simuCard.titulo}
                        desc={simuCard.desc}
                        stick={index}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Seção de Banner "Aprenda Engenharia Civil" --------------------------------------------------------*/}
      <div style={{ backgroundImage: `url(${imgLivro})` }}
        className='w-full bg-orange-500/40 h-[200px] md:h-[350px] lg:h-[350px]  
                      transition-all duration-500 max-lg:bg-cover lg:bg-center'
      >
        <div className='w-full h-full bg-slate-800/50 flex flex-col items-center justify-center'>
          <h1 className='text-3xl md:text-5xl lg:text-6xl font-black text-slate-200 text-center mb-6 md:mb-8 drop-shadow-lg'>
            Aprenda <span className='text-amber-400'>Engenharia Civil</span>
          </h1>
          <p className='text-sm md:text-xl lg:text-2xl font-semibold text-slate-300 text-center max-w-4xl leading-relaxed'>
            Descubra as últimas tendências do mercado, artigos exclusivos, livros e recomendações de materiais essenciais para a sua carreira em engenharia.
          </p>
        </div>
      </div>

      {/* Seção de Artigos em Destaque ---------------------------------------------------------------------*/}
      <section className="py-16 bg-slate-800">
        <div className='container mx-auto px-4'>
          <div className="flex flex-col items-center justify-center mb-10 md:mb-12">
            <h1 className="text-xl md:text-4xl lg:text-5xl font-black uppercase text-slate-200 drop-shadow-lg tracking-wider">
              Artigos em Destaque
            </h1>
            <div className="w-24 h-1 bg-slate-200 mt-4 rounded-full"></div>
          </div>

          {loading || artigos.length === 0 ? (
            <div className="flex justify-center items-center h-96">
              <LoadingSpin />
            </div>
          ) : (
            <div className="flex flex-col items-center w-full max-w-8xl mx-auto">
              <div className="w-full flex flex-col lg:flex-row lg:space-x-8">
                <div className="w-full lg:w-2/3 flex justify-center mb-8 lg:mb-0 ">
                  <CardHome
                    key={artigoEmDestaque.slugs}
                    title={artigoEmDestaque.titulo}
                    image={artigoEmDestaque.imagemCapa}
                    alt={artigoEmDestaque.altCapa}
                    desc={artigoEmDestaque.subtitulo}
                    slug={artigoEmDestaque.slugs}
                    size="large"
                  />
                </div>

                <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8">
                  {outrosArtigos.map((post) => (
                    <CardHome
                      key={post.slugs}
                      title={post.titulo}
                      image={post.imagemCapa}
                      alt={post.altCapa}
                      slug={post.slugs}
                      size="default"
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Seção de Livros ----------------------------------------------------------------------------------------*/}
      <div
        className='w-full h-[250px] md:h-[350px] lg:h-[350px] flex flex-col items-center justify-center bg-slate-600
                      transition-all duration-500 bg-center bg-no-repeat bg-cover'
      >
        <div className='w-full h-full flex flex-col items-center justify-center text-white p-4 md:p-8'>
          <h3 className='text-2xl md:text-4xl lg:text-6xl font-extrabold text-slate-200 text-center mb-4 drop-shadow-md'>
            Procurando algo para ler?
          </h3>
          <p className='text-2sm md:text-2xl lg:text-3xl font-semibold text-slate-300 text-center mb-8 drop-shadow-sm'>
            Descubra os melhores livros de <span className='text-amber-400 font-extrabold'>Engenharia</span> aqui!
          </p>
          <a
            className='max-md:h-10 w-1/2 max-w-xs md:max-w-md py-3 md:py-4 bg-amber-400 text-slate-200 rounded-lg 
                         text-[0.8rem] md:text-xl font-bold uppercase tracking-wider text-center
                         hover:bg-amber-500 shadow-lg hover:-translate-y-2 transition-all duration-500'
          >
            Buscar um livro
          </a>
        </div>
      </div>
      <SlideLivros
        livrosHome={livrosHome}>
      </SlideLivros>
    </>
  );
}

export default HomePage;