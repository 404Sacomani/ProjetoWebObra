import LoadingSpin from "../components/LoadingSpin";

function AboutPage() {
  return (
    <main className="w-full h-50 flex flex-col items-center justify-center space-y-10">
      <h1 className='text-xl xl:text-4xl text-amber-400 font-semibold'>Pagina em Desenvolvimento</h1>
      <LoadingSpin></LoadingSpin>
    </main>
  )
}
export default AboutPage;