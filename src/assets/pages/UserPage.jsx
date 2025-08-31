import { useState } from 'react';
import LoadingSpin from '../components/LoadingSpin';
import imgLivro from '../../../public/imagens/img_cr_12.png';
import { useNavigate } from 'react-router';
import api from '../../services/api';

function AuthPage() {
    const navegate = useNavigate()
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleToggleView = () => {
        setIsLogin(!isLogin);
        setFormData({
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        });
    };
    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        if (!isLogin) {
            try {
                await api.post('/admin/cadastro', {
                    name: formData.name,
                    email: formData.email,
                    password: formData.password,
                    userName: formData.email
                })

                alert("Usuario cadastrado com sucesso")

            } catch (error) {

                alert("Error ao cadastrar Usuario")
            }
        }
        else {
            try {
                const { data: token } = await api.post('/admin/login', {
                    email: formData.email,
                    password: formData.password
                })
                localStorage.setItem('Token', token)
                console.log(token)

                navegate('/admin/painel-controle')

            } catch (error) {
                
                alert('Email ou Senha incorretos, tente novamente.')
                setEmail('');
                setPassword('');
            }
            finally {
                setLoading(false); 
            }
        }
    };

    return (
        <div
            style={{ backgroundImage: `url(${imgLivro})` }}
            className='min-h-screen w-full bg-cover bg-center flex items-center justify-center p-4'
        >
            <div className='w-full max-w-md bg-slate-800/80 backdrop-blur-md rounded-lg shadow-lg p-8 transform hover:scale-105 transition-all duration-300'>
                <div className="text-center mb-6">
                    <h1 className="text-3xl md:text-4xl font-black text-slate-200 drop-shadow-lg tracking-wider uppercase">
                        {isLogin ? 'Entrar' : 'Cadastrar'}
                    </h1>
                    <div className="w-16 h-1 bg-amber-400 mx-auto mt-2 rounded-full"></div>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {!isLogin && (
                        <input
                            type="text"
                            name="name"
                            placeholder="Nome completo"
                            value={formData.name}
                            onChange={handleChange}
                            required={!isLogin}
                            className='w-full p-3 rounded-lg bg-slate-700 text-slate-200 border-2 border-transparent focus:border-amber-400 focus:outline-none transition-all duration-300'
                        />
                    )}
                    <input
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className='w-full p-3 rounded-lg bg-slate-700 text-slate-200 border-2 border-transparent focus:border-amber-400 focus:outline-none transition-all duration-300'
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Senha"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className='w-full p-3 rounded-lg bg-slate-700 text-slate-200 border-2 border-transparent focus:border-amber-400 focus:outline-none transition-all duration-300'
                    />
                    {!isLogin && (
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirmar senha"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required={!isLogin}
                            className='w-full p-3 rounded-lg bg-slate-700 text-slate-200 border-2 border-transparent focus:border-amber-400 focus:outline-none transition-all duration-300'
                        />
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full py-3 mt-4 rounded-lg text-lg font-bold uppercase tracking-wider transition-all duration-300 ${loading ? 'bg-amber-400/70 cursor-not-allowed' : 'bg-amber-400 text-slate-900 hover:bg-amber-500 hover:-translate-y-1 shadow-lg'}`}
                    >
                        {loading ? <LoadingSpin /> : (isLogin ? 'Entrar' : 'Cadastrar')}
                    </button>
                </form>
                <div className="text-center mt-6">
                    <button
                        onClick={handleToggleView}
                        className="text-slate-300 hover:text-amber-400 transition-colors duration-300 text-sm md:text-base font-semibold"
                    >
                        {isLogin ? 'Não tem uma conta? Cadastre-se!' : 'Já tem uma conta? Entrar!'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AuthPage;