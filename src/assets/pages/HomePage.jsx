import CarrosselHome from '../components/CarrosselHome'
import BarSocial from '../components/BarSocial'
import CardHome from '../components/CardHome'
import imageEnsino from '../../../public/imagens/imageEnsino.jpeg'

function HomePage() {

  const cardArtigos = [
    {
      type: 'Artigo',
      name: 'Novas noticias',
      conteudo: 'Explore nossos simuladores para praticar cálculos e resolver problemas da engenharia civil. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam similique asperiores fuga tempore magni excepturi perferendi',
      image: '../../../public/imagens/imagens/imageEnsino.jpeg'
    },
    {
      type: 'Artigo',
      name: 'Novas noticias',
      conteudo: 'Explore nossos simuladores para praticar cálculos e resolver problemas da engenharia civil. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam similique asperiores fuga tempore magni excepturi perferendi',
      image: '../../../public/imagens/imagens/imageEnsino.jpeg'
    },
    {
      type: 'Artigo',
      name: 'Novas noticias',
      conteudo: 'Explore nossos simuladores para praticar cálculos e resolver problemas da engenharia civil. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam similique asperiores fuga tempore magni excepturi perferendi',
      image: '../../../public/imagens/imagens/imageEnsino.jpeg'
    },
    {
      type: 'Artigo',
      name: 'Novas noticias',
      conteudo: 'Explore nossos simuladores para praticar cálculos e resolver problemas da engenharia civil. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam similique asperiores fuga tempore magni excepturi perferendi',
      image: '../../../public/imagens/imagens/imageEnsino.jpeg'
    },
  ]

  return (
    <>
      <CarrosselHome></CarrosselHome>
      <BarSocial></BarSocial>

     

      <div className='flex flex-col w-full items-center'>

        <div className='grid grid-cols-3 grid-row-2 w-[75%] mt-10 space-y-10'>
          <div className=' m-7 bg-white shadow-md shadow-zinc-700  border-2 border-amber-400 col-span-1 rounded-2xl 
          flex flex-col items-center space-y-5 group hover:shadow-xl hover:scale-105 duration-400'>
            <h1 className='text-3xl font-extrabold text-amber-400 mt-20'
            >Simuladores</h1>
            <p className='mx-10 text-xl font-medium text-slate-600'
            >Explore nossos simuladores para praticar cálculos e resolver problemas da engenharia civil. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Magnam similique asperiores fuga tempore magni excepturi perferendi</p>
            <button className='w-80 h-8 my-5 rounded-full bg-amber-400 text-white '>
              Acessar link
            </button>
          </div>

          <div className='m-7 bg-white shadow-md shadow-zinc-700  border-2 border-amber-400 col-span-1 rounded-2xl 
          flex flex-col items-center space-y-5 group hover:shadow-xl hover:scale-105 duration-400'>
            <h1 className='text-3xl font-extrabold text-amber-400 mt-20'
            >Simuladores</h1>
            <p className='mx-10 text-xl font-medium text-slate-600'
            >Explore nossos simuladores para praticar cálculos e resolver problemas da engenharia civil. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Magnam similique asperiores fuga tempore magni excepturi perferendi</p>
            <button className='w-80 h-8 my-5 rounded-full bg-amber-400 text-white '>
              Acessar link
            </button>
          </div>

          <div className='m-7 bg-white shadow-md shadow-zinc-700  border-2 border-amber-400 col-span-1 rounded-2xl 
          flex flex-col items-center space-y-5 group hover:shadow-xl hover:scale-105 duration-400'>
            <h1 className='text-3xl font-extrabold text-amber-400 mt-20'
            >Simuladores</h1>
            <p className='mx-10 text-xl font-medium text-slate-600'
            >Explore nossos simuladores para praticar cálculos e resolver problemas da engenharia civil. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Magnam similique asperiores fuga tempore magni excepturi perferendi</p>
            <button className='w-80 h-8 my-5 rounded-full bg-amber-400 text-white '>
              Acessar link
            </button>
          </div>

          <div className='mx-7 bg-white shadow-md shadow-zinc-700  border-2 border-amber-400 col-span-3 h-100 rounded-2xl 
          flex flex-col items-center space-y-5 group hover:shadow-xl hover:scale-105 duration-400'>
            <h1 className='text-3xl font-extrabold text-amber-400 mt-20'
            >Simuladores</h1>
            <p className='mx-10 text-xl font-medium text-slate-600'
            >Explore nossos simuladores para praticar cálculos e resolver problemas da engenharia civil. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Magnam similique asperiores fuga tempore magni excepturi perferendi</p>
            <button className='w-80 h-8 my-5 rounded-full bg-amber-400 text-white '>
              Acessar link
            </button>
          </div>
        </div>


         <div style={{ backgroundImage: `url(${imageEnsino})` }}
      className='w-full bg-slate-600/70 shadow-2xl shadow-slate-900/25 h-[500px] flex flex-col items-center
                space-y-10 bg-center my-20'>

      <span className='w-full h-full bg-slate-900/40 flex flex-col items-center'>
        <h1 className='my-10 mt-15 text-7xl font-bold text-amber-400 text-center'>Aprenda Engenharia Civil</h1>
        <p className='text-3xl font-semibold text-sky-200 text-shadow-2xl text-shadow-slate-900/60 mt-28' 
        >Neste site você encontrarar todas as novidades no mercado, artigos, livros e recomendações de materias.</p>
      </span>
        
      </div>


        <div className='w-[75%] grid grid-cols-2'>
          <div className='h-200 col-span-1'>
            <CardHome
              name='Ultima noticia' image='../../../public/imagens/imagens/imageEnsino.jpeg' conteudo='aqui e um conteudo muito importante para ler' size='large'
            ></CardHome>
          </div>
          <div className='grid grid-cols-2 grid-rows-2 ml-5'>
            {cardArtigos.map((artigo) => (
              <CardHome name={artigo.name} image={artigo.image} conteudo={artigo.conteudo}
              ></CardHome>
            ))}
          </div>
        </div>

        <div className='w-full bg-slate-600/70 shadow-2xl shadow-slate-900/25 h-[500px] mt-10 flex flex-col items-center justify-center
                space-y-10'>

          <h1 className='text-5xl font-bold text-white text-center'>Está procurando algo para ler?</h1>
          <h2 className='text-4xl font-semibold text-white text-center'>Ache os melhores livros de <span className='text-amber-400 font-bold'>engenharia</span> aqui </h2>
          <button
            className='w-120 h-15 bg-amber-400 text-white rounded-2xl text-2xl font-semibold hover:bg-amber-500/90 duration-500'>
            Buscar um livro
          </button>
        </div>

      </div>
    </>
  )

}
export default HomePage;
