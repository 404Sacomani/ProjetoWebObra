

function CardLivros({ title, autor, image }) {
    return (
        <div className="py-10 flex flex-col items-center bg-slate-900 rounded-lg shadow-lg text-center p-6 transform hover:-translate-y-2 transition-transform hover:shadow-slate-500/20 duration-300">
            <img alt="Capa do livro Concreto Armado Eu Te Amo" className="h-56 lg:mx-auto mb-4 rounded" src={image} />
            <h4 className="font-bold text-xl text-slate-200">{title}</h4>
            <p className="text-slate-400 text-sm mb-4 slate-slate-400">{autor}</p>
            <a className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-md" href="#">Comprar com cupom</a>
        </div>
    )
}

export default CardLivros