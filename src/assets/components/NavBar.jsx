import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '../components/Logo'


function NavBar() {
    const logoSize = 60;
    const [menuOpen, setMenuOpen] = useState(false);

    const navbarData = [
        { name: 'Home', path: "/" },
        { name: 'Blog', path: "/service" },
        { name: 'Artigos', path: "/about" },
        { name: 'Simuladores', path: "/contact" }
    ];

    // Função para fechar o menu ao clicar em um link no modo mobile
    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <nav className='sticky top-0 z-50 w-full bg-slate-900 text-amber-50 shadow-md shadow-slate-800/35'>
            <div className="flex items-center justify-between p-4 lg:mx-20">

                <NavLink to='/' className='flex flex-shrink-0 items-center space-x-3' onClick={handleLinkClick}>
                    <Logo imgW={logoSize} imgH={logoSize} />
                    <h1 className='max-lg:hidden text-3xl font-semibold transition-transform hover:scale-105 max-sm:absolute left-1/3'>
                        Obra Ativa
                    </h1>
                </NavLink>

                <div className='hidden lg:flex items-center space-x-8'>
                    {navbarData.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) =>
                                `font-bold transition-all duration-300
                                 ${isActive ? "text-amber-400 border-b-2 border-amber-400" : "text-amber-50 hover:text-slate-500 hover:scale-105"}`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>

                <div className='flex relative items-center'>
                    <input
                        type="text"
                        placeholder='Procure algo aqui...'
                        className='peer h-10 w-60 rounded-full border-2 border-slate-500 bg-slate-800 pl-5 text-sm
                                   outline-none transition-all duration-500 md:focus:w-80 focus:border-amber-400 sm:hover:w-80 hover:border-amber-400
                                   max-md:w-40 max-md:h-8'
                    />
                    <button className='absolute right-1 h-8 w-20 rounded-full bg-slate-700 font-semibold text-white
                                     transition-colors duration-300 peer-focus:bg-amber-500 peer-hover:bg-amber-500  hover:bg-amber-500
                                     max-md:w-15 max-md:h-6 max-md:hidden'>
                        Buscar
                    </button>
                </div>

                {/* Botão do menu mobile ---------------------- */}
                <div className="w-[60px] flex items-center justify-end lg:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X size={30} /> : <Menu size={30} />}
                    </button>
                </div>
            </div>

            {/* Menu mobile Dropdown ---------------------------*/}
            {menuOpen && (
                <div className="lg:hidden absolute w-full bg-slate-900 flex flex-col items-center space-y-6 py-8 border-t border-slate-700">
                    {navbarData.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            onClick={handleLinkClick}
                            className={({ isActive }) =>
                                `text-xl font-bold transition-colors duration-300
                                 ${isActive ? "text-amber-400" : "text-amber-50"}`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>
            )}
        </nav>
    );
}

export default NavBar;
