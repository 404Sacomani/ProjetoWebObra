import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../components/Logo';
import '../components/Nav.css'

function NavBar() {
    const logoSize = 60;

    const navbarData = [
        { name: 'Home', path: "/" },
        { name: 'Blog', path: "/service" },
        { name: 'Artigos', path: "/about" },
        { name: 'Simuladores', path: "/contact" } 
    ];

    return (
        <nav className='sticky top-0 z-50 w-full px-2 fixed-top-0 flex justify-between bg-slate-900 text-amber-50 shadow-md shadow-slate-800/35'>
                <NavLink key='/' to='/' 
                className='flex items-center m-2 space-x-3'>
                    <Logo imgW={logoSize} imgH={logoSize} />
                    <h1 className='text-3xl font-semibold text-center hover:scale-105 '>Obra Ativa</h1>
                </NavLink>
            
            <div className='flex items-center'>
                {navbarData.map((link) => (
                    <NavLink
                        key={link.path}
                        to={link.path}
                        className={({isActive}) => isActive ? "ml-5 mr-5 text-amber-400 border-b-2 font-bold hover:scale-104": "ml-5 mr-5 text-amber-50 font-bold hover:scale-105 border-b-0 hover:text-zinc-300"}
                    >
                        {link.name}
                    </NavLink>
                ))}
            </div>
            <div className='flex items-center space-x-5'>
                <input type="text" name="Pesquisar" id="input" placeholder='Procure algo aqui...'
                className='opacity-70 border-2 border-white text-sm w-60 h-8 rounded-2xl outline-none appearance-none pl-5 p-2
                group-focus:opacity-100 group peer focus:border-amber-400 focus:w-80 duration-700 
                hover:w-80 hover:border-amber-400'/> 

                <button className='absolute bg-slate-900 -right-0 w-20 h-8 mr-5 font-semibold border-2 border-white overflow-hidden 
                group rounded-full cursor-pointer group peer-focus:border-amber-400 peer-hover:border-amber-400 hover:bg-amber-400 duration-400'
                >
                    <span className='absolute inset-0 bg-amber-400 translate-x-[-100%] 
                    group-hover:translate-x-0 rounded-full transition-transform duration-400'></span>

                    <span className='relative z-10 text-white
                    group-hover:text-white transition-colors duration-400'>
                        Buscar
                    </span>
                </button>
            </div>
        </nav>
    );
}

export default NavBar;