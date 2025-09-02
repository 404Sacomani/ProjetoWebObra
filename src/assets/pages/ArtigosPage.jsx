import { useState, useEffect } from 'react';
import BuscaArtigo from '../components/BuscaArtigos.jsx';
import CardArtigo from '../components/CardArtigoBlog.jsx';
import Pagination from '../components/Pagination.jsx';
import LoadingSpin from '../components/LoadingSpin.jsx';
import api from '../../services/api';

const ARTICLES_PER_PAGE = 9

function ArtigosPage() {
  const [artigos, setArtigos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalArtigos, setTotalArtigos] = useState(0);

  useEffect(() => {
    async function fetchArtigos() {
      try {
        setLoading(true);
        const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
        const response = await api.get(`/blog?_start=${startIndex}&_limit=${ARTICLES_PER_PAGE}`);

        if (!response.data) {
          throw new Error('Falha ao carregar o conteúdo.');
        }

        setArtigos(response.data);
        setTotalArtigos(Number(response.headers['x-total-count']));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchArtigos();
  }, [currentPage]);

  const totalPages = Math.ceil(totalArtigos / ARTICLES_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) {
    return (
      <div className="bg-slate-800 py-20 min-h-screen flex items-center justify-center text-amber-400">
        <LoadingSpin />
      </div>
    );
  }

  if (error || !artigos) {
    return (
      <div className="bg-slate-800 py-20 min-h-screen flex flex-col items-center justify-center text-red-600">
        <h1 className="text-3xl text-center">Erro: {error}</h1>
        <p className="mt-4 text-center text-slate-400 mb-5">Não foi possível carregar os artigos.</p>
        <LoadingSpin />
      </div>
    );
  }


  return (
    <div className="bg-slate-800 py-20 min-h-screen">
      <header className="space-y-5">
        <h1 className="text-center text-5xl font-extrabold text-slate-200">
          Nossas Publicações
        </h1>
        <p className="text-center text-xl text-slate-400 max-w-2xl mx-auto">
          Explore nossos artigos sobre engenharia civil e informática, criados para expandir seus horizontes.
        </p>
      </header>

      <main className="w-full mx-auto px-4 md:px-8 mt-10 max-w-7xl">
        <BuscaArtigo />

        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8'>
          {artigos.map((artigo) => (
            <CardArtigo key={artigo.slugs} artigo={artigo} />
          ))}
        </section>
      </main>

      <footer className="mt-16">
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </footer>

      { }
    </div>
  );
}

export default ArtigosPage;