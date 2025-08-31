// src/pages/CriarArtigo.jsx

import { useState, useRef } from 'react';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { Editor } from '@tinymce/tinymce-react';

function CriarArtigo() {
    const navigate = useNavigate();
    const editorRef = useRef(null);

    const [formData, setFormData] = useState({
        titulo: '',
        subtitulo: '',
        resumo: '',
        conteudo: '',
        tags: '',
        slugs: '',
        status: 'rascunho',
        autorId: '68af859cd3f9997d2e817800', 
        imagemCapa: '',
        altCapa: '',
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Obtém o token de autenticação, idealmente de um contexto ou local storage.
    const token = localStorage.getItem('Token'); // Exemplo: pegando do localStorage

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Função para tratar o envio do formulário, fora do useEffect.
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const editorContent = editorRef.current ? editorRef.current.getContent() : '';

        if (!editorContent) {
            setError('O conteúdo do artigo não pode estar vazio.');
            setLoading(false);
            return;
        }
        
        // Adiciona validação para outros campos obrigatórios
        if (!formData.titulo || !formData.subtitulo || !formData.resumo || !formData.tags || !formData.slugs) {
            setError('Por favor, preencha todos os campos obrigatórios.');
            setLoading(false);
            return;
        }

        try {
            const dataToSend = {
                ...formData,
                conteudo: editorContent,
                tags: formData.tags.split(',').map(tag => tag.trim()),
            };
            
            // Verifique se o token existe antes de fazer a requisição.
            if (!token) {
                setError('Token de autenticação não encontrado. Por favor, faça login novamente.');
                setLoading(false);
                return;
            }

            const response = await api.post('/admin/artigocreate', dataToSend, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            console.log('Artigo salvo com sucesso:', response.data);
            alert('Artigo Criado com Sucesso!');

        } catch (err) {
            console.error('Erro ao salvar o artigo:', err);
            // Captura a mensagem de erro da API, se disponível.
            const errorMessage = err.response?.data?.message || 'Erro ao salvar o artigo. Por favor, tente novamente.';
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Criar Nova Publicação</h1>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
                <div className="mb-4">
                    <label htmlFor="titulo" className="block text-gray-700 font-bold mb-2">Título</label>
                    <input
                        type="text"
                        id="titulo"
                        name="titulo"
                        value={formData.titulo}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="subtitulo" className="block text-gray-700 font-bold mb-2">Subtítulo</label>
                    <input
                        type="text"
                        id="subtitulo"
                        name="subtitulo"
                        value={formData.subtitulo}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="resumo" className="block text-gray-700 font-bold mb-2">Resumo</label>
                    <textarea
                        id="resumo"
                        name="resumo"
                        value={formData.resumo}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        rows="3"
                        required
                    ></textarea>
                </div>

                <div className="mb-4">
                    <label htmlFor="conteudo" className="block text-gray-700 font-bold mb-2">Conteúdo</label>
                    <Editor
                        apiKey={process.env.API_TYNI}
                        onInit={(_evt, editor) => editorRef.current = editor}
                        initialValue=""
                        init={{
                            height: 500,
                            menubar: false,
                            plugins: [
                                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                            ],
                            toolbar: 'undo redo | blocks | ' +
                                'bold italic forecolor | alignleft aligncenter ' +
                                'alignright alignjustify | bullist numlist outdent indent | ' +
                                'removeformat | help',
                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                        }}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="tags" className="block text-gray-700 font-bold mb-2">Tags (separe por vírgula)</label>
                    <input
                        type="text"
                        id="tags"
                        name="tags"
                        value={formData.tags}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="slugs" className="block text-gray-700 font-bold mb-2">Slug</label>
                    <input
                        type="text"
                        id="slugs"
                        name="slugs"
                        value={formData.slugs}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="imagemCapa" className="block text-gray-700 font-bold mb-2">URL da Imagem de Capa</label>
                    <input
                        type="url"
                        id="imagemCapa"
                        name="imagemCapa"
                        value={formData.imagemCapa}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="altCapa" className="block text-gray-700 font-bold mb-2">Texto Alternativo da Imagem</label>
                    <input
                        type="text"
                        id="altCapa"
                        name="altCapa"
                        value={formData.altCapa}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
                >
                    {loading ? 'Salvando...' : 'Salvar Artigo'}
                </button>
            </form>

            {error && <div className="mt-4 text-red-500">{error}</div>}
        </div>
    );
}

export default CriarArtigo;