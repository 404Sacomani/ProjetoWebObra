
function BuscaArtigo() {
    return (
        <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="flex-1">
                <label className="relative">
                    <div className="text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" data-icon="MagnifyingGlass" data-size="20px" data-weight="regular">
                        <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg">
                            <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                        </svg>
                    </div>
                    <input className="form-input w-full rounded-lg bg-slate-900 border-slate-700 text-white placeholder:text-slate-400 h-12 pl-12 pr-4 focus:border-amber-500 focus:ring-amber-500" placeholder="Pesquisar artigos..." type="search" />
                </label>
            </div>
            <div className="flex gap-4">
                <div className="relative">
                    <select className="form-select appearance-none w-full md:w-48 rounded-lg bg-slate-900 border-slate-700 text-white h-12 px-4 pr-10 focus:border-amber-500 focus:ring-amber-500">
                        <option>Todas as Categorias</option>
                        <option>Inteligência Artificial</option>
                        <option>Modelagem 3D</option>
                        <option>Segurança de Dados</option>
                        <option>Automação</option>
                    </select>
                    <div className="text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg">
                            <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BuscaArtigo;