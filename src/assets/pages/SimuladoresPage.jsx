import CardSimu from '../components/CardSimu'

function SimuladoresPage() {
  return (
    <main className="flex justify-center">
      <div className="bg-red-200 w-[75%] h-[2000px] space-y-10">

        <div className="w-full h-50 flex flex-col items-center mt-20">
          <h1 className="text-amber-400 text-center font-bold text-6xl"
          >Simuladores</h1>
          <p className="w-200 text-xl text-black text-center font-semibold"
          >Descubra ferramentas interativas para calcular e resolver problemas da engenharia civil. Aprenda na prática e amplie seus conhecimentos.</p>
        </div>

        <CardSimu></CardSimu>
      </div>
    </main>
  )
}
export default SimuladoresPage;