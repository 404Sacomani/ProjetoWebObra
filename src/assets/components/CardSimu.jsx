
function CardSimu({ titulo, desc }) {
    return (
        <div 
  className='w-100 m-3 md:m-7 p-6 shadow-lg shadow-zinc-600/60 border-2 border-amber-400 rounded-2xl 
             flex flex-col items-center justify-between space-y-5 lg:space-y-8 group 
             transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105'
>
  <h1 className='text-3xl lg:text-4xl font-black text-amber-500 mt-2 text-center uppercase tracking-wide'>
    {titulo}
  </h1>
  <p className='mx-4 lg:mx-8 text-base md:text-lg font-medium text-white text-center flex-grow'>
    {desc}
  </p>
  <a
    className='w-full py-3 mt-4 text-center rounded-full bg-amber-400 text-white 
               font-bold uppercase tracking-wider transition-colors duration-300
               hover:bg-amber-500'
  >
    Acessar link
  </a>
</div>
    )
}
export default CardSimu