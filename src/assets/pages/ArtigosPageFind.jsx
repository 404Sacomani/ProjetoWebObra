import { useEffect, useState } from "react"
import { useParams } from "react-router"
import LoadingSpin from "../components/LoadingSpin"
import api from "../../services/api"
import dataAtualForm from "../components/ComponentDate.js"
import { Editor } from '@tinymce/tinymce-react';
import './teste.css'

function ArtigoPageFind() {

    const { slug } = useParams() //->pega o slug da url
    const [artigo, setArtigo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchArtigo() {
            try {
                const response = await api.get(`/blog/${slug}`)

                setArtigo(response.data)
            } catch (error) {
                setError('Não foi possível carregar o artigo.');
            } finally {
                setLoading(false);
            }
        }
        fetchArtigo()
    }, [slug])
    if (loading) {
        return (
            <div className="bg-slate-800 py-20 min-h-screen flex items-center justify-center text-amber-400">
                <LoadingSpin />
            </div>
        );
    }

    if (error || !artigo) {
        return (
            <div className="bg-slate-800 py-20 min-h-screen flex flex-col items-center justify-center text-red-600">
                <h1 className="text-3xl text-center">Erro: {error}</h1>
                <p className="mt-4 text-center text-slate-400 mb-5">Não foi possível carregar os artigos.</p>
                <LoadingSpin />
            </div>
        );
    }

    const htmlTextTyni = { __html: artigo.conteudo }
    return (
        <>
            <section className="bg-slate-800">
                <header className="w-[60%] mx-auto flex flex-col space-y-5 py-20">
                    <div>
                        <a href="/blog" className="text-slate-500 text-2sm hover:text-slate-400 duration-400">Artigos/ </a>
                        <a href={`/blog/${artigo.slugs}`} className="text-slate-300 hover:text-slate-200 duration-100">{artigo.titulo}</a>
                    </div>
                    <h1 className="text-6xl text-slate-200 font-serif "
                    >{artigo.titulo}</h1>
                    <p className="text-slate-400"
                    >autor <span className="text-amber-400">{artigo.autor.name}</span> | {dataAtualForm(artigo.dataPublic)}</p>
                    <img src={artigo.imagemCapa} alt={artigo.altCapa} className="max-h-[550px] w-full object-cover object-center" />
                    <p className="text-slate-300 font-serif text-xl "
                    >{artigo.subtitulo}</p>
                </header>
                <main className="w-[60%] mx-auto flex flex-col pb-20">
                    <div
                        dangerouslySetInnerHTML={htmlTextTyni}
                        className="prose teste"
                    >
                    </div>
                </main>
            </section >
        </>
    )
}

export default ArtigoPageFind