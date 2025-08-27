import { useState, useEffect } from 'react'
import CarrosselHome from '../components/CarrosselHome'
import BarSocial from '../components/BarSocial'
import CardHome from '../components/CardHome'
import imageEnsino from '../../../public/imagens/img_cr_10.jpeg'
import imgLivro from '../../../public/imagens/img_cr_18.jpeg'
import api from '../../services/api'

function HomePage() {

  const [artigos, setArtigos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchArtigos() {
      try {
        const response = await fetch('http://localhost:3000');
        if (!response.ok) {
          throw new Error('Falha ao carregar artigos.');
        }
        const data = await response.json();
        setArtigos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchArtigos();
  }, []);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>Erro: {error}</div>;

  // Verifica se há artigos para evitar erros
  if (artigos.length === 0) {
    return <div>Nenhum artigo encontrado.</div>;
  }

  // Pega o primeiro artigo (o mais recente)
  const artigoEmDestaque = artigos[0];

  // Pega o restante dos artigos
  const outrosArtigos = artigos.slice(1);

  return (
    <>
      <CarrosselHome></CarrosselHome>
      <BarSocial></BarSocial>

      <div className='flex flex-col w-full items-center'>

        <div
          className='grid grid-cols-3 grid-row-2 w-[90%] xl:w-[75%] mt-10 space-y-10 max-lg:flex max-lg:flex-col '>
          <div className='m-3 md:m-7 bg-white shadow-md shadow-zinc-700  border-2 border-amber-400 col-span-1 rounded-2xl 
          flex flex-col items-center space-y-5 max-lg:space-y-8 group hover:shadow-xl hover:scale-105 duration-400'>
            <h1 className='text-3xl font-extrabold text-amber-400 mt-5 lg:mt-20'
            >Simuladores</h1>
            <p className='mx-7 lg:mx-10 md:text-xl font-medium text-slate-600 lg:text-center'
            >Explore nossos simuladores para praticar cálculos e resolver problemas da engenharia civil. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Magnam similique asperiores fuga tempore magni excepturi perferendi</p>
            <button className='w-40 lg:w-80 h-8 my-5 rounded-full bg-amber-400 text-white '>
              Acessar link
            </button>
          </div>

          <div className='m-3 md:m-7 bg-white shadow-md shadow-zinc-700  border-2 border-amber-400 col-span-1 rounded-2xl 
          flex flex-col items-center space-y-5 max-lg:space-y-8 group hover:shadow-xl hover:scale-105 duration-400'>
            <h1 className='text-3xl font-extrabold text-amber-400 mt-5 lg:mt-20'
            >Simuladores</h1>
            <p className='mx-7 lg:mx-10 md:text-xl font-medium text-slate-600 lg:text-center'
            >Explore nossos simuladores para praticar cálculos e resolver problemas da engenharia civil. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Magnam similique asperiores fuga tempore magni excepturi perferendi</p>
            <button className='w-40 lg:w-80 h-8 my-5 rounded-full bg-amber-400 text-white '>
              Acessar link
            </button>
          </div>

          <div className='m-3 md:m-7 bg-white shadow-md shadow-zinc-700  border-2 border-amber-400 col-span-1 rounded-2xl 
          flex flex-col items-center space-y-5 max-lg:space-y-8 group hover:shadow-xl hover:scale-105 duration-400'>
            <h1 className='text-3xl font-extrabold text-amber-400 mt-5 lg:mt-20'
            >Simuladores</h1>
            <p className='mx-7 lg:mx-10 md:text-xl font-medium text-slate-600 lg:text-center'
            >Explore nossos simuladores para praticar cálculos e resolver problemas da engenharia civil. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Magnam similique asperiores fuga tempore magni excepturi perferendi</p>
            <button className='w-40 lg:w-80 h-8 my-5 rounded-full bg-amber-400 text-white '>
              Acessar link
            </button>
          </div>

          <div className='m-3 md:m-7 bg-white shadow-md shadow-zinc-700  border-2 border-amber-400 col-span-3 rounded-2xl 
          flex flex-col items-center space-y-5 max-lg:space-y-8 group hover:shadow-xl hover:scale-105 duration-400'>
            <h1 className='text-3xl font-extrabold text-amber-400 mt-5 lg:mt-20'
            >Simuladores</h1>
            <p className='mx-7 lg:mx-10 md:text-xl font-medium text-slate-600 lg:text-center'
            >Explore nossos simuladores para praticar cálculos e resolver problemas da engenharia civil. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Magnam similique asperiores fuga tempore magni excepturi perferendi</p>
            <button className='lg:text-xl w-40 lg:w-120 max-md:h-8 h-12 my-5 rounded-full bg-amber-400 text-white '>
              Acessar link
            </button>
          </div>
        </div>


        <div style={{ backgroundImage: `url(${imageEnsino})` }}
          className='w-full bg-slate-600/70 shadow-2xl shadow-slate-900/25 h-[500px] flex flex-col items-center
                space-y-10 my-20 bg-center bg-blend-screen'>
          <span className='w-full h-full bg-slate-900/40 flex flex-col items-center max-lg:justify-center'>

            <h1 className='xl:my-10 xl:mt-15 text-4xl md:text-6xl xl:text-7xl font-bold text-amber-400 text-center'>Aprenda Engenharia Civil</h1>
            <p className='text-xl md:text-3xl font-semibold text-sky-200 text-shadow-2xl text-shadow-slate-900/60  mt-10 xl:mt-28 max-lg:text-center'
            >Neste site você encontrarar todas as novidades no mercado, artigos, livros e recomendações de materias.</p>
          </span>

        </div>


        <div className='w-[85%] xl:w-[75%] grid grid-cols-2 max-lg:flex max-lg:flex-col max-lg:items-center'>
          <div className='xl:h-200 xl:col-span-1'>
            <CardHome key={artigoEmDestaque.slugs}
              name={artigoEmDestaque.titulo} image='../../../public/imagens/img_cr_13.jpeg' conteudo={artigoEmDestaque.subtitulo} size='large'
            ></CardHome>
          </div>
          <div className='grid grid-cols-2 grid-rows-2 xl:ml-5 max-lg:flex max-lg:flex-col max-lg:items-center'>
            {outrosArtigos.map((post) => (
              <CardHome key={post.slugs} name={post.titulo} image={imgLivro} conteudo={post.subtitulo}
              ></CardHome>
            ))}
          </div>
        </div>

        <div style={{ backgroundImage: `url(${imgLivro})` }}
          className='w-full h-[200px] md:h-[300px] xl:h-[500px] bg-slate-900 shadow-2xl shadow-slate-900/25 mt-10 flex flex-col items-center justify-center
               space-y-5 xl:space-y-10 bg-center bg-blend-soft-light'>

          <h1 className='text-2xl md:text-3xl xl:text-5xl font-bold text-white text-center'>Está procurando algo para ler?</h1>
          <h2 className='text-2xl xl:text-4xl font-semibold text-white text-center'>Ache os melhores livros de <span className='text-amber-400 font-bold'>engenharia</span> aqui </h2>
          <button
            className='w-60 md:w-80 lg:w-120 h-10 md:h-12 lg:h-15 bg-amber-400 text-white rounded-2xl text-xl lg:text-2xl font-semibold hover:bg-amber-500/90 duration-500'>
            Buscar um livro
          </button>
        </div>

      </div>
    </>
  )

}
export default HomePage;