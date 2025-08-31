
function CardSimu({ titulo, desc, stick }) {

  const valorStick = (() => {
    switch (stick) {
      case 0:
        return 'calculate';
      case 1:
        return 'article';
      case 2:
        return 'menu_book';
      default:
        return 'calculate'; // Adicione um caso padrão
    }
  })();
  return (
    <div className="bg-slate-900 p-8 rounded-lg shadow-lg hover:shadow-slate-500/20 transform hover:-translate-y-2 transition-all duration-300">
      <span className="material-icons text-amber-400 text-7xl mb-4">{valorStick}</span>
      <h3 className="text-4xl font-bold mb-2 text-slate-200">{titulo}</h3>
      <p className="text-slate-400">C{desc}</p>
      <a className="mt-4 inline-block text-amber-400 hover:text-amber-500 font-semibold" href="#">Acessar agora <span className="material-icons align-middle">arrow_forward</span></a>
    </div>
  )
}
export default CardSimu